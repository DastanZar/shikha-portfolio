export { LINKS } from "./config";

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "publications", label: "Publications" },
  { id: "booking", label: "Book Session" },
] as const;

export const SPECIALIZATIONS = [
  "Positive Psychology",
  "CBT & Behavior Therapy",
  "Resilience & Flourishing",
  "Marital / Couple / Family",
  "Anxiety, Depression & Relationships",
  "OCD Support",
  "Loss, Grief & Meaning-Making",
  "Queer-Affirmative Care",
] as const;

export interface EduItem {
  title: string;
  org: string;
  year: string;
  desc: string;
  highlight?: boolean;
}

export const EDUCATION: EduItem[] = [
  {
    title: "Ph.D. in Psychology",
    org: "IIT Hyderabad, Dept. of Liberal Arts",
    year: "2018 — 2024",
    desc: "Research: Positive adaptation to Loss through life stories. Exploring narrative identity and post-loss growth.",
    highlight: true,
  },
  {
    title: "M.Phil Clinical Psychology",
    org: "Central Institute of Psychiatry (CIP), Kanke, Ranchi",
    year: "2012 — 2014",
    desc: "Intensive clinical rotations. RCI curriculum. Psychodiagnostics, psychotherapy, neuropsychology.",
  },
  {
    title: "M.A. Psychology",
    org: "Daulat Ram College, University of Delhi",
    year: "2010 — 2012",
    desc: "Specialization in Clinical Psychology. First Class.",
  },
  {
    title: "B.A. (H) Psychology",
    org: "Daulat Ram College, University of Delhi",
    year: "2007 — 2010",
    desc: "Foundation in lifespan, social and cognitive psychology.",
  },
];

export interface ExpItem {
  place: string;
  role: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExpItem[] = [
  {
    place: "NIMHANS, Bengaluru",
    role: "Senior Research Fellow (ICMR)",
    period: "2015 — 2016",
    points: [
      "CBT in partial responders with OCD: A Randomized Trial",
      "Handled OPD Behavioural Medicine",
      "Supervised junior trainees",
    ],
  },
  {
    place: "CIP, Ranchi",
    role: "Clinical Psychologist Trainee",
    period: "2012 — 2014",
    points: ["IPD & OPD across Adult, Child, De-addiction & Neuropsychiatry", "Conducted 400+ assessments"],
  },
  {
    place: "Medanta – The Medicity",
    role: "Intern, Institute of Neurosciences",
    period: "2011 — 2012",
    points: ["Gurugram • Neuropsychological assessments & counseling"],
  },
  {
    place: "GTB Hospital, Delhi",
    role: "Intern, Dept. of Psychiatry",
    period: "2010",
    points: ["Early clinical exposure, case history & MSE"],
  },
];

export interface CredItem {
  title: string;
  sub: string;
  icon: string;
}

export const CREDENTIALS: CredItem[] = [
  { title: "RCI Licensed", sub: "Clinical Psychologist • Reg. No. – Licensed", icon: "◆" },
  { title: "ICMR Fellowship", sub: "Senior Research Fellow, NIMHANS", icon: "◇" },
  { title: "Ph.D. Scholar", sub: "IIT Hyderabad • Resilience & Narratives", icon: "◈" },
  { title: "Training", sub: "Psycho-diagnostics, CBT, Behaviour Therapy", icon: "⬜" },
  { title: "Languages", sub: "English, Hindi — sessions in both", icon: "◐" },
  { title: "1479+ Sessions", sub: "Top-rated on DocVita & Topmate", icon: "★" },
  { title: "Queer-Affirmative", sub: "Safe, affirming, non-judgmental space", icon: "♡" },
  { title: "Evidence-based", sub: "Integrative • Human-centered • Ethical", icon: "✦" },
];

export interface PubItem {
  title: string;
  authors: string;
  venue: string;
  abs: string;
}

export const PUBLICATIONS: PubItem[] = [
  {
    title: "Narratives of resilience: Life stories and positive adaptation to loss",
    authors: "Soni, S. (2023)",
    venue: "Journal of Loss & Trauma (Under Review)",
    abs: "This study examines how individuals re-author identity after bereavement through narrative coherence and meaning-making, identifying three pathways of positive adaptation.",
  },
  {
    title: "CBT for partial responders in OCD: Pilot findings from a randomized trial at NIMHANS",
    authors: "Soni, S., et al. (2016)",
    venue: "Indian Journal of Psychological Medicine",
    abs: "Preliminary data from an ICMR-funded RCT exploring augmentation CBT strategies for OCD patients with partial SSRI response.",
  },
  {
    title: "Growth after grief: Role of continuing bonds and social support",
    authors: "Soni, S. & Reddy, K. S. (2022)",
    venue: "Psychological Studies, Springer",
    abs: "Mixed-methods exploration of post-traumatic growth in Indian bereaved adults.",
  },
  {
    title: "Therapist self-care and compassion satisfaction in Indian clinical settings",
    authors: "Soni, S. (2021)",
    venue: "Conference Proceedings, NAOP",
    abs: "Reflective study on burnout, resilience and sustainable practice for early-career clinicians.",
  },
];

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Anjali R.",
    role: "Topmate • 5/5",
    text: "Dr. Shikha made me feel heard from the very first minute. She doesn't rush, she remembers the small details, and her approach is so gentle yet practical.",
  },
  {
    name: "Pavithra S Nath",
    role: "Topmate • 5/5",
    text: "I went for relationship anxiety and overthinking. In 6 sessions I could actually notice a shift in how I respond. Highly recommend for anyone looking for a grounded therapist.",
  },
  {
    name: "Anonymous",
    role: "Couple Session",
    text: "We were stuck in the same fight loop. She helped us slow down and listen. The exercises were simple but changed how we talk at home.",
  },
  {
    name: "Rahul M.",
    role: "DocVita Review",
    text: "Very professional, warm and non-judgmental. The session structure was clear and I left with tools, not just insight.",
  },
];

export interface EventItem {
  title: string;
  place: string;
  desc: string;
  deathCafe?: boolean;
}

export const EVENTS: EventItem[] = [
  {
    title: "Death Cafe @ Lahe Lahe",
    place: "Bengaluru • 2023",
    desc: "Facilitated open conversation on mortality, grief and living meaningfully.",
    deathCafe: true,
  },
  {
    title: "Death Cafe @ Lamakaan",
    place: "Hyderabad • 2022",
    desc: "Tea, cake and conversations about death — a global movement for safe dialogue.",
    deathCafe: true,
  },
  {
    title: "Workshop: Resilience Narratives",
    place: "IIT Hyderabad",
    desc: "Interactive session on life stories and post-loss adaptation for students.",
  },
];

export const TOPMATE_STATS = {
  rating: "5/5",
  ratingsCount: 27,
  sessions: "1479+",
  link: "https://topmate.io/dr_shikha_soni",
};

export const PRIVATE_PRACTICE_BENEFITS = [
  "50-min slots",
  "Online & In-Person (Bengaluru)",
  "Intake + consent + secure video",
  "Evidence-based integrative care",
];

export const TOPMATE_BENEFITS = [
  "15-min discovery call",
  "Quick connect for first-time clients",
  "No intake forms",
  "Talk before you commit to therapy",
];

export const GROUNDING_STEPS = [
  "5 things you SEE",
  "4 you can TOUCH",
  "3 you HEAR",
  "2 you SMELL",
  "1 you TASTE",
];

export const FLOURISH_WORDS = [
  "resilience",
  "hope",
  "growth",
  "belonging",
  "breathe",
  "soften",
  "flourish",
];
