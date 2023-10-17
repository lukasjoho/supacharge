import QueryProvider from '@/components/providers/QueryProvider';
import AuthProvider from '@/components/providers/SessionProvider';
import ToasterProvider from '@/components/providers/ToasterProvider';
import { ModalProvider } from '@/components/shared/modal';
import type { Metadata } from 'next';
import { Gaegu, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const gaegu = Gaegu({
  variable: '--font-gaegu',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Supacharge',
  description: 'Experimentation Platform and SDK',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${gaegu.variable}`}>
        <main className="flex min-h-screen flex-col">
          <AuthProvider>
            <QueryProvider>
              <ModalProvider>
                <ToasterProvider>
                  {children} {modal}
                </ToasterProvider>
              </ModalProvider>
            </QueryProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
