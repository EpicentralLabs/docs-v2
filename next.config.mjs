import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect old numbered paths to new clean paths
      {
        source: '/docs/1-introduction/:path*',
        destination: '/docs/introduction/:path*',
        permanent: true,
      },
      {
        source: '/docs/1-introduction',
        destination: '/docs/introduction',
        permanent: true,
      },
      {
        source: '/docs/2-epicentral-dao/:path*',
        destination: '/docs/epicentral-dao/:path*',
        permanent: true,
      },
      {
        source: '/docs/2-epicentral-dao',
        destination: '/docs/epicentral-dao',
        permanent: true,
      },
      {
        source: '/docs/2-tokens/:path*',
        destination: '/docs/tokens/:path*',
        permanent: true,
      },
      {
        source: '/docs/2-tokens',
        destination: '/docs/tokens',
        permanent: true,
      },
      {
        source: '/docs/3-staking-lab/:path*',
        destination: '/docs/staking-lab/:path*',
        permanent: true,
      },
      {
        source: '/docs/3-staking-lab',
        destination: '/docs/staking-lab',
        permanent: true,
      },
      {
        source: '/docs/4-opx/:path*',
        destination: '/docs/opx/:path*',
        permanent: true,
      },
      {
        source: '/docs/4-opx',
        destination: '/docs/opx',
        permanent: true,
      },
      {
        source: '/docs/5-legal/:path*',
        destination: '/docs/legal/:path*',
        permanent: true,
      },
      {
        source: '/docs/5-legal',
        destination: '/docs/legal',
        permanent: true,
      },
      // Redirect old numbered file paths
      {
        source: '/docs/2-epicentral-dao/1-governance-process',
        destination: '/docs/epicentral-dao/governance-process',
        permanent: true,
      },
      {
        source: '/docs/2-epicentral-dao/4-core-team',
        destination: '/docs/epicentral-dao/core-team',
        permanent: true,
      },
      {
        source: '/docs/2-epicentral-dao/5-open-market-token-distribution-event',
        destination: '/docs/epicentral-dao/open-market-token-distribution-event',
        permanent: true,
      },
      {
        source: '/docs/3-staking-lab/staking-program/1-instruction-flow',
        destination: '/docs/staking-lab/staking-program/instruction-flow',
        permanent: true,
      },
      {
        source: '/docs/3-staking-lab/staking-program/2-reward-calculation-system',
        destination: '/docs/staking-lab/staking-program/reward-calculation-system',
        permanent: true,
      },
      {
        source: '/docs/3-staking-lab/staking-program/3-error-handling',
        destination: '/docs/staking-lab/staking-program/error-handling',
        permanent: true,
      },
      {
        source: '/docs/4-opx/1-option-basics/:path*',
        destination: '/docs/opx/option-basics/:path*',
        permanent: true,
      },
      {
        source: '/docs/4-opx/1-option-basics',
        destination: '/docs/opx/option-basics',
        permanent: true,
      },
      {
        source: '/docs/4-opx/1-option-basics/1-calls-and-puts',
        destination: '/docs/opx/option-basics/calls-and-puts',
        permanent: true,
      },
      {
        source: '/docs/4-opx/1-option-basics/3-spreads-intro',
        destination: '/docs/opx/option-basics/spreads-intro',
        permanent: true,
      },
      {
        source: '/docs/4-opx/opx-main/1-omlp',
        destination: '/docs/opx/opx-main/omlp',
        permanent: true,
      },
      {
        source: '/docs/4-opx/opx-main/2-fees',
        destination: '/docs/opx/opx-main/fees',
        permanent: true,
      },
      {
        source: '/docs/4-opx/opx-main/3-opm',
        destination: '/docs/opx/opx-main/opm',
        permanent: true,
      },
      {
        source: '/docs/7-terms-of-service',
        destination: '/docs/legal/tos',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

export default withMDX(config);
