export type Player = {
  name: string;
  pledged: number;
};

export const currentLeaderboard: Player[] = [
  { name: 'Miriam Cohen',   pledged: 350 },
  { name: 'Jonah Feldman',  pledged: 280 },
  { name: 'Sarah Levy',     pledged: 200 },
  { name: 'David Katz',     pledged: 175 },
  { name: 'Rachel Blum',    pledged: 150 },
  { name: 'Eli Horowitz',   pledged: 120 },
  { name: 'Naomi Gold',     pledged: 95  },
  { name: 'Aaron Stern',    pledged: 75  },
];
