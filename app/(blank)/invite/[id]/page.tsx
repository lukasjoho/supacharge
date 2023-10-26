import Container from '@/components/layout/Container';
import Avatar from '@/components/shared/Avatar';
import GoToAppButton from '@/components/shared/GoToAppButton';
import { Icons } from '@/components/shared/Icons';
import Title from '@/components/shared/Title';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { AlertOctagon } from 'lucide-react';
import Link from 'next/link';

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const invite = await prisma.invite.findUnique({
    where: {
      id,
    },
    include: {
      team: true,
      sentBy: true,
    },
  });
  if (!invite) {
    return (
      <div className="pt-32">
        <Container>
          <Alert className="bg-red-500/40 border-red-500 ">
            <AlertOctagon className="h-4 w-4" />

            <AlertTitle>Invite invalid</AlertTitle>
            <AlertDescription>
              The invite link is invalid or expired. Please ask your colleague
              to resend the invite or create an account. <br />
              However, you will not be added to the team immediately. You need
              to be invited.
            </AlertDescription>
            <div className="mt-4">
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </Alert>
        </Container>
      </div>
    );
  }
  return (
    <Container className="grow grid place-items-center max-w-[1100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 border rounded-lg p-6 md:p-12 gap-12 md:gap-12 w-full">
        <div className="flex flex-col items-center">
          <Icons.mailopen className="w-24 md:w-40 h-24 md:h-40" />
          <Title className="text-3xl md:text-5xl mt-2 text-center">
            You are invited
          </Title>
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <div className="flex gap-1.5 items-center ">
            <Avatar data={invite.sentBy} className="w-7 h-7" />
            <span>{invite.sentBy.name}</span>
          </div>
          <p className="text-muted-foreground">
            has invited you to join their team
          </p>
          <div className="flex gap-1.5 items-center ">
            <Avatar type="team" data={invite.team} className="w-7 h-7" />
            <span>{invite.team.name}</span>
          </div>
          <GoToAppButton
            size="lg"
            className="w-full md:w-auto mt-6 md:mt-auto"
            href={`/team/${invite.team.slug}`}
          >
            Join Now
          </GoToAppButton>
        </div>
      </div>
    </Container>
  );
};

export default InvitePage;
