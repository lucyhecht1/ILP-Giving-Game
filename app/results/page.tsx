import Link from 'next/link';
import { weeks, getCurrentWeek } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';

const WEEK_COLORS = [
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-red-500',
];

const WEEK_LABELS = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];

function isHebrew(text: string) {
  return /[֐-׿]/.test(text);
}

export default function ResultsPage() {
  const currentWeek = getCurrentWeek();

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-10">
        <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-3">
          Pesach → Shavuot · Week {currentWeek.weekNumber} of 6
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-stone-900 leading-none mb-3">
          The Journey
        </h1>
        <p className="text-stone-400 text-sm">
          Six weeks. Six causes. One Torah scroll at a time.
        </p>
      </div>

      {/* Week cards */}
      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-3">
        {weeks.map((w) => {
          const nonprofit = getNonprofitById(w.spotlightNonprofitId);
          const chosenOrg = w.winner ? getNonprofitById(w.winner.chosenNextId) : null;
          const isActive = w.status === 'active';
          const isUpcoming = w.status === 'upcoming';
          const color = WEEK_COLORS[w.weekNumber - 1];
          const letter = WEEK_LABELS[w.weekNumber - 1];

          // ── ACTIVE ────────────────────────────────────────────────────────
          if (isActive) {
            return (
              <div key={w.weekNumber} className="rounded-2xl bg-violet-950 border border-violet-700 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
                        <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-amber-400">
                          Live now
                        </span>
                      </div>
                      <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-violet-500 mb-1">
                        Week {w.weekNumber} · {w.perekTitle}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-white leading-none">
                        {w.perekTheme}
                      </h2>
                    </div>
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <span className="font-display font-bold text-white text-sm">{letter}</span>
                    </div>
                  </div>

                  {nonprofit && (
                    <p className="text-violet-400 text-sm mb-6">
                      Spotlight:{' '}
                      <span className="font-semibold text-amber-400">{nonprofit.name}</span>
                      <span className="text-violet-600"> · {nonprofit.cause}</span>
                    </p>
                  )}

                  <Link
                    href="/play"
                    className="inline-block bg-amber-400 text-stone-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-300 transition-colors"
                  >
                    Play this week →
                  </Link>
                </div>
              </div>
            );
          }

          // ── UPCOMING ──────────────────────────────────────────────────────
          if (isUpcoming) {
            return (
              <div key={w.weekNumber} className="rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden opacity-50">
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-stone-400 mb-1">
                      Week {w.weekNumber} · {w.perekTitle}
                    </p>
                    <p className="font-display text-lg font-semibold text-stone-500 leading-none mb-1">
                      {w.perekTheme}
                    </p>
                    <p className="text-xs text-stone-400">Nonprofit TBD by last week&apos;s winner</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl ${color} opacity-50 flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-white text-sm">{letter}</span>
                  </div>
                </div>
              </div>
            );
          }

          // ── COMPLETED ─────────────────────────────────────────────────────
          return (
            <div key={w.weekNumber} className="rounded-2xl bg-white border border-stone-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-stone-400 mb-2">
                      Week {w.weekNumber} · {w.perekTitle} · {w.perekTheme}
                    </p>
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-stone-900 leading-none mb-3">
                      {nonprofit?.name}
                      <span className="font-normal text-stone-400 text-base ml-2">· {nonprofit?.cause}</span>
                    </h2>

                    {w.winner && (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <p className="text-sm text-stone-700">
                          <span className="text-stone-400">Winner </span>
                          <span className="font-semibold">{w.winner.name}</span>
                          <span className="text-stone-400 ml-1">{w.winner.score}/5</span>
                        </p>
                        {chosenOrg && (
                          <p className="text-sm text-stone-400">
                            Chose{' '}
                            <span className="text-stone-600 font-medium">→ {chosenOrg.name}</span>
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-white text-sm">{letter}</span>
                  </div>
                </div>

                {w.keyQuote && (
                  <p
                    className="mt-4 pt-4 border-t border-stone-100 text-xs italic text-stone-400 leading-relaxed"
                    dir={isHebrew(w.keyQuote) ? 'rtl' : undefined}
                  >
                    &ldquo;{w.keyQuote.length > 120 ? w.keyQuote.slice(0, 117) + '…' : w.keyQuote}&rdquo;
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <p className="text-xs text-stone-400">
          The 49-day Omer count connects Pesach (freedom) to Shavuot (revelation).
        </p>
      </div>

    </div>
  );
}
