'use client';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button, ButtonProps } from '../ui/button';

interface LoginButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const LoginButton = ({ children, ...props }: LoginButtonProps) => {
  const { className, ...rest } = props;
  return (
    <Button
      className={cn('flex gap-1.5', className)}
      {...rest}
      onClick={() => signIn('google')}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
