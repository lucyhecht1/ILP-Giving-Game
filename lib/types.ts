export type Nonprofit = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cause: string;
  donateUrl: string;
};

export type TriviaQuestion = {
  id: string;
  perekNumber: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type WeekData = {
  weekNumber: number;
  perekNumber: number;
  perekTitle: string;
  perekTheme: string;
  keyQuote: string;
  keyQuoteAttribution: string;
  spotlightNonprofitId: string;
  status: 'upcoming' | 'active' | 'completed';
  winner?: {
    name: string;
    score: number;
    chosenNextId: string;
  };
  chosenBy?: {
    name: string;
    note: string;
  };
  connection?: string;
};
