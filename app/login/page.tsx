import Container from '@/components/layout/Container';
import LoginScreen from '@/components/shared/LoginScreen';

const LoginPage = () => {
  return (
    <div className="grow flex flex-col items-center justify-center py-12 md:py-24">
      <Container className="max-w-[900px] ">
        <div className="border rounded-lg">
          <LoginScreen />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
