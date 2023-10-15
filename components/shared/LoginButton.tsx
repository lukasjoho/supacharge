'use client';
import { cn } from '@/lib/utils';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

interface LoginButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  loggedOut?: React.ReactNode;
  loggedIn?: React.ReactNode;
}

const LoginButton = ({
  loggedOut = 'Log in',
  loggedIn = 'Log out',
  ...props
}: LoginButtonProps) => {
  const { data: session } = useSession();
  const { className, ...rest } = props;
  return (
    <>
      {session ? (
        <Button
          className={cn('', className)}
          onClick={() => signOut()}
          {...rest}
          variant="secondary"
        >
          {loggedIn}
        </Button>
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

export default LoginButton;
