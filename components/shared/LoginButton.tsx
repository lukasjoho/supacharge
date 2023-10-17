'use client';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { Button, ButtonProps } from '../ui/button';

interface LoginButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const LoginButton = ({ children, ...props }: LoginButtonProps) => {
  const { className, ...rest } = props;

  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    signIn('google');
    return () => setLoading(false);
  };
  return (
    <Button
      {...rest}
      onClick={handleClick}
      className={cn('flex gap-1.5 justify-center', className)}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {loading ? 'Logging in...' : children}
    </Button>
  );
};

export default LoginButton;
