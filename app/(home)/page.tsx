'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button-component';
import { TextEffect } from '@/components/ui/text-effect';
import DotGrid from '@/components/ui/dot-grid';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 relative px-4 sm:px-6 md:px-8">
      <DotGrid
        dotSize={2}
        gap={36}
        activeColor="#4a85ff"
        proximity={160}
        shockRadius={250}
        shockStrength={4}
        resistance={400}
        returnDuration={0.45}
      />
      <div className="relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6">
          <TextEffect per="char" preset="blur" as="span">
            Epicentral Docs
          </TextEffect>
        </h1>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-2">
          <TextEffect per="word" preset="blur" as="span">
            Everything you need to know. All in one place.
          </TextEffect>
        </p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/docs/introduction">
            <Button variant="default" size="lg" className="rounded-full min-h-[48px] px-6 sm:px-8">
              Open Documentation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
