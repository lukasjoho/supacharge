import QueryProvider from '@/components/providers/QueryProvider';
import AuthProvider from '@/components/providers/SessionProvider';
import { ModalProvider } from '@/components/shared/modal';
import colors from '@/resolveConfig';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Supacharge',
  description: 'Your favourite product app.',
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
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col">
          <AuthProvider>
            <QueryProvider>
              <ModalProvider>
                {children} {modal}
                <Toaster
                  toastOptions={{
                    // Define default options
                    duration: 3000,
                    success: {
                      style: {
                        background: colors.green[500],
                        color: 'white',
                      },
                      iconTheme: {
                        primary: 'white',
                        secondary: colors.green[500],
                      },
                    },
                    error: {
                      style: {
                        background: colors.red[500],
                        color: 'white',
                      },

                      iconTheme: {
                        primary: 'white',
                        secondary: colors.red[500],
                      },
                    },
                  }}
                />
              </ModalProvider>
            </QueryProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
