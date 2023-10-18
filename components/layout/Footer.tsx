import Link from 'next/link';
import { Icons } from '../shared/Icons';
import Container from './Container';

const Footer = () => {
  return (
    <section className="border-t">
      <Container>
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 md:gap-12 md:grid-cols-2">
            <div className="col-span-1">
              <div className="space-y-4">
                <Icons.logoText className="w-48" />
                <p>
                  Empowering product teams to build better products through
                  experimentation.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <List title="Site">
                <ListItem href="/">Home</ListItem>
                <ListItem href="/releases/launched">Releases</ListItem>
                <ListItem href="/blog">Blog</ListItem>
                <ListItem href="/about">About</ListItem>
                <ListItem href="/feedback">Feedback</ListItem>
              </List>
            </div>
            <div className="col-span-1">
              <List title="Application">
                <ListItem href="/">Dashboard</ListItem>
                <ListItem href="/developers">Developers</ListItem>
              </List>
            </div>
            <div className="col-span-1">
              <List title="Legal">
                <ListItem href="/privacy">Privacy</ListItem>
                <ListItem href="/terms">Terms</ListItem>
              </List>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t py-2 md:py-4 text-muted-foreground text-sm">
        <Container>© 2023 Supacharge</Container>
      </div>
    </section>
  );
};

export default Footer;

const List = ({ title, children }: any) => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="text-sm font-medium text-muted-foreground">{title}</li>
      {children}
    </ul>
  );
};

const ListItem = ({ href, children }: any) => {
  return (
    <li className="list-none pl-0">
      <Link href={href}>{children}</Link>
    </li>
  );
};
