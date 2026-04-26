import type { WeekData } from '@/lib/types';

function isHebrew(text: string) {
  return /[֐-׿]/.test(text);
}

type Props = {
  week: WeekData;
  variant?: 'light' | 'dark';
};

export default function PerekCard({ week, variant = 'light' }: Props) {
  if (variant === 'dark') {
    return (
      <div className="py-2">
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-800/60 text-emerald-300 px-3 py-1 rounded-full">
            {week.perekTitle}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider bg-amber-900/40 text-amber-300 px-3 py-1 rounded-full">
            {week.perekTheme}
          </span>
        </div>

        <p className={`font-display text-7xl md:text-8xl text-amber-400/25 leading-none select-none ${isHebrew(week.keyQuote) ? 'text-right' : ''}`}>
          {isHebrew(week.keyQuote) ? '”' : '“'}
        </p>
        <p className={`font-display text-xl md:text-3xl text-white leading-relaxed italic -mt-6 px-4 ${isHebrew(week.keyQuote) ? 'text-right' : ''}`}
          dir={isHebrew(week.keyQuote) ? 'rtl' : undefined}>
          {week.keyQuote}
        </p>
        <p className={`font-display text-7xl md:text-8xl text-amber-400/25 leading-none select-none -mt-4 ${isHebrew(week.keyQuote) ? '' : 'text-right'}`}>
          {isHebrew(week.keyQuote) ? '“' : '”'}
        </p>

        <div className="border-t border-emerald-800 mt-2 pt-4">
          <p className="text-emerald-400 text-sm">— {week.keyQuoteAttribution}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />

      <div className="p-6 md:p-10">
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
            {week.perekTitle}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
            {week.perekTheme}
          </span>
        </div>

        <p className={`font-display text-6xl md:text-7xl text-amber-200 leading-none select-none ${isHebrew(week.keyQuote) ? 'text-right' : ''}`}>
          {isHebrew(week.keyQuote) ? '"' : '"'}
        </p>
        <p className={`font-display text-xl md:text-2xl text-stone-800 leading-relaxed italic -mt-4 px-4 ${isHebrew(week.keyQuote) ? 'text-right' : ''}`}
          dir={isHebrew(week.keyQuote) ? 'rtl' : undefined}>
          {week.keyQuote}
        </p>
        <p className={`font-display text-6xl md:text-7xl text-amber-200 leading-none select-none ${isHebrew(week.keyQuote) ? '' : 'text-right'}`}>
          {isHebrew(week.keyQuote) ? '"' : '"'}
        </p>

        <div className="border-t border-stone-100 mt-2 pt-4">
          <p className="text-sm text-stone-400">— {week.keyQuoteAttribution}</p>
        </div>
      </div>
    </div>
  );
}
