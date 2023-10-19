interface MobileNavListProps {
  children: React.ReactNode;
}

const MobileNavList = ({ children }: MobileNavListProps) => {
  return (
    <nav>
      <ul className="">{children}</ul>
    </nav>
  );
};

export default MobileNavList;
