import Image from 'next/image';
import { Icons } from './Icons';
import LoginButton from './LoginButton';

const LoginScreen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[300px]">
      <div className="relative aspect-[3/2] md:aspect-square overflow-hidden">
        {/* <Icons.logoBase className="w-1/4 md:w-1/2" /> */}
        <Image
          src="/rolloutclick.jpg"
          fill
          alt="cursor clicks rollout"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center gap-8 p-6 py-20 md:p-12">
        <div className="space-y-6 flex flex-col items-center text-center">
          {/* <Title>Welcome to Supacharge</Title> */}
          <Icons.logoText className="w-3/4" />
          <p className="text-muted-foreground">
            Orchestrate your experimenation setup by logging in or signing up.
          </p>
        </div>

        <LoginButton>
          <Icons.google className="w-5 h-5" />
          Login with Google
        </LoginButton>
      </div>
    </div>
  );
};

export default LoginScreen;
