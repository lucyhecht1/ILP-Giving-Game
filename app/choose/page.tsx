import { getCurrentWeek } from '@/lib/data/weeks';
import { nonprofits } from '@/lib/data/nonprofits';
import ChooseForm from '@/components/ChooseForm';

const SHORTLIST_IDS = ['repair-the-world', 'hias', 'ajws', 'keshet', 'ikar', 'jewish-farm-school'];

export default function ChoosePage() {
  const week = getCurrentWeek();
  const shortlist = nonprofits.filter((n) => SHORTLIST_IDS.includes(n.id));

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-6">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">
          Winner's Choice
        </p>
        <h1 className="text-3xl font-bold text-stone-900">Choose Next Week's Spotlight</h1>
        <p className="text-stone-500 mt-2 text-sm">
          This page is for Week {week.weekNumber}'s trivia winner. Pick the nonprofit that gets
          spotlighted next week.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-amber-800 text-sm">
        🏆 <strong>Demo mode:</strong> In the real app, only the verified week's winner would have
        access here. For now, explore the options below.
      </div>

      <ChooseForm shortlist={shortlist} />
    </div>
  );
}
