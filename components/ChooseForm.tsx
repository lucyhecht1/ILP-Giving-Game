'use client';

import { useState } from 'react';
import type { Nonprofit } from '@/lib/types';

type Props = {
  shortlist: Nonprofit[];
};

export default function ChooseForm({ shortlist }: Props) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    const org = shortlist.find((n) => n.id === chosen)!;
    return (
      <div className="bg-white rounded-2xl border border-emerald-300 shadow-sm p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">Your choice</p>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">{org.name}</h2>
        <p className="text-stone-500 mb-1">You&apos;ve chosen next week&apos;s spotlight.</p>
        <p className="text-xs text-stone-400 mt-3">
          (In production, this choice would be saved and announced to all players.)
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {shortlist.map((n) => (
        <button
          key={n.id}
          onClick={() => setChosen(n.id)}
          className={`w-full text-left rounded-2xl border p-5 transition-all ${
            chosen === n.id
              ? 'border-emerald-500 bg-emerald-50 shadow-sm'
              : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-stone-900">{n.name}</p>
                <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                  {n.cause}
                </span>
              </div>
              <p className="text-sm text-amber-700 font-medium mb-1">{n.tagline}</p>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
                {n.description}
              </p>
            </div>
            {chosen === n.id && (
              <span className="text-emerald-600 text-xl flex-shrink-0">✓</span>
            )}
          </div>
        </button>
      ))}

      {chosen && (
        <div className="pt-2">
          <button
            onClick={() => setConfirmed(true)}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            Confirm my choice
          </button>
        </div>
      )}
    </div>
  );
}
