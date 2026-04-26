import Link from 'next/link';
import { getCurrentWeek } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';
import PerekCard from '@/components/PerekCard';

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

      {/* WHY THIS WEEK — amber */}
      <section className="bg-amber-400 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          {week.connection && (
            <p className="text-stone-900 text-lg md:text-xl leading-relaxed mb-8 font-medium max-w-2xl">
              {week.connection}
            </p>
          )}
          <a
            href={nonprofit.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-900 text-amber-400 px-7 py-3 rounded-xl font-semibold text-sm hover:bg-stone-800 transition-colors"
          >
            Donate →
          </a>
          {week.chosenBy && (
            <p className="mt-6 text-xs text-amber-800">
              Chosen by {week.chosenBy.name}
            </p>
          )}
        </div>
      </section>

      {/* PEREK — deep emerald */}
      <section className="bg-emerald-950 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-10">
            This Week&apos;s Perek
          </p>
          <PerekCard week={week} variant="dark" />
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
            Play now →
          </Link>
          <div className="mt-8">
            <Link href="/past-weeks" className="text-xs text-rose-300 hover:text-white transition-colors">
              ← All spotlights
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
