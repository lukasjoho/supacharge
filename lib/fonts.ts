import { Gaegu, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const gaegu = Gaegu({
  variable: '--font-gaegu',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const din = localFont({
  variable: '--font-din',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/DINNextLTPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/DINNextLTPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/DINNextLTPro-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/DINNextLTPro-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/DINNextLTPro-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});
