'use server';

import { Prisma } from '@prisma/client';
import ActionResponse from './actionResponse';
import prisma from './prisma';

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: {
      id: 'asc',
    },
  });
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
