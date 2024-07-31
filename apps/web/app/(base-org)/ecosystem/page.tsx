import { Button, ButtonVariants } from 'apps/web/src/components/Button/Button';
import EcosystemHeroLogos from 'apps/web/public/images/ecosystem-hero-logos-new.png';
import { Divider } from 'apps/web/src/components/Divider/Divider';
import { List } from 'apps/web/src/components/Ecosystem/List';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://base.org'),
  title: `Base | About`,
  openGraph: {
    title: `Base | About`,
    url: `/about`,
  },
};

async function EcosystemHero() {
  return (
    <div className="mt-[-96px] flex w-full flex-col items-center bg-black pb-[96px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-8 py-8 pt-28 md:flex-row">
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <h1 className="font-display text-3xl text-white md:text-5xl lg:text-6xl">
            Base ecosystem
          </h1>
          <h2 className="font-display text-xl text-white md:text-2xl lg:text-3xl">
            An overview of apps and integrations in the Base ecosystem.
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKCOjB4wFmb7u-1VpgMZOGLYq4GUBGt3AwQKqUAlTgjnucGQ/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button variant={ButtonVariants.Primary} fullWidth className="md:w-64">
              Apply
            </Button>
          </a>
        </div>
        <div className="flex w-full md:w-1/2 md:justify-end">
          <Image className="-mr-16" src={EcosystemHeroLogos} alt="ecosystem dapp logos" />
        </div>
      </div>
    </div>
  );
}

export default async function Ecosystem() {
  return (
    <main className="flex w-full flex-col items-center bg-black">
      <EcosystemHero />
      <Divider />
      <Suspense>
        <List />
      </Suspense>
    </main>
  );
}