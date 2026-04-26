import Link from 'next/link';
import { Fragment } from 'react';
import { getCurrentWeek, weeks } from '@/lib/data/weeks';
import PerekCard from '@/components/PerekCard';

const PEREK_LETTERS = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];
const WEEK_COLORS = [
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-red-500',
];

export default function Home() {
  const currentWeek = getCurrentWeek();
  const omerStart = (currentWeek.weekNumber - 1) * 7 + 1;
  const omerEnd = currentWeek.weekNumber * 7;

  return (
    <div>

      {/* HERO — deep violet */}
      <section className="bg-violet-950 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-6">
            Week {currentWeek.weekNumber} of 6 &nbsp;·&nbsp; Omer Days {omerStart}–{omerEnd}
          </p>
          <div className="h-px bg-violet-700 mb-10" />
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl font-semibold tracking-tight text-white leading-none mb-10">
            Giving<br />Game
          </h1>
          <div className="h-px bg-violet-700 mb-10" />

          <div className="flex items-start justify-center">
            {weeks.map((w, i) => (
              <Fragment key={w.weekNumber}>
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    w.status === 'completed' ? 'bg-emerald-400'
                    : w.status === 'active' ? 'bg-amber-400 ring-4 ring-amber-400/30'
                    : 'bg-violet-700'
                  }`} />
                  <span className={`mt-2 text-[10px] font-semibold tracking-wide uppercase ${
                    w.status === 'active' ? 'text-amber-400' : 'text-violet-600'
                  }`}>
                    {w.status === 'active' ? 'Now' : `Wk ${w.weekNumber}`}
                  </span>
                </div>
                {i < 5 && <div className="w-7 sm:w-12 h-px bg-violet-800 mt-[5px] mx-0.5 flex-shrink-0" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PEREK — deep emerald */}
      <section className="bg-emerald-950 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-10">
            This Week&apos;s Perek
          </p>
          <PerekCard week={currentWeek} variant="dark" />
        </div>
      </section>

      {/* PLAY CTA — rose */}
      <section className="bg-rose-600 py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-white leading-none mb-5">
            Play now
          </h2>
          <p className="text-rose-100 text-lg mb-10">
            Score highest to choose next week&apos;s cause.
          </p>

          <ul className="text-left max-w-sm mx-auto space-y-3 mb-10">
            {[
              'Play the week\'s trivia before Shabbat.',
              'Highest score becomes that week\'s champion.',
              'The champion chooses next week\'s spotlight nonprofit.',
              'Tiebreaker: first to submit wins. So don\'t shmeryl.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-rose-100 text-sm leading-snug">{step}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/play"
            className="inline-block bg-white text-rose-700 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-rose-50 transition-colors"
          >
            Start
          </Link>
        </div>
      </section>

      {/* PAST WEEKS — light stone */}
      <section className="bg-stone-100 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-stone-400">
              The Six-Week Journey
            </p>
            <Link href="/past-weeks" className="text-xs text-stone-500 hover:text-stone-800 font-medium transition-colors">
              See all →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-6 sm:overflow-visible sm:pb-0">
            {weeks.map((w) => {
              const isActive = w.status === 'active';
              const isUpcoming = w.status === 'upcoming';
              return (
                <div
                  key={w.weekNumber}
                  className={`flex-shrink-0 w-28 sm:w-auto ${WEEK_COLORS[w.weekNumber - 1]} ${isUpcoming ? 'opacity-35' : ''} rounded-2xl p-5 flex flex-col items-center justify-between aspect-square`}
                >
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider self-start">
                    Wk {w.weekNumber}
                  </span>
                  <span className="font-display text-3xl font-semibold text-white">
                    {PEREK_LETTERS[w.weekNumber - 1]}
                  </span>
                  {isActive && (
                    <span className="text-[9px] font-bold text-white/80 uppercase tracking-wide">
                      Live
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
