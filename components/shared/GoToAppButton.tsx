import { getAuthUser } from '@/lib/auth';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonProps, buttonVariants } from '../ui/button';

interface GoToAppButtonProps extends ButtonProps {
  href?: string;
}

const GoToAppButton = async ({
  className,
  size = 'default',
  href = '/team',
  children,
}: GoToAppButtonProps) => {
  const user = await getAuthUser();
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'default', size: size }),
        className
      )}
    >
      {children || (user ? 'Enter App' : 'Get Started')}
    </Link>
  );
};

export default GoToAppButton;
