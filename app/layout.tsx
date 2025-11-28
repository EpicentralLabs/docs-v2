import './global.css';
import 'katex/dist/katex.min.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { OpenPanelComponent } from '@openpanel/nextjs';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://docs.epicentral.io'),
  title: {
    default: 'Epicentral Docs',
    template: '%s | Epicentral Docs',
  },
  description: 'Documentation for Epicentral Labs - Learn about the Epicentral Labs, governance, staking, and more.',
  keywords: ['Epicentral Labs', 'Epicentral DAO', 'Solana', 'DAO', 'governance', 'staking', 'LABS token', 'blockchain', 'solana'],
  authors: [{ name: 'Epicentral Labs, DAO LLC' }],
  creator: 'Epicentral Labs',
  publisher: 'Epicentral Docs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/epicentral-labs-logo.svg',
    shortcut: '/epicentral-labs-logo.svg',
    apple: '/epicentral-labs-logo.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Epicentral Docs',
    title: 'Epicentral Docs',
    description: 'Documentation for Epicentral Labs - Learn about the Epicentral Labs, governance, staking, and more.',
    images: [
      {
        url: '/epicentral-labs-banner.png',
        width: 1200,
        height: 630,
        alt: 'Epicentral Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epicentral Labs',
    description: 'Documentation for Epicentral Labs - Learn about the Epicentral DAO, governance, staking, and more.',
    images: ['/epicentral-labs-banner.png'],
    creator: '@EpicentralLabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here if needed
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <OpenPanelComponent
            clientId="your-client-id"
            trackScreenViews={true}
            // trackAttributes={true}
            // trackOutgoingLinks={true}
            // If you have a user id, you can pass it here to identify the user
            // profileId={'123'}
          />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
