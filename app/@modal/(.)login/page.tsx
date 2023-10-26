import LoginScreen from '@/components/shared/LoginScreen';
import { Modal } from '@/components/shared/modal';
import InterceptionModal from '@/components/shared/modal/InterceptionModal';

const LoginModal = () => {
  return (
    <InterceptionModal>
      <Modal>
        <LoginScreen />
      </Modal>
    </InterceptionModal>
  );
};

export default LoginModal;
