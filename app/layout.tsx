import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { OpenPanelComponent } from '@openpanel/nextjs';

const inter = Inter({
  subsets: ['latin'],
});

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
