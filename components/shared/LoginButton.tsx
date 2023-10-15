'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

const LoginButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => signIn('google')}>Login</Button>
      )}
    </>
  );
};

export default LoginButton;
