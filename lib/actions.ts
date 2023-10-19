'use server';

import { Decision, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import ActionResponse from './actionResponse';
import { getAuthUser } from './auth';
import prisma from './prisma';

export async function getTimelineProjects(teamSlug: string) {
  //only get projects with start and end dates
  return await prisma.project.findMany({
    where: {
      AND: [{ startDate: { not: null } }, { endDate: { not: null } }],
      team: {
        slug: teamSlug,
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
}

export async function getCurrentTeam(slug: string) {
  return await prisma.team.findFirst({
    where: {
      slug,
    },
  });
}

export async function assignCurrentTeam(teamSlug: string) {
  const user = await getAuthUser();
  console.log('SERVER IFRED');

  if (!user) return;
  await prisma.user.update({
    where: {
      email: user.email as undefined | string,
    },
    data: {
      currentTeam: {
        connect: {
          slug: teamSlug,
        },
      },
    },
  });
}

export async function createAPIKey(
  data: {
    name: string;
  },
  team: string
) {
  try {
    const dbKey = await prisma.apiKey.create({
      data: {
        ...data,
        team: {
          connect: {
            slug: team,
          },
        },
      },
    });
    return ActionResponse.success('API Key created.', dbKey);
  } catch (error: any) {
    return ActionResponse.error(error?.message || 'Update failed', error);
  }
}

export async function updateProjectDecision(
  projectId: string,
  decision: Decision
) {
  try {
    const updatedItem = await prisma.project.update({
      where: { id: projectId },
      data: {
        decision,
      },
    });
    return ActionResponse.success('Updated decision', updatedItem);
  } catch (error: any) {
    return ActionResponse.error(error.message || 'Update failed', error);
  }
}

export async function updateProjectAssignee(projectId: string, userId: string) {
  try {
    const updatedItem = await prisma.project.update({
      where: { id: projectId },
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return ActionResponse.success('Updated assignee', updatedItem);
  } catch (error: any) {
    return ActionResponse.error(error.message || 'Update failed', error);
  }
}

export async function getUsersByTeam(teamSlug: string) {
  return await prisma.user.findMany({
    where: {
      teams: {
        some: {
          slug: teamSlug,
        },
      },
    },
  });
}

export async function getTeamsByUser() {
  const user = await getAuthUser();
  if (!user) throw new Error('No user found');
  return await prisma.team.findMany({
    where: {
      users: {
        some: {
          email: user.email as undefined | string,
        },
      },
    },
  });
}

export async function createProject(
  data: Omit<Prisma.ProjectCreateInput, 'team'>
) {
  const user = await getAuthUser();
  const teamId = user?.currentTeam.id;
  if (!teamId) throw new Error('No team id found');

  try {
    const project = await prisma.project.create({
      data: {
        ...data,
        team: {
          connect: {
            id: teamId,
          },
        },
      },
    });
    revalidatePath('/team/[id]/dashboard', 'layout');
    revalidatePath('/team/[id]/dashboard', 'page');
    return ActionResponse.success('Project created', project);
  } catch (error: any) {
    return ActionResponse.error(
      error.message || 'Project creation failed.',
      error
    );
  }
}

export async function updateProject(
  id: string,
  data: Prisma.ProjectUpdateInput
) {
  try {
    const updatedItem = await prisma.project.update({
      where: { id },
      data,
    });
    return ActionResponse.success('Updated', updatedItem);
  } catch (error: any) {
    return ActionResponse.error(error.message || 'Update failed', error);
  }
}
