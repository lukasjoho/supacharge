import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const experiments = await prisma.project.findMany({
    select: {
      startDate: true,
      endDate: true,
      id: true,
      name: true,
      status: true,
    },
  });
  return NextResponse.json(experiments);
}
