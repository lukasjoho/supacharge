import Link from 'next/link';

interface MobileNavListItemProps {
  children: React.ReactNode;
  href: string;
}

const MobileNavListItem = ({ children, href }: MobileNavListItemProps) => {
  return (
    <li key={href}>
      <Link
        href={href}
        className="text-3xl block font-semibold text-left py-3 text-muted-foreground transition duration-100 hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
};

export default MobileNavListItem;
