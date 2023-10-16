'use server';

import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import ActionResponse from './actionResponse';
import { getAuthUser } from './auth';
import prisma from './prisma';

export async function getTimelineProjects() {
  //only get projects with start and end dates
  return await prisma.project.findMany({
    where: {
      AND: [{ startDate: { not: null } }, { endDate: { not: null } }],
    },
    orderBy: {
      id: 'asc',
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
