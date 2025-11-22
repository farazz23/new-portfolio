import type { Metadata } from 'next';
import { Fira_Code, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/main/Header';
import { ThemeProvider } from 'next-themes';

const fira_code = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Faraaz Ashraf',
  description: 'Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fira_code.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="relative flex flex-col min-h-screen bg-gradient-to-r from-blue-100/50 via-rose-100/50 to-pink-100 dark:from-blue-950/50 dark:via-purple-950/10 dark:to-pink-950/20 transition-colors duration-500">
            <Header />
            <main className="flex-1">{children}</main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
