import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  //get auth header
  const authHeader = req.headers.get('authorization');
  if (!authHeader) {
    return NextResponse.json(
      { error: 'No authorization header.' },
      { status: 401 }
    );
  }
  const getTeamFromKey = await prisma.apiKey.findUnique({
    where: {
      id: authHeader,
    },
  });
  if (!getTeamFromKey) {
    return NextResponse.json({ error: 'Invalid API key.' }, { status: 401 });
  }
  const experiments = await prisma.project.findMany({
    where: {
      teamId: getTeamFromKey.teamId,
    },
    select: {
      id: true,
      slug: true,
      name: true,
      startDate: true,
      endDate: true,
      status: true,
      variants: true,
    },
  });
  return NextResponse.json(experiments);
}
