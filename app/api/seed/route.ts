import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const TEAM_ID = 'clnrf4dzp0000hniqjt0jl2fw';

export async function GET(request: NextRequest) {
  try {
    await prisma.project.deleteMany({
      where: {
        teamId: TEAM_ID,
      },
    });
    const res = await prisma.project.createMany({
      data: [...data],
    });
    return NextResponse.json(
      { ok: true, res },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || 'Internal Server Error',
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
}

const generateDatePlusDays = (days: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  const isoString = currentDate.toISOString();
  return isoString;
};

const data = [
  {
    name: 'Personalization Algorithm',
    hypothesis:
      'Compare the effectiveness of two different recommendation algorithms in showing personalized product recommendations to users and driving additional sales.',
    startDate: generateDatePlusDays(-5),
    endDate: generateDatePlusDays(11),
    teamId: TEAM_ID,
  },
  {
    name: 'Checkout Process Simplification',
    hypothesis:
      'Evaluate a simplified checkout process against the current process to identify if reducing steps and form fields leads to a decrease in cart abandonment rates.',
    startDate: generateDatePlusDays(-25),
    endDate: generateDatePlusDays(-11),
    teamId: TEAM_ID,
  },
  {
    name: 'Social Proof Pop-ups',
    hypothesis:
      'Test the use of real-time notifications showing recent purchases to determine if they enhance the perceived popularity of products and influence purchasing decisions.',
    startDate: generateDatePlusDays(-10),
    endDate: generateDatePlusDays(20),
    teamId: TEAM_ID,
  },
  {
    name: 'User Reviews Display',
    hypothesis:
      'Test the impact of showing user reviews prominently on product pages versus placing them in a separate section to see which approach builds more trust and credibility.',
    startDate: generateDatePlusDays(3),
    endDate: generateDatePlusDays(12),
    teamId: TEAM_ID,
  },
  {
    name: 'Discount Placement',
    hypothesis:
      'Compare the performance of displaying discounts on product listings versus displaying them on individual product pages to understand where discounts are more effective.',
    startDate: generateDatePlusDays(-12),
    endDate: generateDatePlusDays(-5),
    teamId: TEAM_ID,
  },
  {
    name: 'Homepage Hero Banner',
    hypothesis:
      'Test two different hero banners on the homepage to determine which design and messaging lead to higher click-through rates and engagement.',
    startDate: generateDatePlusDays(-20),
    endDate: generateDatePlusDays(4),
    teamId: TEAM_ID,
  },
  {
    name: 'Free Shipping Threshold',
    hypothesis:
      'Test the impact of different free shipping thresholds on average order value and overall sales to find the optimal threshold for maximum revenue.',
    startDate: generateDatePlusDays(5),
    endDate: generateDatePlusDays(19),
    teamId: TEAM_ID,
  },
];
