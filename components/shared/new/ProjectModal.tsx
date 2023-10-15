import { Modal, ModalContent, ModalHeader, ModalTitle } from '../modal';

const ProjectModal = () => {
  return (
    <Modal>
      <ModalHeader>
        <ModalTitle>Create team</ModalTitle>
      </ModalHeader>
      <ModalContent>
        <span>Create project...</span>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
