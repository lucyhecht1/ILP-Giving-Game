import type { TriviaQuestion } from '@/lib/types';

export const triviaQuestions: TriviaQuestion[] = [
  // ── PEREK 1 ──────────────────────────────────────────────────────────────
  {
    id: 'p1q1',
    perekNumber: 1,
    question:
      '"Be deliberate in judgment, raise many students, and make a fence around the Torah." Who said this?',
    options: ['Hillel', 'Shammai', 'The Men of the Great Assembly', 'Shimon HaTzaddik'],
    correctIndex: 2,
    explanation:
      'This trio of directives opens Pirkei Avot, spoken by the Men of the Great Assembly — the rabbis who bridged prophecy and the Oral tradition.',
  },
  {
    id: 'p1q2',
    perekNumber: 1,
    question: 'According to Shimon HaTzaddik, on which three things does the world stand?',
    options: [
      'Faith, hope, and love',
      'Torah, Avodah, and Gemilut Chasadim',
      'Torah, prayer, and charity',
      'Justice, truth, and peace',
    ],
    correctIndex: 1,
    explanation:
      'The OG three-legged stool: Torah (learning), Avodah (service/worship), and Gemilut Chasadim (acts of lovingkindness).',
  },
  {
    id: 'p1q3',
    perekNumber: 1,
    question: 'What did Hillel say about judging others?',
    options: [
      'Judge favorably always',
      'Do not judge at all',
      'Do not judge your fellow until you have reached their place',
      'Judge quickly and move on',
    ],
    correctIndex: 2,
    explanation:
      'Classic Hillel — radical empathy before judgment. The original "walk a mile in their shoes," circa 1st century CE.',
  },
  {
    id: 'p1q4',
    perekNumber: 1,
    question:
      'Complete Hillel\'s teaching: "If I am not for myself, who will be for me? But if I am only for myself, ___"',
    options: ['What good am I?', 'What am I?', 'Who will follow me?', 'What will I leave behind?'],
    correctIndex: 1,
    explanation:
      '"What am I?" — not "what good am I?" The question is existential, not transactional. Hillel is asking about identity, not utility.',
  },
  {
    id: 'p1q5',
    perekNumber: 1,
    question: 'Shammai taught: greet every person with ___',
    options: ['humility', 'a warm handshake', 'a cheerful face', 'words of Torah'],
    correctIndex: 2,
    explanation:
      'Shammai, often cast as the strict one, teaches radical hospitality here. Even the serious ones have their moments.',
  },

  {
    id: 'p1q6',
    perekNumber: 1,
    question: 'Antigonus of Sokho taught: do not be like servants who serve the master for the sake of ___',
    options: ['praise', 'recognition', 'reward', 'love'],
    correctIndex: 2,
    explanation:
      'Serve because it is right, not because you expect something in return. Either very pure or very demanding, depending on your Thursday.',
  },
  {
    id: 'p1q7',
    perekNumber: 1,
    question: 'Hillel said: "Be of the disciples of Aaron — love peace, pursue peace, love people, and bring them close to ___"',
    options: ['prayer', 'Torah', 'Shabbat', 'justice'],
    correctIndex: 1,
    explanation:
      'Love peace is not passive — pursue it. And the goal of bringing people close to Torah is the love, not the obligation.',
  },
  {
    id: 'p1q8',
    perekNumber: 1,
    question: 'Hillel taught: one who makes use of the crown of Torah ___',
    options: ['will teach many students', 'will be greatly honored', 'fades away', 'inherits the World to Come'],
    correctIndex: 2,
    explanation:
      "The crown of Torah isn't a credential to leverage. It vanishes the moment you try to cash it in.",
  },
  {
    id: 'p1q9',
    perekNumber: 1,
    question: 'Yose ben Yoezer taught: let your house be a meeting place for the sages, sit in the dust of their feet, and ___',
    options: ['ask them many questions', 'drink their words thirstily', 'honor them above all', 'learn day and night'],
    correctIndex: 1,
    explanation:
      'Drink thirstily — not politely, not academically. The image is someone desperate for the teaching.',
  },
  {
    id: 'p1q10',
    perekNumber: 1,
    question: 'Shemaya taught: love work, hate ___, and do not make yourself known to the government',
    options: ['idleness', 'waste', 'lordship', 'excess'],
    correctIndex: 2,
    explanation:
      'Three rules for a good life in difficult times: love the work itself, shun dominion over others, stay off the government\'s radar.',
  },

  // ── PEREK 2 ──────────────────────────────────────────────────────────────
  {
    id: 'p2q1',
    perekNumber: 2,
    question: 'Who said "Make His will your will, so He will make your will His will"?',
    options: [
      'Hillel',
      'Rabban Gamliel son of Rabbi Yehudah HaNasi',
      'Rabbi Eliezer',
      'Rebbi',
    ],
    correctIndex: 1,
    explanation:
      'A beautiful inversion: align yourself with the divine, and the divine aligns with you.',
  },
  {
    id: 'p2q2',
    perekNumber: 2,
    question: 'Rebbi taught: be careful with a light mitzvah as with a weighty one, because ___',
    options: [
      "you don't know which God values more",
      'all mitzvot are equal',
      'the angels are watching',
      'small things add up',
    ],
    correctIndex: 0,
    explanation: 'We don\'t have access to the divine "rewards spreadsheet" — so treat them all like they matter.',
  },
  {
    id: 'p2q3',
    perekNumber: 2,
    question:
      'Rabbi Tarfon said: "The day is short, the work is great... It is not your duty to finish the work, but ___"',
    options: [
      'do what you can',
      'neither are you free to desist from it',
      'God will complete it',
      'your children will continue',
    ],
    correctIndex: 1,
    explanation:
      "The patron saint of activists and the chronically overwhelmed: you don't have to solve it all, but you can't opt out either.",
  },
  {
    id: 'p2q4',
    perekNumber: 2,
    question:
      'When Rabban Yochanan ben Zakkai asked his students which good way a person should cleave to, what did he declare the winner?',
    options: ['A good name', 'A good heart', 'Humility', 'Diligence'],
    correctIndex: 1,
    explanation:
      'His students gave five answers; he chose "good heart" as the master key — because it encompasses all the others.',
  },
  {
    id: 'p2q5',
    perekNumber: 2,
    question: 'What did Rabbi Eliezer advise about repentance?',
    options: [
      'Repent on Yom Kippur',
      'Repent before your children',
      'Repent one day before you die',
      'Repent after wronging someone',
    ],
    correctIndex: 2,
    explanation:
      'His students asked: "But how do we know when we\'ll die?" He answered: exactly. Repent today.',
  },

  {
    id: 'p2q6',
    perekNumber: 2,
    question: 'Hillel saw a skull floating on the water. What did he say would happen to those who drowned it?',
    options: ['They would face divine judgment', 'They would be forgiven', 'They would also be drowned', 'They would be redeemed'],
    correctIndex: 2,
    explanation:
      'A chain of consequence. Violence perpetuates itself until something breaks the cycle. Hillel saw all of this in a skull.',
  },
  {
    id: 'p2q7',
    perekNumber: 2,
    question: 'Hillel taught: more flesh, more worms; more possessions, more worry; more Torah, ___',
    options: ['more questions', 'more peace', 'more life', 'more friends'],
    correctIndex: 2,
    explanation:
      'The only accumulation that compounds positively: more Torah = more life. Everything else on the list has a catch.',
  },
  {
    id: 'p2q8',
    perekNumber: 2,
    question: 'When Rabban Yochanan ben Zakkai asked his students which quality to shun most, Rabbi Elazar ben Arach answered:',
    options: ['A bad neighbor', 'A wicked companion', 'An evil heart', 'A bad friend'],
    correctIndex: 2,
    explanation:
      "Just as Rabbi Elazar named 'good heart' as the master virtue, he named 'evil heart' as the root flaw. His teacher agreed on both.",
  },
  {
    id: 'p2q9',
    perekNumber: 2,
    question: 'Rabbi Yehoshua said: the evil eye, the evil inclination, and ___ drive a person from the world',
    options: ['bad company', 'hatred of people', 'laziness', 'arrogance'],
    correctIndex: 1,
    explanation:
      "Three drives toward self-destruction: the evil eye (envy), the evil inclination (yetzer hara), and sinat habriyot — hatred of other people.",
  },
  {
    id: 'p2q10',
    perekNumber: 2,
    question: 'Rebbi taught: which is the right path for a person to choose? That which is ___',
    options: [
      'most difficult',
      'an honor to its doer and earns respect from others',
      'commanded by God',
      'most beneficial to others',
    ],
    correctIndex: 1,
    explanation:
      'Two validations: internal (you feel dignified doing it) and external (others respect it). Neither alone is enough.',
  },

  // ── PEREK 3 ──────────────────────────────────────────────────────────────
  {
    id: 'p3q1',
    perekNumber: 3,
    question:
      '"Know from where you came, where you are going, and before Whom you will give account" — who said this?',
    options: ['Rabbi Akiva', 'Akavya ben Mahalalel', 'Rabbi Chanina', 'Ben Azzai'],
    correctIndex: 1,
    explanation:
      "Akavya's three-question reality check. Where you came from (a humble place), where you're going (same), and who you'll answer to.",
  },
  {
    id: 'p3q2',
    perekNumber: 3,
    question: 'Rabbi Chanina, deputy High Priest, said: "Pray for the welfare of ___"',
    options: ['your family', 'the government', 'Jerusalem', 'your enemies'],
    correctIndex: 1,
    explanation:
      "Pray for the government — because without it keeping order, people would swallow each other alive. Pragmatic, not naive.",
  },
  {
    id: 'p3q3',
    perekNumber: 3,
    question:
      'Ben Azzai said: "Do not scorn any person and do not discount any thing — for ___"',
    options: [
      'God watches everything',
      'everyone has a spark of holiness',
      'every person has their hour and every thing has its place',
      'kindness returns to the giver',
    ],
    correctIndex: 2,
    explanation: 'Every person has their hour. The underdog has their moment. Pure temporal humility.',
  },
  {
    id: 'p3q4',
    perekNumber: 3,
    question:
      'According to Rabbi Chananya ben Tradyon, when do two people fail to have the Shechina rest upon them?',
    options: [
      'When they disagree about Torah',
      'When they study different texts',
      'When they sit together and exchange no words of Torah',
      'When they study without a teacher',
    ],
    correctIndex: 2,
    explanation:
      "Even a pair of people — even one person studying — the Shechina can be present. Don't miss the opening.",
  },
  {
    id: 'p3q5',
    perekNumber: 3,
    question: 'Rabbi Akiva said: "Beloved is the human being, for they were created in ___"',
    options: ['holiness', 'wisdom', 'the image of God', 'light'],
    correctIndex: 2,
    explanation:
      'Tzelem Elohim — the image of God. Rabbi Akiva used this as the foundation for human dignity and infinite worth.',
  },

  {
    id: 'p3q6',
    perekNumber: 3,
    question: 'Nechunyah ben Hakanah taught: whoever accepts the yoke of Torah is relieved of ___',
    options: ['all suffering', 'the yoke of government and worldly concerns', 'the need to pray', 'physical labor'],
    correctIndex: 1,
    explanation:
      'A trade: take on the yoke of Torah and the other yokes loosen. Torah as liberation, not burden.',
  },
  {
    id: 'p3q7',
    perekNumber: 3,
    question: 'Rabbi Elazar of Bartota taught: give God of His own, for you and yours are ___',
    options: ['temporary', 'His', 'gifts', 'borrowed'],
    correctIndex: 1,
    explanation:
      'The foundation of tzedakah: it was never really yours to begin with. You are redistributing, not sacrificing.',
  },
  {
    id: 'p3q8',
    perekNumber: 3,
    question: 'Rabbi Yaakov taught: one walking and reviewing Torah who stops to say "how beautiful is this tree!" — Scripture regards it as if ___',
    options: [
      'he honored creation',
      'he has become liable with his soul',
      'he lost his portion',
      'he sinned unintentionally',
    ],
    correctIndex: 1,
    explanation:
      "Harsh, but the point is about interrupting sacred learning for the mundane. The moment of distraction is treated with extraordinary seriousness.",
  },
  {
    id: 'p3q9',
    perekNumber: 3,
    question: 'Rabbi Chanina ben Dosa said: one whose fear of sin precedes their wisdom — their wisdom ___',
    options: ['grows faster', 'endures', 'becomes complete', 'reaches Heaven'],
    correctIndex: 1,
    explanation:
      'Fear of sin first, wisdom second — then the wisdom sticks. Without the ethical foundation, the learning does not last.',
  },
  {
    id: 'p3q10',
    perekNumber: 3,
    question: 'Rabbi Akiva taught: "Everything is foreseen, yet free choice is given; the world is judged with goodness, yet ___"',
    options: [
      'God is strict with the righteous',
      'all is according to the majority of deeds',
      'sin is always punished',
      'justice is blind',
    ],
    correctIndex: 1,
    explanation:
      "The classic free will paradox — held together, not resolved. In the end, your whole life is weighed on a scale.",
  },

  // ── PEREK 4 ──────────────────────────────────────────────────────────────
  {
    id: 'p4q1',
    perekNumber: 4,
    question: '"Who is wise?" asked Ben Zoma. His answer:',
    options: [
      'One who has studied much Torah',
      'One who learns from every person',
      'One who asks good questions',
      'One who fears God',
    ],
    correctIndex: 1,
    explanation:
      'Every person — not every teacher, not every sage. Every. Person. The most democratic epistemology in the canon.',
  },
  {
    id: 'p4q2',
    perekNumber: 4,
    question: '"Who is mighty?" — Ben Zoma\'s answer:',
    options: [
      'One who defeats enemies',
      'One who is never afraid',
      'One who conquers their own impulse',
      'One who stands alone',
    ],
    correctIndex: 2,
    explanation:
      "The strongest person in the room is fighting their own inclinations. No gym required.",
  },
  {
    id: 'p4q3',
    perekNumber: 4,
    question: '"Who is rich?" — Ben Zoma\'s answer:',
    options: [
      'One who has a good job',
      'One who gives generously',
      'One who is satisfied with their portion',
      'One who lives simply',
    ],
    correctIndex: 2,
    explanation:
      "Samei'ach b'chelko — satisfied with your portion. The original case against lifestyle inflation.",
  },
  {
    id: 'p4q4',
    perekNumber: 4,
    question: 'Ben Azzai taught: "Run to do a minor mitzvah as a major one, and flee from ___"',
    options: ['temptation', 'sin', 'laziness', 'bad company'],
    correctIndex: 1,
    explanation: 'The urgency is symmetric: sprint toward good, sprint away from harm. No half-measures.',
  },
  {
    id: 'p4q5',
    perekNumber: 4,
    question:
      'Rabbi Levitas of Yavneh said: "Be exceedingly humble in spirit, for the hope of man is ___"',
    options: ['in God alone', 'in Torah study', 'the worm', 'in his children'],
    correctIndex: 2,
    explanation:
      'Startlingly blunt. The hope of humans — our endpoint — is decomposition. Nothing deflates ego like a good memento mori.',
  },

  {
    id: 'p4q6',
    perekNumber: 4,
    question: 'Rabbi Yishmael taught: one who learns Torah in order to do is given the opportunity to learn, teach, observe, and ___',
    options: ['be rewarded', 'do', 'lead others', 'receive honor'],
    correctIndex: 1,
    explanation:
      'The full chain: learn → teach → observe → act. The one who studies only to teach gets the first two. Action unlocks the rest.',
  },
  {
    id: 'p4q7',
    perekNumber: 4,
    question: 'Rabbi Tzaddok said: do not make Torah a crown with which to glorify yourself, nor ___',
    options: [
      'a burden to carry',
      'a sword to fight with',
      'a spade with which to dig',
      'a shield to hide behind',
    ],
    correctIndex: 2,
    explanation:
      'The crown (self-glorification) and the spade (using Torah for material gain) are the two classic corruptions of Torah study.',
  },
  {
    id: 'p4q8',
    perekNumber: 4,
    question: 'Rabbi Yonatan taught: whoever fulfills Torah in poverty will ultimately fulfill it in ___',
    options: ['joy', 'wealth', 'community', 'old age'],
    correctIndex: 1,
    explanation:
      'Hold onto Torah in the hard times and the good times will come. Let it go in comfort, and you lose both.',
  },
  {
    id: 'p4q9',
    perekNumber: 4,
    question: 'Rabbi Yaakov said: this world is like a lobby before the World to Come. Prepare yourself in the lobby so that ___',
    options: [
      'you are worthy of judgment',
      'you may enter the banquet hall',
      'God will receive you',
      'you have no regrets',
    ],
    correctIndex: 1,
    explanation:
      'Life here is preparation, not destination. The lobby metaphor is wonderfully mundane — fix your coat before the main event.',
  },
  {
    id: 'p4q10',
    perekNumber: 4,
    question: '"Better one hour of repentance and good deeds in this world than ___"',
    options: [
      'a lifetime of study',
      'all the life of the World to Come',
      'a thousand years in paradise',
      'endless prayer',
    ],
    correctIndex: 1,
    explanation:
      'Action in this world is irreplaceable — no future bliss substitutes for doing good now. The urgency of this life is the whole point.',
  },

  // ── PEREK 5 ──────────────────────────────────────────────────────────────
  {
    id: 'p5q1',
    perekNumber: 5,
    question: 'With how many utterances was the world created, according to Perek 5?',
    options: ['7', '10', '13', '3'],
    correctIndex: 1,
    explanation:
      'Ten divine utterances in the first chapter of Bereishit — "And God said..." appears ten times. The world is literally spoken into existence.',
  },
  {
    id: 'p5q2',
    perekNumber: 5,
    question: 'How many generations passed from Adam to Noah, showing God\'s patience?',
    options: ['7', '15', '10', '12'],
    correctIndex: 2,
    explanation:
      'Ten generations of patience before the flood. The mishna is noting how long God waited before acting.',
  },
  {
    id: 'p5q3',
    perekNumber: 5,
    question: 'The mishna lists four types of students. Which type is like a strainer?',
    options: [
      'Retains the good, lets the bad pass',
      'Loses the good, keeps the bad',
      'Retains everything',
      'Retains nothing',
    ],
    correctIndex: 1,
    explanation:
      "A strainer lets the wine through and keeps the sediment. Not the ideal student — but hey, at least they show up.",
  },
  {
    id: 'p5q4',
    perekNumber: 5,
    question:
      'Someone who says "what\'s mine is mine and what\'s yours is yours" — what does the mishna call this quality?',
    options: [
      'Generous',
      'Average — some say: the quality of Sodom',
      'Wicked',
      'Righteous',
    ],
    correctIndex: 1,
    explanation:
      "The mishna names both possibilities: it's average, or it's Sodom-like. Radical detachment can look like self-sufficiency — or indifference.",
  },
  {
    id: 'p5q5',
    perekNumber: 5,
    question: 'Which tzedakah-giver does the mishna describe as righteous (chasid)?',
    options: [
      "Gives but thinks others shouldn't have to",
      "Doesn't give but encourages others",
      'Gives and also encourages others to give',
      'Gives secretly',
    ],
    correctIndex: 2,
    explanation:
      'The mishna measures both action and attitude. Giving is good; wanting a culture of giving is righteous.',
  },

  {
    id: 'p5q6',
    perekNumber: 5,
    question: 'How many trials was Abraham our father tested with — and he withstood them all?',
    options: ['7', '10', '12', '40'],
    correctIndex: 1,
    explanation:
      'Ten trials, from leaving his homeland to the Akedah. The mishna counts them to show the depth of his love.',
  },
  {
    id: 'p5q7',
    perekNumber: 5,
    question: 'The mishna contrasts seven qualities of the wise person and the boor. Which is listed as a quality of the wise?',
    options: [
      'Speaks before listening',
      'Does not interrupt',
      'Always has the last word',
      'Answers before all questions are asked',
    ],
    correctIndex: 1,
    explanation:
      'Does not interrupt — alongside knowing when to speak, when to stay silent, and how to acknowledge not knowing. The boor does all the opposite.',
  },
  {
    id: 'p5q8',
    perekNumber: 5,
    question: 'The mishna describes four student types. Which one is like a sieve?',
    options: [
      'Absorbs everything indiscriminately',
      'Takes in from one end and loses from the other',
      'Lets the wine through and keeps the dregs',
      'Retains the fine flour and lets the coarse pass',
    ],
    correctIndex: 3,
    explanation:
      'The sieve keeps the fine flour and loses the coarse — the ideal student. The strainer (keeps the dregs) is the troubling one.',
  },
  {
    id: 'p5q9',
    perekNumber: 5,
    question: 'Yehuda ben Tema said: "Be bold as a ___, light as an eagle, swift as a deer, and strong as a lion to do the will of your Father in Heaven."',
    options: ['bear', 'wolf', 'leopard', 'ox'],
    correctIndex: 2,
    explanation:
      'Az k\'namer — bold as a leopard. Four animals, four qualities. The leopard is chosen for its fierce, unashamed directness.',
  },
  {
    id: 'p5q10',
    perekNumber: 5,
    question: 'Which dispute does the mishna cite as the example of a dispute for the sake of Heaven — one that will endure?',
    options: ['Moses and Korah', 'Hillel and Shammai', 'Rabbi Akiva and Rabbi Yishmael', 'Beit Shammai and the Sadducees'],
    correctIndex: 1,
    explanation:
      "Hillel and Shammai argued constantly — and both views are preserved as 'words of the living God.' The dispute that endures is the one motivated by truth, not ego.",
  },

  // ── PEREK 6 ──────────────────────────────────────────────────────────────
  {
    id: 'p6q1',
    perekNumber: 6,
    question: 'How many ways does Perek 6 say Torah is acquired?',
    options: ['10', '36', '48', '613'],
    correctIndex: 2,
    explanation:
      'Forty-eight qualities — from love of God to silence to humility. Torah acquisition is a full-person project. Also: yes, someone counted.',
  },
  {
    id: 'p6q2',
    perekNumber: 6,
    question: 'What does Ben Bag Bag say about Torah?',
    options: [
      'Study it for the sake of heaven',
      'Turn it and turn it again, for everything is in it',
      'Torah is only acquired in a group',
      'The Torah belongs to everyone',
    ],
    correctIndex: 1,
    explanation:
      '"Turn it and turn it, for everything is in it." Also: Ben Bag Bag is genuinely a person\'s name in the Talmud. You can look it up.',
  },
  {
    id: 'p6q3',
    perekNumber: 6,
    question: 'Which of these is NOT one of the 48 ways to acquire Torah?',
    options: ['Listening carefully', 'Serving scholars', 'Wealth', 'Love of God'],
    correctIndex: 2,
    explanation:
      "Torah is famously acquired without wealth — and sometimes despite it. The 48 ways are all about character, relationships, and disposition.",
  },
  {
    id: 'p6q4',
    perekNumber: 6,
    question: 'Rabbi Yose ben Kisma declined a huge offer to move to another city. Why?',
    options: [
      'He loved his hometown',
      'He could not live anywhere but a place of Torah',
      "His family wouldn't move",
      'The city was wicked',
    ],
    correctIndex: 1,
    explanation:
      'He was offered "a thousand thousand golden dinars plus precious stones and pearls." His answer: not for all the money in the world.',
  },
  {
    id: 'p6q5',
    perekNumber: 6,
    question: 'According to Perek 6, for whose sake was the world created?',
    options: ['The Jewish people', 'Shabbat', 'Itself — for no reason', 'The Torah'],
    correctIndex: 3,
    explanation:
      '"The world was created only for the sake of the Torah." An extraordinary claim — and a call to take learning seriously.',
  },
  {
    id: 'p6q6',
    perekNumber: 6,
    question: 'The mishna describes the way of Torah: eat bread with salt, drink water sparingly, sleep on the ground, and ___',
    options: ['pray without ceasing', 'toil in Torah', 'do not complain', 'give to others generously'],
    correctIndex: 1,
    explanation:
      'A spartan regimen — not because suffering is holy, but because comfort can become the whole point. Torah requires you to not let the material crowd out the sacred.',
  },
  {
    id: 'p6q7',
    perekNumber: 6,
    question: 'Rabbi Yehoshua ben Levi said a heavenly voice goes forth daily from Mount Horev. Whoever does not occupy himself with Torah is called ___',
    options: ['a sinner', 'negligent', 'rebuked', 'a disgraced person'],
    correctIndex: 3,
    explanation:
      "Nazuf — disgraced. The voice goes out every day. You're never without the invitation to return.",
  },
  {
    id: 'p6q8',
    perekNumber: 6,
    question: 'One who learns from another even a single verse or a single letter — what must he do for that person?',
    options: ['Teach it forward', 'Thank God', 'Treat him with honor', 'Mention his name publicly'],
    correctIndex: 2,
    explanation:
      'Any transmission of Torah — even one letter — creates an obligation of honor. There is no such thing as a trivial teacher.',
  },
  {
    id: 'p6q9',
    perekNumber: 6,
    question: 'Which of these is NOT among the instructions in Perek 6 about how to relate to honor and greatness?',
    options: [
      'Do not seek greatness for yourself',
      'Do not covet honor',
      'Accept honor graciously when offered',
      'Do more than your studies demand',
    ],
    correctIndex: 2,
    explanation:
      "The text says don't seek it, don't covet it. No carve-out for 'well, if people offer it.' The pursuit itself corrupts.",
  },
  {
    id: 'p6q10',
    perekNumber: 6,
    question: 'The mishna says God acquired five things in His world. Which of these is NOT one of the five?',
    options: ['Torah', 'Heaven and earth', 'Abraham', 'Mount Sinai'],
    correctIndex: 3,
    explanation:
      'The five are: Torah, heaven and earth, Abraham, Israel, and the Holy Temple. Mount Sinai was the site of revelation — but not one of the five acquisitions.',
  },
];

export function getQuestionsForPerek(perekNumber: number): TriviaQuestion[] {
  return triviaQuestions.filter((q) => q.perekNumber === perekNumber);
}

export function getAllQuestions(): TriviaQuestion[] {
  return triviaQuestions;
}
