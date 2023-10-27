import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

const TEAM_ID = 'clnrf4dzp0000hniqjt0jl2fw';
const USER_ID = 'clo72t60p0006hnszyv1m8r19';

export async function POST() {
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

const data: Prisma.ProjectCreateManyInput[] = [
  {
    name: 'Personalization Algorithm',
    slug: 'personalization-algorithm',
    decision: 'ACCEPT',
    hypothesis:
      'Compare the effectiveness of two different recommendation algorithms in showing personalized product recommendations to users and driving additional sales.',
    startDate: generateDatePlusDays(-5),
    endDate: generateDatePlusDays(11),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'ACTIVE',
    improvement: 0.22,
  },
  {
    name: 'Checkout Process Simplification',
    slug: 'checkout-process-simplification',
    decision: 'REJECT',
    hypothesis:
      'Evaluate a simplified checkout process against the current process to identify if reducing steps and form fields leads to a decrease in cart abandonment rates.',
    startDate: generateDatePlusDays(-25),
    endDate: generateDatePlusDays(-11),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'INACTIVE',
    improvement: -0.04,
  },
  {
    name: 'Social Proof Pop-ups',
    slug: 'social-proof-pop-ups',
    decision: 'ITERATE',
    hypothesis:
      'Test the use of real-time notifications showing recent purchases to determine if they enhance the perceived popularity of products and influence purchasing decisions.',
    startDate: generateDatePlusDays(-10),
    endDate: generateDatePlusDays(20),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'ACTIVE',
    improvement: 0.01,
  },
  {
    name: 'User Reviews Display',
    slug: 'user-reviews-display',
    decision: 'NONE',
    hypothesis:
      'Test the impact of showing user reviews prominently on product pages versus placing them in a separate section to see which approach builds more trust and credibility.',
    startDate: generateDatePlusDays(3),
    endDate: generateDatePlusDays(12),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'DRAFT',
    improvement: null,
  },
  {
    name: 'Discount Placement',
    decision: 'ACCEPT',
    slug: 'discount-placement',
    hypothesis:
      'Compare the performance of displaying discounts on product listings versus displaying them on individual product pages to understand where discounts are more effective.',
    startDate: generateDatePlusDays(-12),
    endDate: generateDatePlusDays(-5),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'INACTIVE',
    improvement: 0.09,
  },
  {
    name: 'Homepage Hero Banner',
    slug: 'homepage-hero-banner',
    decision: 'ITERATE',
    hypothesis:
      'Test two different hero banners on the homepage to determine which design and messaging lead to higher click-through rates and engagement.',
    startDate: generateDatePlusDays(-20),
    endDate: generateDatePlusDays(4),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'ACTIVE',
    improvement: -0.03,
  },
  {
    name: 'Free Shipping Threshold',
    slug: 'free-shipping-threshold',
    decision: 'NONE',
    hypothesis:
      'Test the impact of different free shipping thresholds on average order value and overall sales to find the optimal threshold for maximum revenue.',
    startDate: generateDatePlusDays(5),
    endDate: generateDatePlusDays(19),
    teamId: TEAM_ID,
    userId: USER_ID,
    status: 'DRAFT',
    improvement: null,
  },
];
