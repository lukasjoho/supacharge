interface ModalFooterProps {
  children: React.ReactNode;
}

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="relative bottom-0 p-4 md:p-6 -mt-4 md:-mt-6 w-full bg-background">
      {children}
    </div>
  );
}
