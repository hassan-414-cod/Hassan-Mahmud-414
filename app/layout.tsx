import type {Metadata} from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hassan Mahmud | Graphic Designer & Video Editor',
  description: '22-Year-Old Visual Storyteller | Motion Graphics Enthusiast | Social Media Content Creator based in Lahore.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#1A2634] text-[#F5F5F5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
