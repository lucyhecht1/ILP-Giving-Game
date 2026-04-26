import Link from 'next/link';
import { weeks } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';

export default function PastWeeksPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">The Six-Week Journey</h1>
        <p className="text-stone-500 mt-1 text-sm">
          Pesach to Shavuot. One perek. One cause. One week at a time.
        </p>
      </div>

      <div className="space-y-4">
        {weeks.map((w) => {
          const nonprofit = getNonprofitById(w.spotlightNonprofitId)!;
          const isActive = w.status === 'active';
          const isUpcoming = w.status === 'upcoming';
          const isCompleted = w.status === 'completed';

          return (
            <div
              key={w.weekNumber}
              className={`rounded-2xl border p-5 transition-colors ${
                isActive
                  ? 'border-emerald-400 bg-emerald-50'
                  : isCompleted
                  ? 'border-stone-200 bg-white'
                  : 'border-stone-200 bg-stone-50 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-stone-900">Week {w.weekNumber}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-emerald-200 text-emerald-800'
                          : isCompleted
                          ? 'bg-stone-100 text-stone-600'
                          : 'bg-stone-100 text-stone-400'
                      }`}
                    >
                      {isActive ? 'Live now' : isCompleted ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-stone-700 mb-0.5">
                    {w.perekTitle} · {w.perekTheme}
                  </p>
                  <p className={`text-sm ${isUpcoming ? 'text-stone-400' : 'text-stone-600'}`}>
                    {isUpcoming ? "TBD by last week's winner" : nonprofit.name} · {nonprofit.cause}
                  </p>
                  {isCompleted && w.winner && (
                    <p className="text-xs text-stone-400 mt-1">
                      Winner: {w.winner.name} ({w.winner.score}/5)
                    </p>
                  )}
                </div>

                {!isUpcoming && (
                  <blockquote className="hidden sm:block text-xs italic text-stone-500 max-w-[160px] text-right leading-relaxed flex-shrink-0">
                    &ldquo;
                    {w.keyQuote.length > 65
                      ? w.keyQuote.slice(0, 62) + '...'
                      : w.keyQuote}
                    &rdquo;
                  </blockquote>
                )}
              </div>

              {isActive && (
                <div className="mt-4 flex gap-2">
                  <Link
                    href="/play"
                    className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Play trivia →
                  </Link>
                  <Link
                    href="/spotlight"
                    className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-lg font-medium hover:bg-stone-50 transition-colors"
                  >
                    See spotlight
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center text-xs text-stone-400">
        The 49-day Omer count connects Pesach (freedom) to Shavuot (revelation).
      </div>
    </div>
  );
}
