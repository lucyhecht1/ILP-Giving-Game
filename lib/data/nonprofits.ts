import type { Nonprofit } from '@/lib/types';

export const nonprofits: Nonprofit[] = [
  {
    id: 'mazon',
    name: 'MAZON',
    tagline: 'A Jewish Response to Hunger',
    description:
      "MAZON works to end hunger among people of all faiths and backgrounds in the United States and Israel. When Jews celebrate lifecycle events, we don't eat alone — MAZON makes sure of that.",
    cause: 'Food Security',
    donateUrl: 'https://mazon.org',
  },
  {
    id: 'repair-the-world',
    name: 'Repair the World',
    tagline: 'Making Service Central to American Jewish Life',
    description:
      'Repair the World mobilizes Jews and their communities to take action in pursuit of a just world, helping address urgent social problems through skilled volunteerism.',
    cause: 'Service & Social Justice',
    donateUrl: 'https://werepair.org',
  },
  {
    id: 'hias',
    name: 'HIAS',
    tagline: 'Welcome the Stranger',
    description:
      "HIAS has been helping refugees and asylum-seekers since 1881 — when we helped Jews. Now we help everyone, because that's what Jews do. The world's oldest refugee resettlement organization.",
    cause: 'Refugee & Immigrant Aid',
    donateUrl: 'https://hias.org',
  },
  {
    id: 'grow-torah',
    name: 'Grow Torah',
    tagline: 'Growing Jewish Life from the Ground Up',
    description:
      'Grow Torah supports emerging Jewish educators and grassroots communities building meaningful Jewish life outside the mainstream. Small investments, outsized impact.',
    cause: 'Jewish Education',
    donateUrl: 'https://growtorah.org',
  },
  {
    id: 'ajws',
    name: 'American Jewish World Service',
    tagline: 'Pursuing Justice. Combating Poverty.',
    description:
      'AJWS funds grassroots organizations across Africa, Asia, Latin America, and the Caribbean, putting Jewish values to work on the ground in the communities that need it most.',
    cause: 'Global Justice',
    donateUrl: 'https://ajws.org',
  },
  {
    id: 'covenant-foundation',
    name: 'Covenant Foundation',
    tagline: 'Inspiring Jewish Learning',
    description:
      'The Covenant Foundation champions creative and excellent Jewish education, funding the people and projects reimagining what it means to pass Jewish life from one generation to the next.',
    cause: 'Jewish Education',
    donateUrl: 'https://covenantfn.org',
  },
  {
    id: 'jewish-farm-school',
    name: 'Jewish Farm School',
    tagline: 'Connecting Judaism, Food & the Earth',
    description:
      'Where Torah meets topsoil. The Jewish Farm School teaches sustainable farming through a Jewish lens — connecting Shemitah, environmental stewardship, and hands-in-the-dirt learning.',
    cause: 'Food & Environment',
    donateUrl: 'https://jewishfarmschool.org',
  },
  {
    id: 'ikar',
    name: 'IKAR',
    tagline: 'Justice, Spirituality, Community',
    description:
      'IKAR is an LA-based Jewish community weaving spiritual depth with social justice. Their model has inspired communities across the country to take Torah off the page and into the streets.',
    cause: 'Community & Justice',
    donateUrl: 'https://ikar-la.org',
  },
  {
    id: 'keshet',
    name: 'Keshet',
    tagline: 'LGBTQ Equality in Jewish Life',
    description:
      "Keshet works toward the full inclusion of LGBTQ Jews in Jewish life. Because everyone deserves a place at the table — and a seat during Shabbat dinner.",
    cause: 'LGBTQ Inclusion',
    donateUrl: 'https://keshetonline.org',
  },
];

export function getNonprofitById(id: string): Nonprofit | undefined {
  return nonprofits.find((n) => n.id === id);
}
