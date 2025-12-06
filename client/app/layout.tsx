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
import Footer from '@/components/main/Footer';

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
  title: 'Faraaz Ashraf | Full-Stack Developer (Next.js & Python)',
  description:
    'Full-stack developer specializing in Next.js, Python, and cloud-ready architectures. Building fast, scalable, and modern web applications with clean engineering practices.',
  keywords: [
    'full stack developer',
    'next.js developer',
    'python developer',
    'freelancer',
    'web developer',
    'portfolio',
    'react',
    'backend developer',
  ],

  openGraph: {
    title: 'Faraaz Ashraf — Full-Stack Developer (Next.js & Python)',
    description:
      'Explore the work, skills, and projects of a developer focused on high-performance Next.js apps and robust backend systems.',
    siteName: 'Faraaz Ashraf',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'Faraaz Ashraf — Full Stack Developer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Faraaz Ashraf | Full-Stack Developer • Next.js & Python',
    description:
      'A clean, fast portfolio crafted with modern web engineering. Discover projects, skills, and services.',
    creator: '@heyanonymouss', // Use your actual handle if you create one
    images: ['/seo.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

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
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
