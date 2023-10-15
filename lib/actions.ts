'use server';

import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
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
  const updatedItem = await prisma.project.update({
    where: { id },
    data,
  });
  revalidatePath('/team/supacharge/dashboard');
  return updatedItem;
}
