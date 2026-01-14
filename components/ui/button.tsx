import { cva, type VariantProps } from 'class-variance-authority';

const variants = {
  primary: 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80',
  outline: 'border hover:bg-fd-accent hover:text-fd-accent-foreground',
  ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
  secondary:
    'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
} as const;

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring',
  {
    variants: {
      variant: variants,
      // fumadocs use `color` instead of `variant`
      color: variants,
      size: {
        sm: 'gap-1.5 px-3 py-2 text-xs min-h-[36px]',
        icon: 'p-2 [&_svg]:size-5 min-h-[44px] min-w-[44px] md:p-1.5 md:min-h-0 md:min-w-0',
        'icon-sm': 'p-2 [&_svg]:size-4.5 min-h-[44px] min-w-[44px] md:p-1.5 md:min-h-0 md:min-w-0',
        'icon-xs': 'p-1.5 [&_svg]:size-4 min-h-[40px] min-w-[40px] md:p-1 md:min-h-0 md:min-w-0',
      },
    },
  },
);

export type ButtonProps = VariantProps<typeof buttonVariants>;
