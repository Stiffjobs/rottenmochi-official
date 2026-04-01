import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const waitlistUrl = 'https://forms.gle/dfCAxvWTLXwgAxiq5';

const competitors = [
  {
    rank: 1,
    name: 'Maya',
    handle: '@mayagrind',
    mochi: '/mochis/mythic.png',
    tier: 'Mythic',
    screentime: '1h 12m',
    streak: 61,
  },
  {
    rank: 2,
    name: 'Jules',
    handle: '@julesflow',
    mochi: '/mochis/diamond.png',
    tier: 'Diamond',
    screentime: '1h 38m',
    streak: 43,
  },
  {
    rank: 3,
    name: 'Noah',
    handle: '@noahdeep',
    mochi: '/mochis/emerald.png',
    tier: 'Emerald',
    screentime: '2h 05m',
    streak: 29,
  },
  {
    rank: 4,
    name: 'Ari',
    handle: '@arilock',
    mochi: '/mochis/gold.png',
    tier: 'Gold',
    screentime: '2h 41m',
    streak: 18,
  },
  {
    rank: 5,
    name: 'Sam',
    handle: '@samreset',
    mochi: '/mochis/silver.png',
    tier: 'Silver',
    screentime: '3h 10m',
    streak: 11,
  },
  {
    rank: 6,
    name: 'Lin',
    handle: '@linstart',
    mochi: '/mochis/bronze.png',
    tier: 'Bronze',
    screentime: '4h 22m',
    streak: 4,
  },
];

const rankTiers = [
  { name: 'Iron', image: '/mochis/iron.png' },
  { name: 'Bronze', image: '/mochis/bronze.png' },
  { name: 'Silver', image: '/mochis/silver.png' },
  { name: 'Gold', image: '/mochis/gold.png' },
  { name: 'Platinum', image: '/mochis/platinum.png' },
  { name: 'Emerald', image: '/mochis/emerald.png' },
  { name: 'Diamond', image: '/mochis/diamond.png' },
  { name: 'Mythic', image: '/mochis/mythic.png' },
];

export default function RottenMochiHero() {
  return (
    <main className="min-h-screen bg-brand-blue-light text-neutral-900">
      {/* ── Nav ── */}
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/icon.png"
            alt="Rotten Mochi"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            Rotten Mochi
          </span>
        </div>
        <Button
          size="sm"
          className="rounded-full bg-brand-yellow px-4 text-xs font-semibold text-neutral-900 hover:bg-brand-yellow/80"
          asChild
        >
          <a href={waitlistUrl} target="_blank" rel="noopener noreferrer">
            Join Waitlist
          </a>
        </Button>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue-dark">
            Screentime competition for people who want less of it
          </p>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-950 md:text-6xl">
            Your screentime is a scoreboard.{' '}
            <span className="text-brand-blue">Win by using less.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500">
            Rotten Mochi ranks you against friends based on daily screentime.
            Lower usage, longer streaks, higher rank. Your Mochi evolves as you
            earn control.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-brand-yellow px-8 py-6 text-sm font-semibold text-neutral-900 shadow-lg shadow-brand-yellow/30 hover:bg-brand-yellow/80"
              asChild
            >
              <a href={waitlistUrl} target="_blank" rel="noopener noreferrer">
                Join the Waitlist
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── Leaderboard ── */}
      <section className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue-dark">
              Today's board
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
              Less screentime, higher rank.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-blue/20 bg-white">
            {/* Header */}
            <div className="grid grid-cols-[2.5rem_1fr_5rem_5rem_4.5rem] items-center gap-3 border-b border-neutral-100 bg-neutral-50 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 md:grid-cols-[2.5rem_1fr_6rem_6rem_5rem]">
              <span>#</span>
              <span>Player</span>
              <span className="text-right">Screen</span>
              <span className="text-right">Streak</span>
              <span className="text-right">Tier</span>
            </div>

            {/* Rows */}
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`grid grid-cols-[2.5rem_1fr_5rem_5rem_4.5rem] items-center gap-3 px-5 py-3.5 md:grid-cols-[2.5rem_1fr_6rem_6rem_5rem] ${i < competitors.length - 1 ? 'border-b border-neutral-100' : ''} ${i === 0 ? 'bg-brand-yellow-light' : ''}`}
              >
                <span
                  className={`text-sm font-semibold ${i === 0 ? 'text-brand-blue-dark' : 'text-neutral-400'}`}
                >
                  {c.rank}
                </span>

                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={c.mochi}
                    alt={c.tier}
                    width={36}
                    height={36}
                    className="size-9 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-neutral-900">
                      {c.name}
                    </p>
                    <p className="truncate text-xs text-neutral-400">
                      {c.handle}
                    </p>
                  </div>
                </div>

                <p className="text-right text-sm tabular-nums text-neutral-700">
                  {c.screentime}
                </p>

                <p className="text-right text-sm tabular-nums text-neutral-500">
                  {c.streak}d
                </p>

                <p
                  className={`text-right text-xs font-medium ${i === 0 ? 'text-brand-blue-dark' : 'text-neutral-500'}`}
                >
                  {c.tier}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Rank ladder (marquee) ── */}
      <section className="pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto max-w-3xl px-5 mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue-dark">
              Rank progression
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
              Your Mochi evolves with you.
            </h2>
          </div>

          {/* Marquee container — full width, overflow hidden */}
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...rankTiers, ...rankTiers].map((tier, i) => (
                <div
                  key={`${tier.name}-${i}`}
                  className="flex shrink-0 flex-col items-center gap-2 rounded-xl border border-brand-blue/10 bg-white px-5 py-4"
                  style={{ minWidth: '6.5rem' }}
                >
                  <img
                    src={tier.image}
                    alt={tier.name}
                    width={64}
                    height={64}
                    className="size-16 object-contain"
                  />
                  <span className="text-[11px] font-medium text-neutral-600">
                    {tier.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="mx-auto max-w-3xl px-5 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-center rounded-2xl border border-brand-blue/15 bg-white px-6 py-12 text-center md:px-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
            Compete on screentime.{' '}
            <span className="text-brand-blue">Rank up your Mochi.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
            We are building the leaderboard for people who want to spend less
            time on their phone and more time on what matters.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-brand-yellow px-8 py-6 text-sm font-semibold text-neutral-900 shadow-lg shadow-brand-yellow/30 hover:bg-brand-yellow/80"
            asChild
          >
            <a href={waitlistUrl} target="_blank" rel="noopener noreferrer">
              Join the Waitlist
              <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="mx-auto max-w-3xl border-t border-brand-blue/10 px-5 py-6">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-xs text-neutral-400">
            Rotten Mochi &middot; Screentime competition, coming soon.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-neutral-900"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="transition-colors hover:text-neutral-900"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
