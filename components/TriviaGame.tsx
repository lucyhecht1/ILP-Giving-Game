'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { TriviaQuestion } from '@/lib/types';
import { currentLeaderboard, type Player } from '@/lib/data/leaderboard';

type GameState = 'name' | 'pledge' | 'intro' | 'playing' | 'answered' | 'finished';

type Props = {
  questions: TriviaQuestion[];
  perekTitle: string;
  perekTheme: string;
  nonprofitName: string;
  donateUrl: string;
  weekNumber: number;
};

const OPTION_LABELS = ['A', 'B', 'C', 'D'];
const PLEDGE_AMOUNTS = [5, 10, 18, 36, 54, 100];

function buildPreview(name: string, pledged: number): Player[] {
  const base = currentLeaderboard.filter(
    (p) => p.name.toLowerCase() !== name.toLowerCase()
  );
  return [...base, { name, pledged }].sort((a, b) => b.pledged - a.pledged);
}

function MiniLeaderboard({ players, highlight }: { players: Player[]; highlight: string }) {
  return (
    <div className="mt-3 rounded-2xl bg-stone-900 overflow-hidden">
      <div className="px-5 py-3 border-b border-stone-800">
        <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-600">
          This week&apos;s board
        </p>
      </div>
      {players.map((p, i) => {
        const isMe = p.name.toLowerCase() === highlight.toLowerCase();
        return (
          <div
            key={i}
            className={`flex items-center justify-between px-5 py-3 border-b border-stone-800/40 last:border-0 transition-colors ${
              isMe ? 'bg-amber-400/[0.08]' : ''
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`text-[10px] font-bold tabular-nums w-4 flex-shrink-0 ${
                isMe ? 'text-amber-400' : 'text-stone-700'
              }`}>
                {i + 1}
              </span>
              <span className={`font-display text-sm font-semibold leading-none truncate ${
                isMe ? 'text-amber-400' : 'text-stone-400'
              }`}>
                {p.name}
              </span>
              {isMe && (
                <span className="text-[8px] font-bold uppercase tracking-widest text-amber-400/50 flex-shrink-0">
                  you
                </span>
              )}
            </div>
            <span className={`font-display text-sm tabular-nums ml-4 flex-shrink-0 ${
              isMe ? 'text-amber-400' : 'text-stone-600'
            }`}>
              {p.pledged > 0 ? `$${p.pledged.toLocaleString()}` : '—'}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function TriviaGame({
  questions, perekTitle, perekTheme, nonprofitName, donateUrl, weekNumber,
}: Props) {
  const [state, setState] = useState<GameState>('name');
  const [playerName, setPlayerName] = useState('');
  const [pledgeAmount, setPledgeAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[current];
  const finishedPct = state === 'finished' ? (score / questions.length) * 100 : 0;
  const effectivePledge = pledgeAmount ?? (customAmount ? parseInt(customAmount) : null);
  const trimmedName = playerName.trim();

  function handleAnswer(index: number) {
    if (state !== 'playing') return;
    setSelected(index);
    if (index === q.correctIndex) setScore((s) => s + 1);
    setState('answered');
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setState('finished');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setState('playing');
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setPledgeAmount(null);
    setCustomAmount('');
    setPlayerName('');
    setState('name');
  }

  function proceedToIntro() {
    if (trimmedName && effectivePledge) {
      try {
        localStorage.setItem(
          'ilp-player',
          JSON.stringify({ name: trimmedName, pledged: effectivePledge })
        );
      } catch {}
    }
    setState('intro');
  }

  // ── NAME ─────────────────────────────────────────────────────────────────
  if (state === 'name') {
    const canProceed = !!trimmedName;
    const preview = trimmedName ? buildPreview(trimmedName, 0) : null;

    return (
      <>
        <div className="rounded-3xl overflow-hidden bg-violet-950 border border-violet-800">
          <div className="px-8 pt-10 pb-8">
            <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-amber-400/50 mb-8">
              Week {weekNumber}&nbsp;&nbsp;·&nbsp;&nbsp;{perekTitle}
            </p>

            <h2 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.9] mb-10">
              Who&apos;s<br />playing?
            </h2>

            <div className="mb-6">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && canProceed) setState('pledge'); }}
                placeholder="Your name"
                autoFocus
                className="w-full bg-transparent border-b-2 border-violet-700 focus:border-amber-400 outline-none font-display text-2xl md:text-3xl text-white placeholder-violet-800 pb-3 transition-colors duration-150"
              />
            </div>

            <button
              disabled={!canProceed}
              onClick={() => setState('pledge')}
              className={`w-full font-bold text-xl py-5 rounded-2xl transition-all ${
                canProceed
                  ? 'bg-amber-400 text-stone-900 hover:bg-amber-300'
                  : 'bg-violet-900 text-violet-700 cursor-not-allowed'
              }`}
            >
              {canProceed
                ? `Continue, ${trimmedName.split(' ')[0]}`
                : 'Enter your name to continue'}
            </button>
          </div>

          <div className="border-t border-violet-900/60 px-8 py-4">
            <p className="text-xs text-violet-700">
              {questions.length} questions&nbsp;&nbsp;·&nbsp;&nbsp;{perekTheme}
            </p>
          </div>
        </div>

        {preview && <MiniLeaderboard players={preview} highlight={trimmedName} />}
      </>
    );
  }

  // ── PLEDGE ───────────────────────────────────────────────────────────────
  if (state === 'pledge') {
    const canProceed = effectivePledge !== null && effectivePledge > 0;
    const preview = buildPreview(trimmedName, effectivePledge ?? 0);

    return (
      <>
        <div className="rounded-3xl overflow-hidden bg-amber-400">
          <div className="px-8 pt-10 pb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
              {trimmedName}&nbsp;&nbsp;·&nbsp;&nbsp;Before you play
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight mb-3">
              Pledge to {nonprofitName}
            </h2>
            <p className="text-amber-900 text-sm leading-relaxed max-w-md">
              The game is free. The cause is real. Pledge what you&apos;ll give — you&apos;ll donate directly after.
            </p>
          </div>

          <div className="px-8 pb-8">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {PLEDGE_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setPledgeAmount(amt); setCustomAmount(''); }}
                  className={`py-3.5 rounded-2xl font-bold text-lg transition-all ${
                    pledgeAmount === amt
                      ? 'bg-stone-900 text-amber-400'
                      : 'bg-amber-300 text-stone-800 hover:bg-amber-200'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-stone-500">$</span>
              <input
                type="number"
                min="1"
                placeholder="Other amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setPledgeAmount(null); }}
                className="w-full bg-amber-300 text-stone-900 font-bold pl-8 pr-4 py-3.5 rounded-2xl placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <button
              disabled={!canProceed}
              onClick={proceedToIntro}
              className={`w-full font-bold text-xl py-5 rounded-2xl transition-all ${
                canProceed
                  ? 'bg-stone-900 text-amber-400 hover:bg-stone-800'
                  : 'bg-amber-300/60 text-amber-700 cursor-not-allowed'
              }`}
            >
              {canProceed ? `I pledge $${effectivePledge} → Play` : 'Choose an amount to continue'}
            </button>
          </div>

          <div className="border-t border-amber-500/40 px-8 py-4">
            <p className="text-xs text-amber-800">
              This is a personal pledge — not a charge. You&apos;ll donate directly on{' '}
              <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                {nonprofitName}&apos;s site
              </a>
              .
            </p>
          </div>
        </div>

        <MiniLeaderboard players={preview} highlight={trimmedName} />
      </>
    );
  }

  // ── INTRO ────────────────────────────────────────────────────────────────
  if (state === 'intro') {
    return (
      <div className="rounded-3xl overflow-hidden bg-violet-950 border border-violet-800">
        <div className="px-8 pt-12 pb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-400 border border-violet-700 px-3 py-1 rounded-full mb-6">
            {perekTheme}
          </span>
          <h2 className="font-display text-5xl md:text-7xl italic text-white leading-none mb-2">
            {perekTitle}
          </h2>
          <p className="text-violet-400 text-sm mb-10">
            {questions.length} questions&nbsp;·&nbsp;pledged ${effectivePledge} to {nonprofitName}
          </p>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={() => setState('playing')}
            className="w-full bg-amber-400 text-stone-900 font-bold text-xl py-5 rounded-2xl hover:bg-amber-300 transition-colors tracking-tight"
          >
            Play now
          </button>
        </div>

        <div className="border-t border-violet-900 px-8 py-5">
          <p className="text-xs text-violet-600">
            Tiebreaker: first to submit wins. So don&apos;t shmeryl.
          </p>
        </div>
      </div>
    );
  }

  // ── FINISHED ─────────────────────────────────────────────────────────────
  if (state === 'finished') {
    const bgColor = finishedPct === 100 ? 'bg-emerald-600' : finishedPct >= 60 ? 'bg-amber-500' : 'bg-rose-700';
    const label = finishedPct === 100 ? 'Perfect.' : finishedPct >= 60 ? 'Not bad.' : 'Keep studying.';
    const message =
      finishedPct === 100
        ? "You're this week's Torah champion."
        : finishedPct >= 60
        ? 'Hillel would be pleased.'
        : 'Even the greatest sages kept at it.';

    return (
      <div className={`${bgColor} rounded-3xl overflow-hidden`}>
        <div className="px-8 pt-12 pb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{label}</p>
          <div className="flex items-end gap-3 mb-2">
            <span
              className="font-display font-bold text-white leading-none"
              style={{ fontSize: 'clamp(80px, 20vw, 140px)' }}
            >
              {score}
            </span>
            <span className="font-display text-4xl text-white/40 mb-3">/ {questions.length}</span>
          </div>
          <p className="text-white/80 text-lg mb-8">{message}</p>

          {finishedPct === 100 && (
            <div className="bg-white/20 rounded-2xl p-5 mb-6">
              <p className="text-white font-semibold text-sm">
                As this week&apos;s winner, you get to choose next week&apos;s spotlight nonprofit.
              </p>
            </div>
          )}
        </div>

        <div className="mx-8 mb-6 bg-white/20 rounded-2xl p-5">
          <p className="text-white font-semibold text-sm mb-3">
            You pledged ${effectivePledge}. Time to make it real.
          </p>
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors"
          >
            Donate to {nonprofitName}
          </a>
        </div>

        <div className="px-8 pb-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 bg-white/20 text-white font-semibold py-3.5 rounded-xl hover:bg-white/30 transition-colors"
          >
            Play again
          </button>
          {finishedPct === 100 && (
            <Link
              href="/choose"
              className="flex-1 text-center bg-white text-stone-900 font-bold py-3.5 rounded-xl hover:bg-white/90 transition-colors"
            >
              Choose next nonprofit
            </Link>
          )}
        </div>
      </div>
    );
  }

  // ── PLAYING / ANSWERED ───────────────────────────────────────────────────
  const progressPct = (current / questions.length) * 100;

  return (
    <div className="rounded-3xl overflow-hidden border border-stone-800 bg-stone-900">
      <div className="h-1.5 bg-stone-800">
        <div
          className="h-full bg-amber-400 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
            {current + 1} / {questions.length}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Score: {score}
          </span>
        </div>

        <div className="relative mb-8">
          <span
            className="absolute -top-6 -left-2 font-display font-bold text-stone-800 leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(80px, 18vw, 130px)' }}
          >
            {current + 1}
          </span>
          <p className="relative font-display text-2xl md:text-3xl italic text-white leading-snug pt-8">
            {q.question}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {q.options.map((option, i) => {
            let base =
              'w-full text-left rounded-2xl border px-5 py-4 transition-all duration-150 flex items-center gap-4 ';

            if (state === 'answered') {
              if (i === q.correctIndex) {
                base += 'border-emerald-500 bg-emerald-500 text-white';
              } else if (i === selected) {
                base += 'border-rose-600 bg-rose-600 text-white';
              } else {
                base += 'border-stone-800 bg-stone-800/50 text-stone-600 cursor-default';
              }
            } else {
              base +=
                'border-stone-700 bg-stone-800 text-white hover:border-amber-400 hover:bg-amber-400 hover:text-stone-900 cursor-pointer group';
            }

            return (
              <button
                key={i}
                className={base}
                onClick={() => handleAnswer(i)}
                disabled={state === 'answered'}
              >
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                    state === 'playing'
                      ? 'bg-stone-700 text-stone-400 group-hover:bg-stone-900/30 group-hover:text-stone-900'
                      : i === q.correctIndex
                      ? 'bg-white/20 text-white'
                      : i === selected
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-700/50 text-stone-600'
                  }`}
                >
                  {OPTION_LABELS[i]}
                </span>
                <span className="text-sm md:text-base font-medium leading-snug">{option}</span>
              </button>
            );
          })}
        </div>

        {state === 'answered' && (
          <div>
            <div className="bg-stone-800 border border-stone-700 rounded-2xl p-5 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Why?</p>
              <p className="text-stone-300 text-sm leading-relaxed">{q.explanation}</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-amber-400 text-stone-900 font-bold text-base py-4 rounded-2xl hover:bg-amber-300 transition-colors"
            >
              {current + 1 >= questions.length ? 'See results' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
