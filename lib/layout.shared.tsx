import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Github, MessageCircle, Twitter } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Epicentral Labs',
    },
    links: [
      {
        type: 'icon',
        url: 'https://github.com/EpicentralLabs',
        text: 'GitHub',
        label: 'GitHub',
        icon: <Github className="size-4.5" />,
        external: true,
        on: 'nav',
      },
      {
        type: 'icon',
        url: 'https://discord.gg/5asAuY2sR8',
        text: 'Discord',
        label: 'Discord',
        icon: <MessageCircle className="size-4.5" />,
        external: true,
        on: 'nav',
      },
      {
        type: 'icon',
        url: 'https://x.com/EpicentralLabs',
        text: 'X (Twitter)',
        label: 'X (Twitter)',
        icon: <Twitter className="size-4.5" />,
        external: true,
        on: 'nav',
      },
    ],
  };
}
