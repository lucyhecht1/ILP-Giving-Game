'use client';

import { useState, useEffect } from 'react';
import { getCurrentWeek } from '@/lib/data/weeks';
import { currentLeaderboard, type Player } from '@/lib/data/leaderboard';

export default function ChoosePage() {
  const week = getCurrentWeek();
  const [sessionPlayer, setSessionPlayer] = useState<Player | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ilp-player');
      if (stored) setSessionPlayer(JSON.parse(stored));
    } catch {}
  }, []);

  const base = sessionPlayer
    ? [...currentLeaderboard.filter((p) => p.name.toLowerCase() !== sessionPlayer.name.toLowerCase()), sessionPlayer]
    : [...currentLeaderboard];

  const players = base.sort((a, b) => b.pledged - a.pledged);
  const total = players.reduce((sum, p) => sum + p.pledged, 0);
  const max = players[0]?.pledged ?? 1;

  return (
    <div className="min-h-screen bg-violet-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Top bar */}
        <div className="flex items-center justify-between pt-12 pb-7">
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-amber-400/50">
            Week {week.weekNumber}&nbsp;&nbsp;·&nbsp;&nbsp;{week.perekTitle}&nbsp;&nbsp;·&nbsp;&nbsp;{week.perekTheme}
          </p>
          <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-violet-600">
            {players.length}&nbsp;donors
          </p>
        </div>

        <div className="h-px bg-violet-800" />

        {/* Total */}
        <div className="py-12 md:py-16 relative overflow-hidden">
          <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-violet-600 mb-5">
            Total pledged this week
          </p>

          <span
            className="absolute right-0 bottom-4 font-display font-bold text-violet-900/40 leading-none select-none pointer-events-none whitespace-nowrap uppercase"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', letterSpacing: '0.3em' }}
          >
            Omer Day 25
          </span>

          <p
            className="font-display font-semibold text-amber-400 leading-none relative z-10"
            style={{ fontSize: 'clamp(4rem, 14vw, 10.5rem)' }}
          >
            ${total.toLocaleString()}
          </p>
        </div>

        <div className="h-px bg-violet-800" />

        {/* Column headers */}
        <div
          className="grid items-center py-4 border-b border-violet-800/40"
          style={{ gridTemplateColumns: '2.75rem 1fr auto' }}
        >
          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-violet-700">Rk</span>
          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-violet-700">Player</span>
          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-violet-700">Pledged</span>
        </div>

        {/* Rows */}
        <div className="pb-28">
          {players.map((player, i) => {
            const rank = i + 1;
            const pct = (player.pledged / max) * 100;
            const isFirst = rank === 1;
            const isTop3 = rank <= 3;
            const isMe = sessionPlayer?.name.toLowerCase() === player.name.toLowerCase();

            const rankColor =
              isMe        ? 'text-amber-400' :
              rank === 1  ? 'text-amber-400' :
              rank === 2  ? 'text-stone-300' :
              rank === 3  ? 'text-amber-700' :
                            'text-violet-700';

            const nameColor =
              isMe        ? 'text-amber-400' :
              isFirst     ? 'text-white' :
              isTop3      ? 'text-violet-100' :
                            'text-violet-400';

            const amountColor =
              isMe        ? 'text-amber-400' :
              isFirst     ? 'text-amber-400' :
              isTop3      ? 'text-amber-400/55' :
                            'text-violet-500';

            return (
              <div
                key={player.name}
                className={`relative border-b border-violet-800/20 overflow-hidden group ${
                  isFirst ? 'border-l-2 border-l-amber-400/60 -ml-px' : ''
                } ${isMe ? 'border-l-2 border-l-amber-400/80 -ml-px' : ''}`}
              >
                {/* Bar */}
                <div
                  className={`absolute inset-y-0 left-0 transition-colors duration-300 ${
                    isMe
                      ? 'bg-amber-400/[0.10] group-hover:bg-amber-400/[0.14]'
                      : 'bg-amber-400/[0.055] group-hover:bg-amber-400/[0.09]'
                  }`}
                  style={{ width: `${pct}%` }}
                />

                {/* Ghost rank */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none tabular-nums"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                    color: isFirst || isMe
                      ? 'rgba(251,191,36,0.06)'
                      : 'rgba(255,255,255,0.025)',
                  }}
                >
                  {rank}
                </span>

                {/* Content */}
                <div
                  className="relative grid items-center gap-3"
                  style={{
                    gridTemplateColumns: '2.75rem 1fr auto',
                    paddingTop:    isFirst ? '1.75rem' : '1.25rem',
                    paddingBottom: isFirst ? '1.75rem' : '1.25rem',
                  }}
                >
                  <span className={`font-display font-semibold tabular-nums ${rankColor} ${isFirst ? 'text-base' : 'text-sm'}`}>
                    {rank}
                  </span>

                  <span
                    className={`font-display font-semibold leading-none ${nameColor}`}
                    style={{ fontSize: isFirst ? 'clamp(1.4rem, 4vw, 2.25rem)' : 'clamp(1rem, 2.8vw, 1.6rem)' }}
                  >
                    {player.name}
                    {isMe && (
                      <span className="ml-3 text-[9px] font-sans font-bold uppercase tracking-widest text-amber-400/60">
                        you
                      </span>
                    )}
                  </span>

                  <span
                    className={`font-display font-semibold tabular-nums ${amountColor}`}
                    style={{ fontSize: isFirst ? 'clamp(1.3rem, 3.5vw, 2rem)' : 'clamp(1rem, 2.5vw, 1.5rem)' }}
                  >
                    ${player.pledged.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
