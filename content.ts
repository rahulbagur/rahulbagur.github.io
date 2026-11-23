export const resumeHref = "/Rahul_Bagur_Resume.pdf";
export const email = "rahulbagur@gmail.com";
export const linkedin = "https://www.linkedin.com/in/rahulbagur";
export const github = "https://github.com/rahulbagur";

export const salesforgeZeros =
  "Positive and Meetings booked read 0 because replies were handled and meetings booked outside Salesforge, so they were never tagged in the tool. Actual outcomes, hand-counted from the inbox for 11 Aug to 20 Nov 2026: 53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound (4 held), 1 paying client.";

export const tools = [
  "Instantly",
  "Salesforge",
  "Apollo.io",
  "LinkedIn Sales Navigator",
  "Zoho CRM",
  "Zoho SalesIQ",
  "Zoho Vault",
  "Google Workspace",
  "Databricks",
  "MoEngage",
  "Claude",
  "Gemini CLI",
];

const dim: Record<string, [number, number]> = {
  "ab-ecp-india-replies.png": [1376, 864],
  "ab-us-uk-new-gc-linkedin.png": [1376, 864],
  "linkedin-acceptance-778.png": [1504, 864],
  "outbound-domains-mailboxes.png": [1632, 900],
  "outbound-instantly-salesforge.png": [1664, 928],
  "outbound-volume.png": [1664, 928],
  "retarget-seed-funded.png": [1728, 960],
  "salesforge-all-time-email-funnel.png": [1632, 1072],
  "salesforge-all-time-linkedin-funnel.png": [1632, 1072],
  "salesforge-analytics-6-20-nov.png": [1632, 1072],
  "salesforge-early-craas-ny.png": [1632, 1072],
  "salesforge-ecp-india-runway-ending.png": [1632, 1072],
  "salesforge-incubators-india.png": [1632, 1072],
  "salesforge-linkedin-previous-fgc-ecp-craas.png": [1632, 1072],
  "salesforge-sender-profiles.png": [1632, 555],
  "salesforge-sequences-list.png": [1632, 1072],
  "salesforge-us-uk-new-gc-linkedin.png": [1632, 1072],
};

export type Shot = {
  file: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
  zeros?: boolean;
};

const shot = (file: string, alt: string, caption: string, zeros = false): Shot => {
  const [w, h] = dim[file];
  return { file, alt, caption, w, h, zeros };
};

export type Metric = { value: string; label: string; highlight?: boolean };

export type Role = {
  company: string;
  title: string;
  period: string;
  place?: string;
  context?: string;
  owned?: string;
  bullets: string[];
  badges?: string[];
};

export const roles: Role[] = [
  {
    company: "Team Counsel",
    title: "GTM Strategy Lead",
    period: "Feb 2026 to now",
    place: "Bengaluru",
    context:
      "Legal consulting practice for startups and scale-ups, nine people. First GTM hire, reporting to the founder.",
    owned: "outbound, CRM, GTM tooling, SDR direction, events follow-up, workspace ops.",
    bullets: [
      "Built the outbound and CRM stack from nothing: sending domains, 13 mailboxes across 4 domains, Instantly, Apollo, Salesforge, LinkedIn automation capped at 30 requests a day, and Zoho CRM with event and landing-page leads flowing in.",
      "Aug to Nov 2026, hand-counted from the inbox: 53 replies, 22 positive, 6 meetings booked from cold outbound (4 held) and 1 paying client.",
      "Ran the Salesforge workspace: 24 sequences, 3,623 emails at a 69.3% open rate and 0.6% bounce, plus 778 LinkedIn requests with 209 accepted (26.9%).",
      "Ran the Instantly workspace Jan to Jun: 7,623 emails across 26 campaigns, of which 1,372 were sent before 16 Feb.",
      "A/B tested live sequences: first-email variant A replied at 3.9% against 1.0%; a LinkedIn variant lifted acceptance from 9.5% to 22.0%. Incubators were the best segment at 8.1% reply.",
      "Built a daily GTM intelligence dashboard, a funding-alert automation and a landing page that writes leads into Zoho, all with AI coding tools.",
      "Onboarded and directed an SDR: tools, ICP filters, messaging, a meeting-notes framework and daily lead priorities.",
      "Moved the team to Google Workspace and a shared Drive, set up Zoho Vault for shared logins, and ran domain choice and reputation checks.",
    ],
    badges: ["Instantly", "Salesforge", "Apollo", "Zoho CRM", "LinkedIn", "Google Workspace"],
  },
  {
    company: "CoinDCX",
    title: "Analyst, Wealth Management (Business & Strategic Alliances)",
    period: "Aug 2024 to Jun 2025",
    bullets: [
      "Built and managed the Business Partner vertical to $30M+ in monthly trading volume across partners, and ran its first partner webinar.",
      "Led sub-broker acquisition campaigns: 100+ inbound leads.",
      "Scaled Advanced Earn to $8M+ AUC, with about $1M deployed in the Oct to Dec festive campaigns; drove $2M+ in monthly fresh AUC for Prime through activation funnels and lifecycle campaigns.",
      "Won \"Whale of the Quarter\" twice in a row and the monthly \"Super Satoshi\" award for campaign results.",
    ],
    badges: ["Databricks", "MoEngage", "Partner programmes"],
  },
  {
    company: "CoinDCX",
    title: "Business & Strategic Alliances Intern",
    period: "Feb 2024 to Jul 2024",
    bullets: [
      "Built the Prime sales funnel and onboarded $150,000+ AUC.",
      "Found ICP prospects in Databricks, ran targeted MoEngage campaigns, and set up the MIS reporting for sales performance and pipeline.",
    ],
  },
  {
    company: "Pickcel",
    title: "Business Development (Sales) Intern",
    period: "Jul 2023 to Dec 2023",
    place: "Bengaluru",
    bullets: [
      "Ran 50+ demos, qualified 30+ leads, closed 15+ deals and built a $100,000+ pipeline.",
      "Onboarded Vestel as a channel partner; built outbound through Apollo and LinkedIn and kept the CRM clean.",
    ],
  },
];

export const howIWork = [
  {
    title: "Read the numbers before changing anything.",
    copy: "Every week I read stand-up notes next to campaign data. In April that showed the ECP offer failing on lead quality, so I changed the list instead of the subject lines.",
  },
  {
    title: "Set up the plumbing first.",
    copy: "Separate sending domains, 13 mailboxes with a daily cap of 30 each, and LinkedIn capped at 30 requests a day, before any volume. Bounce stayed at 0.6%.",
  },
  {
    title: "Test on live sequences and keep the winner.",
    copy: "One first email replied at 3.9% and the other at 1.0%. I kept A and dropped B.",
  },
  {
    title: "Count outcomes by hand when the tool can't.",
    copy: "Salesforge showed 0 meetings because they were booked outside it. I counted them from the inbox: 6 booked, 4 held, 1 paying client.",
  },
  {
    title: "Hand it to the team.",
    copy: "Rolled Zoho CRM out to the team, set the rule that every event lead goes straight into it, and trained the SDR to run the daily list.",
  },
];

export const whatBroke = [
  "Instantly ECP: 644 emails across three versions, 0 replies. I stopped rewriting subject lines and changed the list.",
  "A WhatsApp-community campaign opened at 34% and got 0 replies. I didn't repeat it.",
  "After March, 3,183 Instantly emails brought 6 replies. I moved outbound to Salesforge in August and rewrote sequences as short, trigger-based emails with a one-word reply ask.",
];

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  line: string;
  tags: string[];
  cover?: string;
  coverLabel?: string;
  meta?: string;
  metrics: Metric[];
  metricCaption?: string;
  context: string;
  problem: string;
  steps: string[];
  results: string[];
  note?: boolean;
  didntMove: string[];
  shots: Shot[];
  close: string;
  category: "Outbound" | "RevOps" | "Events" | "Builds";
};

export const cases: CaseStudy[] = [
  {
    slug: "outbound-engine",
    title: "6 meetings and a paying client from an outbound stack built from zero",
    summary: "Team Counsel had no CRM, no sending domains and no sequencing tool. I set all of it up and ran it.",
    line: "Domains, 13 mailboxes, Instantly, Salesforge, LinkedIn and Zoho CRM for a practice that had no CRM.",
    tags: ["Outbound", "RevOps", "India, US, UK"],
    cover: "salesforge-all-time-email-funnel.png",
    meta: "Team Counsel · Feb to Nov 2026 · First GTM hire, reporting to the founder",
    metrics: [
      { value: "53", label: "replies" },
      { value: "22", label: "positive" },
      { value: "6", label: "meetings booked (4 held)" },
      { value: "1", label: "paying client", highlight: true },
    ],
    metricCaption: "Hand-counted from the inbox, 11 Aug to 20 Nov 2026.",
    context:
      "Team Counsel is a nine-person legal consulting practice for startups and scale-ups in Bengaluru. It sells startup legal retainers, fractional general counsel and contract support in India, the US and the UK. I joined in February 2026 as the first GTM hire.",
    problem: "In February there was no CRM, no dedicated sending domains and no sequencing tool.",
    steps: [
      "Picked and checked sending domains, then set up 13 mailboxes across 4 domains with a daily cap of 30 each.",
      "Ran campaigns in Instantly until mid-June, then moved to Salesforge in August for email and LinkedIn in one place. Apollo fed the lists.",
      "Turned on LinkedIn automation on 14 October, capped at 30 requests a day.",
      "Rolled Zoho CRM out to the team in late October, with event and landing-page leads going straight in.",
      "Handed replies to the SDR with daily priorities, and counted every reply and meeting by hand from the inbox.",
    ],
    results: [
      "53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound with 4 held, and 1 paying client, 11 Aug to 20 Nov 2026.",
      "Salesforge: 1,658 of 2,099 contacts reached, 3,623 emails, 69.3% open, 0.6% bounce; 778 LinkedIn requests, 209 accepted (26.9%).",
      "Instantly, Jan to Jun: 7,623 emails across 26 campaigns, including 1,372 sent before 16 Feb.",
    ],
    note: true,
    didntMove: [
      "Email reply rates stayed low (1.5% on Salesforge email); most replies came from LinkedIn. The founder led the sales calls, so the client is a shared win.",
    ],
    shots: [
      shot("outbound-domains-mailboxes.png", "Salesforge mailboxes: 13 in total, all active, 178 emails sent that day. Mailbox names are covered.", "13 mailboxes, all marked active. 178 emails sent that day."),
      shot("outbound-volume.png", "Bar chart of emails sent in 2026. Instantly by month, January to June, totals 7,623. Salesforge, August to November, is 3,623.", "Emails sent in 2026. Instantly, January to June, by month (7,623). Salesforge, August to November, 3,623."),
      shot("outbound-instantly-salesforge.png", "Two charts. Instantly January to June: 7,623 emails and 53 reply events. Salesforge August to November: 3,623 emails and 16 replies on the email tab.", "Two outbound chapters. Instantly, January to June: 7,623 emails, 53 reply events. Salesforge, August to November: 3,623 emails, 16 email replies."),
      shot("salesforge-sender-profiles.png", "Salesforge sender profiles: 4 profiles, 178 of 390 emails sent today. Profile names are covered.", "4 sender profiles. 178 of 390 emails sent that day."),
      shot("salesforge-sequences-list.png", "Salesforge list of 24 sequences. Incubators India shows an 8.1% reply rate on 37 contacts. ECP India Runway Ending shows 2.4% on 205 contacts. US UK New GC LinkedIn shows 2.4% on 83 contacts. The sender column is covered.", "24 sequences. Incubators India, 8.1% reply on 37 contacts. ECP India Runway Ending, 2.4% on 205. US UK New GC LinkedIn, 2.4% on 83."),
      shot("salesforge-all-time-email-funnel.png", "Salesforge all-time email analytics. 3,623 emails sent, 730 opened (69.3%), 16 replies (1.5%), 21 bounced (0.6%). Positive rate 0 and meetings booked 0. Contacted 1,658 of 2,099.", "All-time email: 3,623 sent, 69.3% open, 16 replies (1.5%), 21 bounced. Positive 0, meetings 0. Contacted 1,658 of 2,099.", true),
      shot("salesforge-all-time-linkedin-funnel.png", "Salesforge all-time LinkedIn analytics. 778 connections sent, 209 accepted (26.9%), 13 replies (1.7%), 0 messages sent after accept. Positive rate 0 and meetings booked 0.", "All-time LinkedIn: 778 requests, 209 accepted (26.9%), 13 replies. Positive 0, meetings 0.", true),
      shot("salesforge-analytics-6-20-nov.png", "Salesforge analytics for 6 to 20 November 2026. 500 contacted and 20 replies (4%). Email: 573 sent, 61.2% open, 8 replies (2.4%), 6 bounced. Positive 0, meetings 0.", "6 to 20 Nov 2026: 500 contacted, 20 replies (4%). Email open rate 61.2% on 573 sends. Positive 0, meetings 0.", true),
      shot("salesforge-early-craas-ny.png", "Early CRaaS NY in Salesforge, 11 Aug to 20 Nov 2026. 54 contacted, 1 reply (1.9%). 212 emails sent, 88.8% open, 0 bounced. Positive 0, meetings 0.", "Early CRaaS NY, 11 Aug to 20 Nov: 54 contacted, 1 reply (1.9%). 212 emails, 88.8% open. Positive 0, meetings 0.", true),
    ],
    close: "From no CRM in February to a paying client in November.",
    category: "Outbound",
  },
  {
    slug: "multichannel-tests",
    title: "First-email reply rate up from 1.0% to 3.9%",
    summary: "Live A/B tests on email and LinkedIn, and the segment that came out ahead.",
    line: "A/B tests on live email and LinkedIn sequences, and the segment that won.",
    tags: ["Testing", "Email", "LinkedIn"],
    cover: "ab-ecp-india-replies.png",
    metrics: [
      { value: "3.9% vs 1.0%", label: "first-email reply", highlight: true },
      { value: "22.0% vs 9.5%", label: "LinkedIn acceptance" },
      { value: "8.1%", label: "reply from incubators" },
      { value: "60%", label: "of ECP replies positive" },
    ],
    context:
      "Sequences were already running on email and LinkedIn. I read the stand-up notes and campaign data each week and tested on live sequences, not drafts.",
    problem: "Early campaigns got opens but few replies.",
    steps: [
      "Rewrote sequences into short, trigger-based emails (\"closed its last round about N months ago\") with a reply-\"yes\" ask.",
      "Split-tested the first email on ECP India Runway Ending.",
      "Split-tested the LinkedIn connection note on US UK New GC.",
      "Compared segments and moved effort to incubators.",
    ],
    results: [
      "Variant A replied at 3.9%, B at 1.0%. LinkedIn variant B was accepted at 22.0%, A at 9.5%.",
      "All LinkedIn: 209 of 778 accepted (26.9%). Incubators India replied at 8.1% (3 of 37).",
      "Hand-counted, 12 of 20 ECP replies were positive (60%).",
    ],
    note: true,
    didntMove: ["Small samples. 37 contacts in the incubator test, so I treat 8.1% as a lead to follow, not a rule."],
    shots: [
      shot("ab-ecp-india-replies.png", "Chart of ECP India Runway Ending reply rates, version A at 3.9% and version B at 1.0%.", "ECP India Runway Ending. First-email reply rate: version A 3.9%, version B 1.0%."),
      shot("ab-us-uk-new-gc-linkedin.png", "Chart of US UK New GC LinkedIn acceptance, version B at 22.0% and version A at 9.5%.", "US UK New GC. LinkedIn acceptance: version B 22.0%, version A 9.5%."),
      shot("linkedin-acceptance-778.png", "Chart of 778 LinkedIn requests and 209 acceptances, a 26.9% acceptance rate.", "LinkedIn overall: 209 of 778 requests accepted, 26.9%."),
      shot("salesforge-ecp-india-runway-ending.png", "ECP India Runway Ending in Salesforge, 5 Oct to 20 Nov 2026. 205 contacted, 5 replies (2.4%). 661 emails, 75.1% unique open, 1 bounce. Positive rate 0 and meetings booked 0.", "ECP India Runway Ending, 5 Oct to 20 Nov: 205 contacted, 5 replies (2.4%). 661 emails, 75.1% open. Positive 0, meetings 0 in the tool.", true),
      shot("salesforge-us-uk-new-gc-linkedin.png", "US UK New GC LinkedIn in Salesforge, 7 Sep to 20 Nov 2026. 83 contacted, 2 replies (2.4%). 83 connections sent and 0 messages sent in the tool. Positive 0, meetings 0.", "US UK New GC LinkedIn, 7 Sep to 20 Nov: 83 connections, 2 replies (2.4%). Positive 0, meetings 0 in the tool.", true),
      shot("salesforge-incubators-india.png", "Incubators India in Salesforge, 19 Oct to 20 Nov 2026. 37 contacted, 3 replies (8.1%). 37 emails, 17 opened (45.9%), 2 bounced. Positive 0, meetings 0.", "Incubators India, 19 Oct to 20 Nov: 37 contacted, 3 replies (8.1%). 45.9% open. Positive 0, meetings 0.", true),
      shot("salesforge-linkedin-previous-fgc-ecp-craas.png", "LinkedIn Previous FGC ECP CRaaS in Salesforge, 14 Oct to 20 Nov 2026. 624 connections sent, 11 replies (1.8%). 699 in the list, 624 contacted. Positive 0, meetings 0.", "LinkedIn Previous FGC ECP CRaaS, 14 Oct to 20 Nov: 624 connections, 11 replies (1.8%). Positive 0, meetings 0.", true),
    ],
    close: "Keep the winner, drop the loser, and say how small the sample was.",
    category: "Outbound",
  },
  {
    slug: "retargeting-a-failed-offer",
    title: "An offer that failed, and what I changed",
    summary: "ECP got opens and no replies. The list was the problem, not the copy.",
    line: "644 emails and no replies, read honestly, then a new list and shorter emails.",
    tags: ["Diagnosis", "Lists"],
    cover: "retarget-seed-funded.png",
    metrics: [
      { value: "644", label: "Instantly emails, 0 replies" },
      { value: "22 Apr", label: "post-mortem" },
      { value: "60%", label: "of later ECP replies positive", highlight: true },
      { value: "5", label: "replies from 205 on the Salesforge rerun" },
    ],
    context: "April 2026, early in the outbound year. ECP is a legal retainer for early-stage startups.",
    problem: "Two subject-line tests on the same 43 people got 0 replies (86 emails at 8.1% open, then 128 at 3.1%).",
    steps: [
      "Called it in the 22 Apr stand-up: the leads were wrong, not the subject lines.",
      "Moved the offer to seed-funded companies (ECP Manual Campaign, 430 emails, 32.8% open).",
      "It still got 0 replies and ended on 11 May.",
      "Relaunched in October on Salesforge with short, trigger-based emails about runway.",
    ],
    results: [
      "The October sequence, ECP India Runway Ending, sent 661 emails to 205 people, 75.1% open, 5 replies (2.4%).",
      "Hand-counted, 60% of ECP replies were positive (12 of 20).",
    ],
    didntMove: [
      "The April retarget itself still got 0 replies. Replies came only after the October rewrite, so I can't credit the list change alone.",
    ],
    shots: [
      shot(
        "retarget-seed-funded.png",
        "Chart of the ECP offer. Failed subject lines in April: 86 and 128 emails, 0 replies. Seeded retarget, 22 Apr to 11 May: 430 emails, 0 replies. Later Salesforge Runway Ending, 5 Oct to 20 Nov: 661 emails and 5 replies (2.4% of 205).",
        "ECP offer. April subject-line tests and the seeded retarget recorded 0 replies in Instantly. Runway Ending, a later sequence, shows 5 replies (2.4% of 205)."
      ),
    ],
    close: "Stop, say why, change one thing, measure again.",
    category: "Outbound",
  },
  {
    slug: "internal-tools",
    title: "A daily account brief instead of manual research",
    summary: "Tools I built with AI coding agents to cut research time and find accounts.",
    line: "A GTM intelligence dashboard, funding alerts and lead tools, built with AI.",
    tags: ["Automation", "Built with AI"],
    coverLabel: "Daily brief",
    metrics: [
      { value: "1", label: "brief a day" },
      { value: "Alerts", label: "funding alerts into account selection" },
      { value: "Zoho", label: "landing-page leads straight into Zoho" },
    ],
    context: "Choosing who to contact depended on reading legal-tech and funding news by hand.",
    problem: "The research was manual.",
    steps: [
      "GTM intelligence dashboard: a scheduled task researches legal-tech and funding news each morning and publishes a brief to an internal site (announced 1 Oct 2026).",
      "Funding-alert automation that flags recently funded companies for account selection (5 Aug 2026).",
      "Founders Room landing page whose form writes leads into Zoho CRM (12 to 13 Nov 2026).",
      "ChatbotIDer: finds which chatbot and support tools a website runs and exports a CSV lead list (Python, Playwright).",
      "Competitor User Finder: finds companies using a competitor's product and exports a lead list (Python, Playwright).",
      "Crypto futures research simulator: LSTM, CNN and tree models vote through a weighted ensemble on Binance Futures data, with walk-forward tests, fee and slippage modelling and hard risk limits. Paper trading only (React, TensorFlow.js).",
    ],
    results: [
      "The team gets a fresh brief every day without manual research. The tools are private builds with no public demo.",
    ],
    didntMove: [],
    shots: [],
    close: "When a tool doesn't exist, I build it with AI and learn how it works.",
    category: "Builds",
  },
  {
    slug: "events-and-partnerships",
    title: "Event follow-ups that became meetings",
    summary: "How startup events in Bengaluru became booked meetings and CRM records.",
    line: "Follow-ups, minutes and CRM capture across Bengaluru startup events.",
    tags: ["Events", "Partnerships", "CRM"],
    coverLabel: "13 accounts",
    metrics: [
      { value: "13", label: "accounts met at events and followed up (Aug to Nov)" },
      { value: "8", label: "meetings held" },
      { value: "5", label: "meetings booked at Bengaluru Tech Summit 2026", highlight: true },
    ],
    context:
      "Team Counsel meets founders at ecosystem events: eChai, CEDAT, an India-Germany startup bridge event and Bengaluru Tech Summit.",
    problem: "Meetings at events were not turning into a list anyone could follow.",
    steps: [
      "Wrote meeting minutes for each event and turned them into follow-up lists.",
      "Booked follow-up calls and logged every event lead into Zoho CRM (rule set on 17 Nov).",
      "Planned Bengaluru Tech Summit meetings and stall coverage for partnerships.",
      "Wrote go/no-go briefs on two legal-tech partnership offers.",
    ],
    results: [
      "13 event-sourced accounts followed up before Bengaluru Tech Summit, with 8 meetings held.",
      "5 confirmed meetings at Bengaluru Tech Summit (18 to 19 Nov).",
    ],
    didntMove: ["Some event follow-ups were no-shows."],
    shots: [],
    close: "The SDR sourced part of the event pipeline. The follow-up and the CRM rule were shared work.",
    category: "Events",
  },
  {
    slug: "coindcx-partner-vertical",
    title: "A partner channel at $30M+ monthly volume",
    summary: "I built and ran CoinDCX's Business Partner vertical and the campaigns around it.",
    line: "Business Partner vertical, sub-broker campaigns and earn products at CoinDCX.",
    tags: ["Partnerships", "Lifecycle", "Crypto"],
    coverLabel: "$30M+",
    metrics: [
      { value: "$30M+", label: "monthly partner trading volume", highlight: true },
      { value: "$8M+", label: "AUC in Advanced Earn" },
      { value: "$2M+", label: "monthly fresh AUC for Prime" },
      { value: "2×", label: "Whale of the Quarter" },
    ],
    context: "CoinDCX, Business & Strategic Alliances, Feb 2024 to Jun 2025, intern then Analyst.",
    problem: "CoinDCX had no structured channel for business partners and sub-brokers.",
    steps: [
      "Built the Business Partner vertical and ran its first partner webinar.",
      "Led sub-broker acquisition campaigns: 100+ inbound leads.",
      "Found ICP prospects in Databricks and ran MoEngage lifecycle campaigns.",
      "Set up MIS reporting for sales performance and pipeline.",
      "Ran the Oct to Dec festive Advanced Earn campaigns (about $1M deployed).",
    ],
    results: [
      "$30M+ monthly partner trading volume, $8M+ AUC in Advanced Earn, and $2M+ monthly fresh AUC for Prime.",
      "$150,000+ AUC onboarded through the Prime funnel as an intern.",
    ],
    didntMove: [],
    shots: [],
    close: "Figures from my own records at CoinDCX.",
    category: "RevOps",
  },
];

export const caseBySlug = (slug: string) => cases.find((item) => item.slug === slug);

export const nextCase = (slug: string) => {
  const index = cases.findIndex((item) => item.slug === slug);
  return index >= 0 && index < cases.length - 1 ? cases[index + 1] : undefined;
};

export const heroShots = [
  "salesforge-all-time-email-funnel.png",
  "outbound-volume.png",
  "ab-ecp-india-replies.png",
].map((file) => {
  const found = cases.flatMap((item) => item.shots).find((item) => item.file === file);
  if (!found) throw new Error(file);
  return found;
});
