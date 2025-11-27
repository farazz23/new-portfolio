import type { Metadata } from 'next';
import {
  Fira_Code,
  Geist,
  Geist_Mono,
  Poppins,
  Quicksand,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/main/Header';
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Faraaz Ashraf',
  description: 'Software Developer',
  icons: {
    icon: '/favicon-v2.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${quicksand.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-blue-50/50 via-rose-400/30 to-blue-50/50 dark:from-blue-950/50 dark:via-purple-950/10 dark:to-pink-950/20 transition-colors duration-500">
            {/* <BackgroundRippleEffect /> */}
            <Header />
            <main className="flex-1 mt-18  ">
              {children} <Toaster />
            </main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
