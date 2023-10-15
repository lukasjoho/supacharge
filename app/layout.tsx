import AuthProvider from '@/components/providers/SessionProvider';
import { ModalProvider } from '@/components/shared/modal';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supacharge',
  description: 'Your favourite product app.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col">
          <ModalProvider>
            <AuthProvider>{children}</AuthProvider>
          </ModalProvider>
        </main>
      </body>
    </html>
  );
}
