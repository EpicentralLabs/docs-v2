'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function BlurText({
  children,
  className,
  duration = 1000,
  delay = 0,
}: BlurTextProps) {
  return (
    <span
      className={cn('inline-block', className)}
      style={{
        animation: `blur-text ${duration}ms ease-out ${delay}ms forwards`,
        filter: 'blur(10px)',
        opacity: 0,
      }}
    >
      {children}
    </span>
  );
}

