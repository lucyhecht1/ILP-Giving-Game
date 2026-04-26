import Link from 'next/link';
import { getCurrentWeek, getCompletedWeeks } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';

export default function ResultsPage() {
  const currentWeek = getCurrentWeek();
  const completedWeeks = getCompletedWeeks();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">
          Week {currentWeek.weekNumber} Results
        </p>
        <h1 className="text-3xl font-bold text-stone-900">Who Won?</h1>
      </div>

      {/* Current week — live */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 text-center mb-8">
        <div className="text-5xl mb-4">⏳</div>
        <h2 className="text-xl font-bold text-stone-900 mb-2">
          Week {currentWeek.weekNumber} is still live
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          The trivia game is open. No winner declared yet. Play now to be in the running.
        </p>
        <Link
          href="/play"
          className="inline-block bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
        >
          Play Week {currentWeek.weekNumber} →
        </Link>
      </div>

      {/* How it works */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-8">
        <h3 className="font-semibold text-stone-800 mb-3">How the winner is decided</h3>
        <ul className="space-y-2 text-sm text-stone-600">
          <li className="flex gap-2">
            <span className="text-stone-400 font-medium">1.</span>
            Play the week's trivia before Shabbat.
          </li>
          <li className="flex gap-2">
            <span className="text-stone-400 font-medium">2.</span>
            Whoever scores highest becomes that week's champion.
          </li>
          <li className="flex gap-2">
            <span className="text-stone-400 font-medium">3.</span>
            The champion chooses next week's spotlight nonprofit from a curated shortlist.
          </li>
          <li className="flex gap-2">
            <span className="text-stone-400 font-medium">4.</span>
            Tiebreaker: first to submit wins. So don't shmeryl.
          </li>
        </ul>
      </div>

      {/* Past winners */}
      {completedWeeks.length === 0 ? (
        <div className="text-center text-stone-400 text-sm py-10 border border-dashed border-stone-300 rounded-2xl">
          No completed weeks yet. We're just getting started. ✨
        </div>
      ) : (
        <div>
          <h3 className="font-semibold text-stone-800 mb-4">Past Winners</h3>
          <div className="space-y-3">
            {completedWeeks.map((w) => {
              const chosenOrg = w.winner ? getNonprofitById(w.winner.chosenNextId) : null;
              return (
                <div
                  key={w.weekNumber}
                  className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-stone-900">
                      Week {w.weekNumber}: {w.winner?.name}
                    </p>
                    <p className="text-xs text-stone-500">
                      Score: {w.winner?.score}/5 · Chose: {chosenOrg?.name}
                    </p>
                  </div>
                  <span className="text-2xl">🏆</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
