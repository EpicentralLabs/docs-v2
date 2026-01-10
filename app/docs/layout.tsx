import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { OpenPanelComponent } from '@openpanel/nextjs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        tabs: false,
        defaultOpenLevel: 1,
        collapsible: true,
      }}
      {...baseOptions()}
    >
      <OpenPanelComponent
        clientId="your-client-id"
        trackScreenViews={true}
        // trackAttributes={true}
        // trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
      {children}
    </DocsLayout>
  );
}
