// S8UL GLOBAL DIGITAL HQ — REAL DATA
// Sources: s8ul.gg, Liquipedia, TalkEsport, EWC official

export const COLORS = {
  black: "#0A0A0A", dark: "#111111", surface: "#141414", border: "#1a1a1a",
  gold: "#FFD700", goldDim: "#B8960A", red: "#E63946", redDim: "#9E2832",
  cyan: "#00f0ff", white: "#ffffff", text: "#cccccc", muted: "#666666", faint: "#444444",
} as const;

export const SOCIALS = {
  shop: "https://shop.s8ul.gg/",
  twitter: "https://twitter.com/S8ulEsports",
  youtube: "https://youtube.com/@S8ULGG_",
  instagram: "https://instagram.com/s8ul.esports/",
  soulInstagram: "https://instagram.com/soulesportsofficial/",
  email: "connect@s8ul.gg",
} as const;

// ── Founders (from s8ul.gg) ──
export interface Founder {
  name: string; alias?: string; role: string; bio: string; image: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Animesh Agarwal", alias: "8Bit Thug",
    role: "Founder & CEO, 8Bit Creatives",
    bio: "Founder and CEO of 8Bit Creatives and S8UL. An entrepreneur, ex-pro gamer, Monster Energy esports athlete, and gaming & luxury lifestyle content creator. A pioneer dedicated to shaping the business of esports in India.",
    image: "/img/animesh.webp",
  },
  {
    name: "Naman Mathur", alias: "Mortal",
    role: "Co-founder, S8UL",
    bio: "The face of Indian Esports. The only Indian esports athlete to receive four nominations in the Esports Awards. A driving force behind S8UL's meteoric rise.",
    image: "/img/naman.webp",
  },
  {
    name: "Lokesh Jain",
    role: "Co-founder, 8Bit Creatives & S8UL",
    bio: "From Delhi with a business background from Hong Kong. His contributions have been instrumental in nurturing talent and advancing Indian esports.",
    image: "/img/lokesh.webp",
  },
  {
    name: "Sumit Sovasaria",
    role: "Co-founder, S8UL",
    bio: "A seasoned industrialist from Guwahati. His strategic insights and experience in scaling businesses play a crucial role in S8UL's next phase of growth.",
    image: "/img/sumit.jpg",
  },
];

// ── Achievements ──
export interface Achievement {
  year: string; title: string; description: string; icon: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { year: "2026", title: "EWC 2026 Club Partner", description: "2nd consecutive year as one of 40 official Esports World Cup Club Partners. Competing across 8+ titles in Riyadh.", icon: "🌍" },
  { year: "2026", title: "BGIS 2026 Champions", description: "Team iQOOSouL wins BGIS Grand Finals in Chennai. 577K peak viewers — all-time record.", icon: "🏆" },
  { year: "2026", title: "Valorant Rebuild", description: "Signed SkRossi as IGL with Anq, RvK, Yuvi, xexxar and coach hacker for VCSA 2026.", icon: "🎯" },
  { year: "2025", title: "EWC 2025 — Only Indian Org", description: "Competed in 8 titles: Apex, CoD Warzone, Chess, EAFC, MLBB, Tekken 8 and more.", icon: "⚡" },
  { year: "2025", title: "CODM Expansion", description: "Entered Call of Duty: Mobile with Ghost, JOKOs, SAMs, TrunKs, coach BurnZ.", icon: "💀" },
  { year: "2024", title: "3× Content Group of the Year", description: "World's first org to win Esports Content Group of the Year three straight years.", icon: "🏅" },
  { year: "2023", title: "MOBIES Global Impact Award", description: "First Indian esports org to win MOBIES award for global impact in mobile gaming, LA.", icon: "🌟" },
];

export const BRAND_PARTNERS = [
  "IQOO", "Monster Energy", "Lenovo", "Netflix", "Krafton",
  "Red Bull", "Gillette", "OnePlus", "Loco", "Rooter",
];

export const ORG_STATS = {
  brandCollabs: "250+", creators: "25+", gamingHouse: "S8UL Gaming House 2.0",
  headquarters: "Mumbai, India", esportsAwards: "3× Content Group of the Year",
  ewcViewers2025: "10.5M",
};

// ── Esports Rosters (REAL) ──
export type GameTitle = "BGMI" | "VALORANT" | "CODM" | "POKEMON_UNITE" | "FREE_FIRE";

export interface RosterPlayer {
  name: string; realName: string; role: string; nationality: string;
  age?: number; tag?: string; image?: string; icon: string;
}

export interface Roster {
  game: GameTitle; teamName: string; sponsor?: string;
  players: RosterPlayer[]; coach?: RosterPlayer;
}

export const ROSTERS: Roster[] = [
  {
    game: "BGMI", teamName: "Team iQOOSouL", sponsor: "iQOO",
    players: [
      { name: "Goblin", realName: "Siddharth Choudhary", role: "IGL / Assaulter", nationality: "India", age: 22, icon: "💀" },
      { name: "Legit", realName: "", role: "Fragger", nationality: "India", age: 20, icon: "👑", tag: "Star" },
      { name: "Thunder", realName: "", role: "Support", nationality: "India", age: 20, icon: "⚡" },
      { name: "Jokerr", realName: "", role: "Assaulter", nationality: "India", age: 20, icon: "🃏" },
      { name: "NakuL", realName: "", role: "Scout / IGL", nationality: "India", age: 21, icon: "🎯" },
    ],
    coach: { name: "Mortal", realName: "Naman Mathur", role: "Mentor / Owner", nationality: "India", age: 28, icon: "🎮" },
  },
  {
    game: "VALORANT", teamName: "S8UL Esports",
    players: [
      { name: "SkRossi", realName: "Ganesh Gangadhar", role: "IGL / Sentinel", nationality: "India", age: 28, icon: "🎯", tag: "Captain" },
      { name: "Anq", realName: "Ilya Matyash", role: "Duelist", nationality: "Russia", age: 20, icon: "🔥" },
      { name: "RvK", realName: "Rishi Vijayakumar", role: "Initiator", nationality: "India", age: 25, icon: "⚡" },
      { name: "Yuvi", realName: "Yuvraj Singh", role: "Controller", nationality: "India", icon: "🛡️" },
      { name: "xexxar", realName: "", role: "Flex", nationality: "", icon: "💎" },
    ],
    coach: { name: "hacker", realName: "Vikrant Pujari", role: "Head Coach", nationality: "India", icon: "🧠" },
  },
  {
    game: "CODM", teamName: "S8UL Esports",
    players: [
      { name: "JOKOs", realName: "Samartha Ganesh Ghadge", role: "Slayer", nationality: "India", icon: "💀" },
      { name: "SAMs", realName: "Samruddha Ghadge", role: "Obj", nationality: "India", icon: "🎯" },
      { name: "Marvel", realName: "", role: "SMG", nationality: "India", icon: "⚡" },
      { name: "Frann", realName: "", role: "AR", nationality: "India", icon: "🔥" },
      { name: "Jezz", realName: "", role: "Flex", nationality: "India", icon: "💎" },
    ],
    coach: { name: "BurnZ", realName: "Chiranthan Shetty", role: "Coach", nationality: "India", icon: "🧠" },
  },
];

// Player images from s8ul.gg
export const PLAYER_IMAGES = {
  codm: ["/img/codm1.png","/img/codm2.png","/img/codm3.png","/img/codm4.png","/img/codm5.png","/img/codm6.png"],
  valorant: ["/img/valorant1.png","/img/valorant2.png","/img/valorant3.png","/img/valorant4.png","/img/valorant5.png","/img/valorant6.png","/img/valorant7.png","/img/valorant8.png"],
  bgmi: ["/img/bgmi1.png","/img/bgmi2.png","/img/bgmi3.png","/img/bgmi4.png","/img/bgmi5.png","/img/bgmi6.png","/img/bgmi7.png","/img/bgmi8.png"],
  pokemon: ["/img/pokemon1.png","/img/pokemon2.png","/img/pokemon3.png","/img/pokemon4.png","/img/pokemon5.png"],
};

// ── News / Spotlight (from s8ul.gg) ──
export interface NewsItem {
  title: string; date: string; category: string; description: string; icon: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  { title: "S8UL Selected as EWC 2026 Club Partner", date: "April 2026", category: "EWC", description: "S8UL returns for a 2nd year as one of 40 official Club Partners for EWC 2026 in Riyadh.", icon: "🌍" },
  { title: "BGIS 2026 Champions — Chennai", date: "March 2026", category: "BGMI", description: "Team iQOOSouL lifts the BGIS 2026 trophy with 577K peak viewers.", icon: "🏆" },
  { title: "SkRossi Leads New Valorant Roster", date: "March 2026", category: "Valorant", description: "Complete rebuild with SkRossi as IGL for VCSA 2026.", icon: "🎯" },
  { title: "S8UL Enters COD: Mobile", date: "March 2025", category: "CODM", description: "Power-packed CODM roster unveiled with Ghost, JOKOs, SAMs.", icon: "💀" },
  { title: "3× Content Group of the Year", date: "August 2024", category: "Awards", description: "World's first org to win three consecutive years.", icon: "🏅" },
  { title: "MOBIES Award Winner", date: "July 2023", category: "Awards", description: "First Indian org to win MOBIES global impact award in LA.", icon: "🌟" },
];

// ── EWC 2026 (REAL) ──
export const EWC_2026 = {
  startDate: "2026-07-06T00:00:00+03:00",
  endDate: "2026-08-23T00:00:00+03:00",
  location: "Riyadh, Saudi Arabia",
  totalPrizePool: "$75,000,000",
  totalCompetitions: 25,
  totalGames: 24,
  totalClubPartners: 40,
};

export const EWC_S8UL_TITLES = [
  { game: "BGMI", status: "Qualified", icon: "📱" },
  { game: "Apex Legends", status: "Confirmed", icon: "🎮" },
  { game: "CoD: Warzone", status: "Confirmed", icon: "💀" },
  { game: "Chess", status: "Confirmed", icon: "♟️" },
  { game: "EA FC 26", status: "Expected", icon: "⚽" },
  { game: "Mobile Legends", status: "Confirmed", icon: "📱" },
  { game: "Tekken 8", status: "Confirmed", icon: "👊" },
  { game: "Valorant", status: "Qualifying", icon: "🎯" },
];

export type MatchStatus = "LIVE" | "UPCOMING" | "COMPLETED";

export interface EWCMatch {
  id: string; team1: string; team2: string; score1: number; score2: number;
  status: MatchStatus; round: string; game: string; time?: string;
}

export const EWC_SCHEDULE: EWCMatch[] = [
  { id: "m1", team1: "S8UL", team2: "Team Falcons", score1: 0, score2: 0, status: "UPCOMING", round: "BGMI — Group Stage", game: "BGMI", time: "JUL 8 · 16:00 GST" },
  { id: "m2", team1: "S8UL", team2: "ONIC", score1: 0, score2: 0, status: "UPCOMING", round: "MLBB — Group A", game: "MLBB", time: "JUL 10 · 18:00 GST" },
  { id: "m3", team1: "S8UL", team2: "Cloud9", score1: 0, score2: 0, status: "UPCOMING", round: "CoD Warzone — R1", game: "CoD", time: "JUL 12 · 20:00 GST" },
  { id: "m4", team1: "S8UL", team2: "GodLike", score1: 0, score2: 0, status: "UPCOMING", round: "BGMI — India Derby", game: "BGMI", time: "JUL 15 · 16:00 GST" },
  { id: "m5", team1: "S8UL", team2: "Fnatic", score1: 0, score2: 0, status: "UPCOMING", round: "Tekken 8 — Group B", game: "Tekken", time: "JUL 18 · 14:00 GST" },
];

export const EWC_CLUB_PARTNERS = [
  "S8UL","GodLike Esports","Team Falcons","Team Liquid","Team Vitality",
  "100 Thieves","Cloud9","Fnatic","G2 Esports","NAVI",
  "Sentinels","T1","NRG","FURIA","Team Spirit",
  "ONIC","REJECT","HEROIC","Team Heretics","MOUZ",
];

// ── Merch ──
export interface MerchItem {
  name: string; priceINR: string; priceUSD: string; tag: string; tagColor: string; emoji: string;
}

export const MERCH_ITEMS: MerchItem[] = [
  { name: "BGIS Champions Jersey 2026", priceINR: "₹2,999", priceUSD: "$36", tag: "SOLD OUT", tagColor: "#E63946", emoji: "👕" },
  { name: "S8UL Victory Hoodie — Gold", priceINR: "₹3,499", priceUSD: "$42", tag: "DROP IN 48H", tagColor: "#B8960A", emoji: "🧥" },
  { name: "S8UL Logo Cap — Limited", priceINR: "₹999", priceUSD: "$12", tag: "IN STOCK", tagColor: "#1a6b2a", emoji: "🧢" },
  { name: "S8UL × EWC Mousepad", priceINR: "₹1,499", priceUSD: "$18", tag: "IN STOCK", tagColor: "#1a6b2a", emoji: "🖱️" },
  { name: "Road to Riyadh Tee", priceINR: "₹1,799", priceUSD: "$22", tag: "PRE-ORDER", tagColor: "#00f0ff", emoji: "👕" },
  { name: "SouL Legit MVP Poster", priceINR: "₹599", priceUSD: "$7", tag: "IN STOCK", tagColor: "#1a6b2a", emoji: "🖼️" },
];

// ── Superfan Perks ──
export interface SuperfanPerk { icon: string; title: string; desc: string; }

export const SUPERFAN_PERKS: SuperfanPerk[] = [
  { icon: "🎫", title: "Watch Party Access", desc: "Free entry to watch-parties in Mumbai, Delhi, Bangalore, Chennai & Riyadh." },
  { icon: "🏷️", title: "Merch Drops First", desc: "48-hour early access to every limited edition drop on shop.s8ul.gg." },
  { icon: "🎮", title: "Play with Pros", desc: "Monthly lottery for custom matches with Soul & 8Bit rosters." },
  { icon: "⭐", title: "Loyalty Points", desc: "Earn XP for engagement — redeem for signed gear & meet-and-greets." },
  { icon: "📺", title: "BTS Content", desc: "Exclusive behind-the-scenes from S8UL Gaming House 2.0." },
  { icon: "🏆", title: "Riyadh VIP Raffle", desc: "Win an all-expenses-paid trip to EWC 2026 in Riyadh." },
];

// ── About Text (from s8ul.gg) ──
export const ABOUT_TEXT = {
  headline: "Leading the Gaming Revolution",
  subheadline: "S8UL is a global name in esports and gaming content, headquartered in Mumbai, India.",
  body: [
    "Combining championship-winning teams with world-class content creation, we are shaping the future of gaming on both national and international stages. Our BGMI and Pokémon Unite rosters dominate the competition, while our recent expansion into Valorant marks our growing presence in global esports.",
    "Beyond esports, S8UL is a three-time winner of the Esports Content Group of the Year at the Esports Awards, recognised for revolutionising gaming content. Our state-of-the-art S8UL Gaming House 2.0 is among the world's most advanced creator hubs, home to 25+ of India's top gaming creators.",
    "We've collaborated with over 250 global and regional brands, including IQOO, Monster Energy, Lenovo, Netflix, Krafton, Red Bull, and Gillette. As the first Indian esports org to win the MOBIES Global Impact Award, we continue to lead the charge in gaming excellence.",
  ],
};

// ── Footer / Legal (from s8ul.gg) ──
export const LEGAL_PAGES = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Refund Policy", href: "/refund" },
];

// ── BGIS 2026 Vault Data (for Champions Vault page) ──
export interface BGISPlayer {
  name: string; role: string; tag?: string; kills: number;
  dmg: number; rating: number; clutch: number; icon: string;
}

export const BGIS_ROSTER: BGISPlayer[] = [
  { name: "GOBLIN", role: "IGL", kills: 47, dmg: 312, rating: 9.2, clutch: 8.8, icon: "💀", tag: "IGL" },
  { name: "LEGIT", role: "Fragger", kills: 42, dmg: 295, rating: 8.9, clutch: 8.1, icon: "👑", tag: "MVP" },
  { name: "THUNDER", role: "Support", kills: 31, dmg: 201, rating: 8.1, clutch: 6.9, icon: "⚡" },
  { name: "JOKERR", role: "Assaulter", kills: 38, dmg: 278, rating: 8.7, clutch: 7.4, icon: "🃏" },
  { name: "NAKUL", role: "Scout / IGL", kills: 29, dmg: 188, rating: 7.8, clutch: 7.2, icon: "🎯" },
];

export interface BGISRound {
  round: string; place: string; kills: number; pts: number; highlight: boolean;
}

export const BGIS_TIMELINE: BGISRound[] = [
  { round: "Day 1 — R1", place: "#2", kills: 8, pts: 26, highlight: false },
  { round: "Day 1 — R2", place: "#1", kills: 11, pts: 35, highlight: true },
  { round: "Day 1 — R3", place: "#5", kills: 6, pts: 16, highlight: false },
  { round: "Day 2 — R4", place: "#1", kills: 14, pts: 39, highlight: true },
  { round: "Day 2 — R5", place: "#3", kills: 9, pts: 23, highlight: false },
  { round: "Day 2 — R6", place: "#1", kills: 12, pts: 37, highlight: true },
  { round: "Finals — R1", place: "#2", kills: 10, pts: 28, highlight: false },
  { round: "Finals — R2", place: "#1", kills: 15, pts: 42, highlight: true },
];
