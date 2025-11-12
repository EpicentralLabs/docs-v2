import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { OpenPanelComponent } from '@openpanel/nextjs';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()}>
      <OpenPanelComponent
        clientId="your-client-id"
        trackScreenViews={true}
        // trackAttributes={true}
        // trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
      {children}
    </HomeLayout>
  );
}
