'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const changelogBadgeVariants = cva(
  'inline-block text-xs font-medium rounded-md border px-2 py-0.5 transition-colors',
  {
    variants: {
      type: {
        RELEASE: [
          'bg-[#4AFFBA]/10 dark:bg-[#4AFFBA]/15',
          'text-[#4AFFBA] dark:text-[#33A177]',
          'border-[#4AFFBA]/30 dark:border-[#4AFFBA]/40',
        ].join(' '),
        UPDATE: [
          'bg-[#4A85FF]/10 dark:bg-[#4A85FF]/15',
          'text-[#4A85FF] dark:text-[#4A85FF]',
          'border-[#4A85FF]/30 dark:border-[#4A85FF]/40',
        ].join(' '),
        PATCH: [
          'bg-[#5F89DE]/10 dark:bg-[#5F89DE]/15',
          'text-[#5F89DE] dark:text-[#5F89DE]',
          'border-[#5F89DE]/30 dark:border-[#5F89DE]/40',
        ].join(' '),
        HOTFIX: [
          'bg-fd-muted dark:bg-fd-muted',
          'text-fd-muted-foreground dark:text-fd-muted-foreground',
          'border-fd-border dark:border-fd-border',
        ].join(' '),
      },
    },
    defaultVariants: {
      type: 'PATCH',
    },
  },
);

export interface ChangelogBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof changelogBadgeVariants> {
  type: 'RELEASE' | 'PATCH' | 'HOTFIX' | 'UPDATE';
}

const ChangelogBadge = React.forwardRef<HTMLSpanElement, ChangelogBadgeProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(changelogBadgeVariants({ type, className }))}
        {...props}
      >
        {type}
      </span>
    );
  },
);

ChangelogBadge.displayName = 'ChangelogBadge';

export { ChangelogBadge, changelogBadgeVariants };
