'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background relative overflow-hidden group active:scale-95 active:shadow-md',
  {
    variants: {
      variant: {
        default: 'bg-fd-primary text-fd-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-[#4a85ff]/50',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-secondary/80',
        ghost: 'hover:bg-fd-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-full',
        lg: 'h-12 px-8 rounded-full text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, onClick, ...props }, ref) => {
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick?.(e);
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        {/* Gradient background layer */}
        <span 
          className="absolute inset-0 bg-linear-to-r from-[#000000] via-[#4a85ff] to-[#000000] bg-size-[200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out group-hover:animate-[gradient-shift_2s_ease-in-out_infinite]"
          style={{
            backgroundPosition: '0% 50%',
          }}
        />
        
        {/* Click flash effect */}
        {isClicked && (
          <span 
            className="absolute inset-0 bg-white/30 animate-[flash_0.2s_ease-out]"
          />
        )}
        
        {/* Text with smooth color transition */}
        <span className="relative z-10 text-fd-primary-foreground group-hover:text-white transition-colors duration-500">
          {children}
        </span>
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
