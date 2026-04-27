import Link from 'next/link';
import { Fragment } from 'react';
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

const WEEK_BORDER_COLORS = [
  'border-green-500',
  'border-purple-500',
  'border-orange-500',
  'border-blue-500',
  'border-yellow-500',
  'border-red-500',
];

const WEEK_TEXT_COLORS = [
  'text-green-600',
  'text-purple-600',
  'text-orange-500',
  'text-blue-600',
  'text-yellow-600',
  'text-red-600',
];

const WEEK_LABELS = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];
const PEREK_NAMES = ['Aleph', 'Bet', 'Gimmel', 'Daled', 'Hey', 'Vav'];

function isHebrew(text: string) {
  return /[֐-׿]/.test(text);
}

export default function ResultsPage() {
  const currentWeek = getCurrentWeek();

  return (
    <div>

      {/* HERO — deep violet */}
      <section className="bg-violet-950 py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-amber-400 mb-6">
            Pesach → Shavuot · Week {currentWeek.weekNumber} of 6
          </p>
          <div className="h-px bg-violet-700 mb-10" />
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl font-semibold tracking-tight text-white leading-none mb-10">
            The<br />Journey
          </h1>
          <div className="h-px bg-violet-700 mb-10" />
          <p className="text-violet-400 text-sm mb-10">Six weeks. Six causes. One perek a week.</p>

          {/* Progress dots */}
          <div className="flex items-center">
            {weeks.map((w, i) => (
              <Fragment key={w.weekNumber}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    w.status === 'completed' ? 'bg-emerald-400'
                    : w.status === 'active' ? 'bg-amber-400 ring-4 ring-amber-400/30'
                    : 'bg-violet-700'
                  }`} />
                  <span className={`text-[9px] font-bold tracking-wider uppercase ${
                    w.status === 'active' ? 'text-amber-400' : 'text-violet-600'
                  }`}>
                    {w.status === 'active' ? 'Now' : `Wk ${w.weekNumber}`}
                  </span>
                </div>
                {i < 5 && <div className="w-7 sm:w-12 h-px bg-violet-800 mb-4 mx-0.5 flex-shrink-0" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE — stone */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {weeks.map((w) => {
            const nonprofit = getNonprofitById(w.spotlightNonprofitId);
            const chosenOrg = w.winner ? getNonprofitById(w.winner.chosenNextId) : null;
            const isActive = w.status === 'active';
            const isUpcoming = w.status === 'upcoming';
            const color = WEEK_COLORS[w.weekNumber - 1];
            const borderColor = WEEK_BORDER_COLORS[w.weekNumber - 1];
            const textColor = WEEK_TEXT_COLORS[w.weekNumber - 1];
            const letter = WEEK_LABELS[w.weekNumber - 1];
            const perekName = PEREK_NAMES[w.weekNumber - 1];

            // ── ACTIVE ────────────────────────────────────────────────────────
            if (isActive) {
              return (
                <div key={w.weekNumber} className={`relative rounded-2xl overflow-hidden border-l-4 ${borderColor} bg-violet-950`}>
                  <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none overflow-hidden pr-6">
                    <span className="font-display font-bold text-violet-800/60 leading-none" style={{ fontSize: 'clamp(60px, 12vw, 130px)' }}>
                      {letter}
                    </span>
                  </div>
                  <div className="p-6 md:p-8 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
                      <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-amber-400">Live Now</span>
                    </div>
                    <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-violet-500 mb-1">
                      Week {w.weekNumber} · Perek {perekName}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-white leading-none mb-3">
                      {w.perekTheme}
                    </h2>
                    {nonprofit && (
                      <p className="text-sm text-violet-400 mb-6">
                        Spotlight:{' '}
                        <span className="text-amber-400 font-semibold">{nonprofit.name}</span>
                        <span className="text-violet-600"> · {nonprofit.cause}</span>
                      </p>
                    )}
                    <Link
                      href="/play"
                      className="inline-block bg-amber-400 text-stone-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-300 transition-colors"
                    >
                      Play this week
                    </Link>
                  </div>
                </div>
              );
            }

            // ── UPCOMING ──────────────────────────────────────────────────────
            if (isUpcoming) {
              return (
                <div key={w.weekNumber} className="rounded-2xl border-l-4 border-stone-200 bg-stone-100 p-6 opacity-40">
                  <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-stone-400 mb-1">
                    Week {w.weekNumber} · Perek {perekName}
                  </p>
                  <p className="font-display text-xl font-semibold text-stone-500 leading-none mb-1">{w.perekTheme}</p>
                  <p className="text-xs text-stone-400">Nonprofit TBD by last week&apos;s winner</p>
                </div>
              );
            }

            // ── COMPLETED ─────────────────────────────────────────────────────
            return (
              <div key={w.weekNumber} className={`relative rounded-2xl overflow-hidden border-l-4 ${borderColor} bg-white shadow-sm`}>
                <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none overflow-hidden pr-6">
                  <span className="font-display font-bold text-stone-100 leading-none" style={{ fontSize: 'clamp(60px, 12vw, 130px)' }}>
                    {letter}
                  </span>
                </div>
                <div className="p-6 md:p-8 relative z-10">
                  <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-stone-400 mb-2">
                    Week {w.weekNumber} · Perek {perekName} · {w.perekTheme}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-stone-900 leading-none mb-1">
                    {nonprofit?.name}
                  </h2>
                  <p className={`text-xs font-bold uppercase tracking-wider ${textColor} mb-4`}>
                    {nonprofit?.cause}
                  </p>

                  {w.winner && (
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs text-stone-400">Winner</span>
                      <span className="text-sm font-semibold text-stone-800">{w.winner.name}</span>
                      {chosenOrg && (
                        <>
                          <span className="text-stone-300">·</span>
                          <span className="text-xs text-stone-400">chose</span>
                          <span className="text-xs font-semibold text-stone-600">{chosenOrg.name}</span>
                        </>
                      )}
                    </div>
                  )}

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
      </section>

      {/* FOOTER — deep emerald */}
      <section className="bg-emerald-950 py-16 md:py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-emerald-600 mb-6">
            Pesach → Shavuot
          </p>
          <div className="h-px bg-emerald-800 mb-8" />
          <p className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug">
            What steps are you taking<br className="hidden md:block" /> toward Har Sinai?
          </p>
        </div>
      </section>

    </div>
  );
}
