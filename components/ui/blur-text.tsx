'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  blurAmount?: number;
}

export default function BlurText({
  children,
  className,
  blurAmount = 8,
}: BlurTextProps) {
  return (
    <span
      className={cn('inline-block', className)}
      style={{
        filter: `blur(${blurAmount}px)`,
        userSelect: 'none',
      }}
    >
      {children}
    </span>
  );
}

