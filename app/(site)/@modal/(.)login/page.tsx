import LoginScreen from '@/components/shared/LoginScreen';
import InterceptionModal from '@/components/shared/modal/InterceptionModal';

const LoginModal = () => {
  return (
    <InterceptionModal>
      <LoginScreen />
    </InterceptionModal>
  );
};

export default LoginModal;
