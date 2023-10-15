import { Icons } from './Icons';
import LoginButton from './LoginButton';
import Title from './Title';

const LoginScreen = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center min-h-[300px] p-6 py-24 md:p-12">
      <div className="flex justify-center">
        <Icons.logoBase className="w-1/4 md:w-1/2" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="space-y-1 flex flex-col items-center text-center">
          <Title>Welcome to Supacharge</Title>
          <p className="text-muted-foreground">Login or register.</p>
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
