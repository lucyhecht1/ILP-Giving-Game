import Link from 'next/link';
import { getCurrentWeek } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';
import NonprofitCard from '@/components/NonprofitCard';

export default function SpotlightPage() {
  const week = getCurrentWeek();
  const nonprofit = getNonprofitById(week.spotlightNonprofitId)!;

  return (
    <div>

      {/* HERO — deep violet */}
      <section className="bg-violet-950 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-xs text-violet-600 mb-12">
            <Link href="/" className="hover:text-violet-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Week {week.weekNumber} Spotlight</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-violet-800 text-violet-300 px-3 py-1 rounded-full mb-6">
            {nonprofit.cause}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-none mb-5">
            {nonprofit.name}
          </h1>
          <p className="text-amber-400 font-medium text-xl md:text-2xl leading-snug max-w-xl">
            {nonprofit.tagline}
          </p>
        </div>
      </section>

      {/* SPOTLIGHT — amber */}
      <section className="bg-amber-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-amber-500/30 whitespace-nowrap uppercase leading-none"
            style={{ fontSize: 'clamp(80px, 20vw, 260px)' }}>
            {nonprofit.cause}
          </span>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <NonprofitCard nonprofit={nonprofit} variant="featured" />
          {week.connection && (
            <p className="mt-8 text-stone-800 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              {week.connection}
            </p>
          )}
          {week.chosenBy && (
            <p className="mt-4 text-xs text-amber-800">
              Chosen by {week.chosenBy.name}
            </p>
          )}
        </div>
      </section>

      {/* CTA — rose */}
      <section className="bg-rose-600 py-16 md:py-24 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white leading-none mb-4">
            {week.perekTitle}
          </h2>
          <p className="text-rose-100 mb-8 text-lg">This week&apos;s questions. Score highest to choose next week&apos;s cause.</p>
          <Link
            href="/play"
            className="inline-block bg-white text-rose-700 font-bold px-8 py-3.5 rounded-xl hover:bg-rose-50 transition-colors"
          >
            Play now
          </Link>
          <div className="mt-8">
            <Link href="/past-weeks" className="text-xs text-rose-300 hover:text-white transition-colors">
              All spotlights
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
