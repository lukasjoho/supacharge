import { getAuthUser } from '@/lib/auth';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonProps, buttonVariants } from '../ui/button';

interface GoToAppButtonProps extends ButtonProps {}

const GoToAppButton = async ({
  className,
  size = 'default',
  ...rest
}: GoToAppButtonProps) => {
  const user = await getAuthUser();
  return (
    <Link
      href={`/team`}
      className={cn(
        buttonVariants({ variant: 'default', size: size }),
        className
      )}
    >
      {user ? 'Go to app' : 'Log in'}
    </Link>
  );
};

export default GoToAppButton;
