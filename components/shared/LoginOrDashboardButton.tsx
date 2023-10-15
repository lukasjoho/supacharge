'use client';
import { cn } from '@/lib/utils';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';

const LoginOrDashboardButton = (props: any) => {
  const { data: session } = useSession();
  const { className, loggedOut = 'Log in', ...rest } = props;
  return (
    <>
      {session ? (
        <Link
          href="/team/dashboard"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Go to app
        </Link>
      ) : (
        <Button
          className={cn('', className)}
          onClick={() => signIn('google')}
          {...rest}
        >
          {loggedOut}
        </Button>
      )}
    </>
  );
};

export default LoginOrDashboardButton;
