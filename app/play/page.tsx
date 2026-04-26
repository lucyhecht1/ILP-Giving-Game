import Link from 'next/link';
import { getCurrentWeek } from '@/lib/data/weeks';
import { getNonprofitById } from '@/lib/data/nonprofits';
import { getAllQuestions } from '@/lib/data/trivia';
import TriviaGame from '@/components/TriviaGame';

export default function PlayPage() {
  const week = getCurrentWeek();
  const nonprofit = getNonprofitById(week.spotlightNonprofitId)!;
  const questions = getAllQuestions();

  return (
    <div className="bg-stone-950 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-1">
              Week {week.weekNumber} · {week.perekTitle}
            </p>
            <h1 className="text-2xl font-bold text-white">Trivia</h1>
          </div>
          <Link href="/spotlight" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
            This week&apos;s cause →
          </Link>
        </div>

        <TriviaGame
          questions={questions}
          perekTitle={week.perekTitle}
          perekTheme={week.perekTheme}
          nonprofitName={nonprofit.name}
          donateUrl={nonprofit.donateUrl}
          weekNumber={week.weekNumber}
        />
      </div>
    </div>
  );
}
