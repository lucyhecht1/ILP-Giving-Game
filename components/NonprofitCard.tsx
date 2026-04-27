import type { Nonprofit } from '@/lib/types';

type Props = {
  nonprofit: Nonprofit;
  variant?: 'featured' | 'full' | 'compact';
};

export default function NonprofitCard({ nonprofit, variant = 'full' }: Props) {
  if (variant === 'featured') {
    return (
      <div className="py-2">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-amber-900/20 text-amber-900 px-3 py-1 rounded-full mb-5">
          {nonprofit.cause}
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-stone-900 leading-none mb-4">
          {nonprofit.name}
        </h2>
        <p className="text-lg md:text-xl font-medium text-amber-900 mb-5 max-w-xl leading-snug">
          {nonprofit.tagline}
        </p>
        <p className="text-stone-800 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          {nonprofit.description}
        </p>
        <a
          href={nonprofit.donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-stone-900 text-amber-400 py-3 px-7 rounded-xl font-semibold hover:bg-stone-800 transition-colors text-sm"
        >
          Donate to {nonprofit.name}
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200">
        <div>
          <p className="font-semibold text-stone-900">{nonprofit.name}</p>
          <p className="text-sm text-stone-500">{nonprofit.cause}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h2 className="text-xl font-bold text-stone-900">{nonprofit.name}</h2>
          <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full whitespace-nowrap">
            {nonprofit.cause}
          </span>
        </div>
        <p className="text-sm font-medium text-amber-700 mb-3">{nonprofit.tagline}</p>
        <p className="text-stone-600 text-sm leading-relaxed">{nonprofit.description}</p>
        <a
          href={nonprofit.donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block w-full text-center bg-emerald-600 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
        >
          Donate to {nonprofit.name}
        </a>
      </div>
    </div>
  );
}
