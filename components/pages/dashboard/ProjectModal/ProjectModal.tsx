import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/shared/modal';

const ProjectModal = () => {
  return (
    <Modal>
      <ModalHeader>
        <ModalTitle>Title</ModalTitle>
      </ModalHeader>
      <ModalContent>
        <div className="w-[800px] h-[1200px] bg-red-500">Content</div>
      </ModalContent>
      <ModalFooter>Footer</ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
