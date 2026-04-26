import type { WeekData } from '@/lib/types';

export const weeks: WeekData[] = [
  {
    weekNumber: 1,
    perekNumber: 1,
    perekTitle: 'Perek Aleph',
    perekTheme: 'Foundations',
    keyQuote: 'The world stands on three things: Torah, Avodah, and Gemilut Chasadim.',
    keyQuoteAttribution: 'Shimon HaTzaddik, Avot 1:2',
    spotlightNonprofitId: 'mazon',
    status: 'completed',
    chosenBy: {
      name: 'The Opening Committee',
      note: "Every loop starts somewhere. We chose to begin with hunger — because Gemilut Chasadim means not just loving, but feeding.",
    },
    winner: {
      name: 'Miriam Cohen',
      score: 5,
      chosenNextId: 'repair-the-world',
    },
    connection:
      "Shimon HaTzaddik's third pillar — Gemilut Chasadim — is what MAZON practices, not just preaches.",
  },
  {
    weekNumber: 2,
    perekNumber: 2,
    perekTitle: 'Perek Bet',
    perekTheme: 'Choosing Your Path',
    keyQuote: 'It is not your duty to finish the work, but neither are you free to desist from it.',
    keyQuoteAttribution: 'Rabbi Tarfon, Avot 2:16',
    spotlightNonprofitId: 'repair-the-world',
    status: 'completed',
    chosenBy: {
      name: 'Miriam Cohen',
      note: "Repair the World puts volunteers where they're needed — that's Rabbi Tarfon made real.",
    },
    winner: {
      name: 'Jonah Feldman',
      score: 5,
      chosenNextId: 'grow-torah',
    },
    connection:
      "Rabbi Tarfon's mandate in practice: the work won't finish, and that is not an excuse to stop.",
  },
  {
    weekNumber: 3,
    perekNumber: 3,
    perekTitle: 'Perek Gimel',
    perekTheme: 'Dignity & Humility',
    keyQuote: 'Beloved is the human being, for they were created in the image of God.',
    keyQuoteAttribution: 'Rabbi Akiva, Avot 3:14',
    spotlightNonprofitId: 'grow-torah',
    status: 'completed',
    chosenBy: {
      name: 'Jonah Feldman',
      note: "Dignity starts with access — to community, to learning, to a seat at the table. Grow Torah builds that seat.",
    },
    connection:
      "Rabbi Akiva's insistence on human dignity begins with belonging — and Grow Torah exists to make Jewish belonging more possible.",
  },
  {
    weekNumber: 4,
    perekNumber: 4,
    perekTitle: 'Perek Dalet',
    perekTheme: 'Who Is Wise?',
    keyQuote: 'יְהִי כְבוֹד תַּלְמִידְךָ חָבִיב עָלֶיךָ כְּשֶׁלְּךָ, וּכְבוֹד חֲבֵרְךָ כְּמוֹרָא רַבְּךָ, וּמוֹרָא רַבְּךָ כְּמוֹרָא שָׁמָיִם:',
    keyQuoteAttribution: 'Rabbi Elazar ben Shammua, Avot 4:12',
    spotlightNonprofitId: 'ajws',
    status: 'active',
    connection:
      "Ben Zoma's answer in practice: AJWS arrives with resources, not answers, and lets the people with lived knowledge lead.",
  },
  {
    weekNumber: 5,
    perekNumber: 5,
    perekTitle: 'Perek Hey',
    perekTheme: 'Patterns & Balance',
    keyQuote: 'With ten utterances was the world created.',
    keyQuoteAttribution: 'Avot 5:1',
    spotlightNonprofitId: 'jewish-farm-school',
    status: 'upcoming',
    connection:
      "The Jewish Farm School finds Perek Hey's structure in the land itself — creation as ongoing obligation, not a one-time event.",
  },
  {
    weekNumber: 6,
    perekNumber: 6,
    perekTitle: 'Perek Vav',
    perekTheme: 'Torah for Its Own Sake',
    keyQuote: 'Turn it and turn it again, for everything is in it.',
    keyQuoteAttribution: 'Ben Bag Bag, Avot 6:26',
    spotlightNonprofitId: 'covenant-foundation',
    status: 'upcoming',
    connection:
      "The Covenant Foundation funds educators who know the difference between Torah for a grade and Torah l'shmah.",
  },
];

export function getCurrentWeek(): WeekData {
  return weeks.find((w) => w.status === 'active') ?? weeks[0];
}

export function getWeekByNumber(n: number): WeekData | undefined {
  return weeks.find((w) => w.weekNumber === n);
}

export function getCompletedWeeks(): WeekData[] {
  return weeks.filter((w) => w.status === 'completed');
}
