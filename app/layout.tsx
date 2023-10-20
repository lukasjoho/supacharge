import QueryProvider from '@/components/providers/QueryProvider';
import AuthProvider from '@/components/providers/SessionProvider';
import ToasterProvider from '@/components/providers/ToasterProvider';
import { ModalProvider } from '@/components/shared/modal';
import { din, gaegu, inter } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

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
      <body
        className={`${din.variable} ${inter.className} ${gaegu.variable} font-din`}
      >
        <main className="flex min-h-screen flex-col ">
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
