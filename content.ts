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
  paragraphs: string[];
};

export const roles: Role[] = [
  {
    company: "Team Counsel",
    title: "GTM Strategy Lead",
    period: "Feb 2026 to now",
    place: "Bengaluru",
    paragraphs: [
      "It's a nine-person legal practice for startups and scale-ups, and I was the first GTM hire. I report to the founder. I set up sending domains, 13 mailboxes on 4 domains, Instantly, Apollo, Salesforge, LinkedIn capped at 30 requests a day, and Zoho CRM so event leads and landing-page leads come straight in. I've run 9,874 cold emails since February 2026. Between August and November I counted 53 replies, 22 positive, 6 meetings booked from cold outbound (4 held) and 1 paying client. Those Team Counsel numbers are hand-counted from the inbox and read from Salesforge and Instantly.",
      "On Salesforge I ran 24 sequences and 3,623 emails, at a 69.3% open rate and a 0.6% bounce, plus 778 LinkedIn requests with 209 accepted (26.9%). Instantly, January to June, was 7,623 emails across 26 campaigns, and 1,372 of those went out before 16 Feb.",
      "I tested live sequences. First-email variant A replied at 3.9% and B at 1.0%. One LinkedIn variant was accepted at 22.0% and the other at 9.5%. Incubators replied at 8.1%, which was the best segment I had.",
      "I also put together a daily GTM intelligence dashboard, a funding-alert automation and a landing page that writes leads into Zoho, using AI coding tools. I onboarded an SDR and gave her the tools, the ICP filters, messaging notes and a daily list. I moved the team onto Google Workspace and a shared Drive, set up Zoho Vault for shared logins, and checked domains and reputation.",
    ],
  },
  {
    company: "CoinDCX",
    title: "Analyst, Wealth Management (Business & Strategic Alliances)",
    period: "Aug 2024 to Jun 2025",
    paragraphs: [
      "I built and ran the Business Partner vertical. It reached $30M+ in monthly trading volume across partners, and I ran the first partner webinar. The sub-broker campaigns brought 100+ inbound leads. The CoinDCX figures are from my own records.",
      "Advanced Earn got to $8M+ AUC, with about $1M deployed in the Oct to Dec festive campaigns. Prime took $2M+ in monthly fresh AUC through activation and lifecycle campaigns. I won \"Whale of the Quarter\" twice in a row and the monthly \"Super Satoshi\" award.",
    ],
  },
  {
    company: "CoinDCX",
    title: "Business & Strategic Alliances Intern",
    period: "Feb 2024 to Jul 2024",
    paragraphs: [
      "I built the Prime sales funnel and onboarded $150,000+ AUC. I found ICP prospects in Databricks, ran targeted MoEngage campaigns, and set up the MIS reporting for sales performance and pipeline.",
    ],
  },
  {
    company: "Pickcel",
    title: "Business Development (Sales) Intern",
    period: "Jul 2023 to Dec 2023",
    place: "Bengaluru",
    paragraphs: [
      "I ran 50+ demos, qualified 30+ leads, closed 15+ deals and built a $100,000+ pipeline. I onboarded Vestel as a channel partner, built outbound through Apollo and LinkedIn, and kept the CRM clean.",
    ],
  },
];

export const howIWork = [
  "Every week I read the stand-up notes next to the campaign data. In April that showed the ECP offer failing because of the leads, so I changed the list and left the subject lines alone.",
  "I set up separate sending domains and 13 mailboxes, 30 emails a day each, and I capped LinkedIn at 30 requests a day before I pushed any volume. Bounce stayed at 0.6%.",
  "I tested on live sequences. One first email replied at 3.9% and the other at 1.0%, so I kept A and dropped B.",
  "Salesforge showed 0 meetings because they were booked outside it. I counted the meetings from the inbox instead.",
  "I rolled Zoho CRM out to the team, made sure every event lead went straight in, and trained the SDR to run the daily list.",
];

export const whatBroke = [
  "On Instantly, the ECP offer was 644 emails across three versions and 0 replies. I stopped rewriting subject lines and changed the list.",
  "A WhatsApp-community campaign opened at 34% and got 0 replies. I didn't run it again.",
  "After March, 3,183 Instantly emails brought 6 replies. I moved outbound to Salesforge in August and rewrote the sequences as short emails tied to a trigger, asking for a one-word reply.",
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
  story: string[];
  note?: boolean;
  shots: Shot[];
  category: "Outbound" | "RevOps" | "Events" | "Builds";
};

export const cases: CaseStudy[] = [
  {
    slug: "outbound-engine",
    title: "Outbound at Team Counsel",
    summary: "They had no CRM, no sending domains and no sequencer. I set those up and ran them.",
    line: "No CRM, no sending domains and no sequencer when I joined. I set those up and ran them.",
    story: [
      "Team Counsel is a nine-person legal practice in Bengaluru. They work with startups and scale-ups on retainers, fractional general counsel and contracts, in India, the US and the UK. I joined in February 2026 as the first GTM hire, and I report to the founder.",
      "There was no CRM, no sending domains and no sequencing tool. I checked domains and set up 13 mailboxes across 4 of them, with a daily cap of 30 each. I ran Instantly until mid-June, then moved email and LinkedIn into Salesforge in August. Apollo fed the lists. LinkedIn automation went on from 14 October, still capped at 30 requests a day. In late October I rolled Zoho CRM out to the team, and event leads and landing-page leads go straight in. I gave the SDR daily priorities, and I counted the replies and meetings from the inbox myself.",
      "Between 11 Aug and 20 Nov 2026 that was 53 replies (13 email, at least 40 on LinkedIn), 22 positive, 6 meetings booked from cold outbound with 4 held, and 1 paying client. In Salesforge, 1,658 of 2,099 contacts were reached, on 3,623 emails, with a 69.3% open rate and a 0.6% bounce. LinkedIn was 778 requests and 209 accepted, 26.9%. Instantly, January to June, was 7,623 emails across 26 campaigns, and 1,372 of those went out before 16 Feb.",
      "Email replies stayed low, 1.5% on Salesforge email, and most of the replies came from LinkedIn. The founder led the sales calls, so the client is a shared win.",
    ],
    tags: ["Outbound", "RevOps", "India, US, UK"],
    cover: "salesforge-all-time-email-funnel.png",
    meta: "Team Counsel, Feb to Nov 2026. First GTM hire, reporting to the founder.",
    note: true,
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
    category: "Outbound",
  },
  {
    slug: "multichannel-tests",
    title: "Which email and LinkedIn note got replies",
    summary: "I tested live sequences on email and LinkedIn, and incubators came out ahead.",
    line: "I tested live email and LinkedIn sequences. Incubators came out ahead.",
    story: [
      "The sequences were already going out on email and LinkedIn. Each week I read the stand-up notes next to the campaign data and tested on the live sequences, not on drafts.",
      "Early campaigns were getting opens and not many replies. I rewrote them into short emails tied to a trigger, along the lines of a company having closed its last round about N months ago, and I asked for a yes. I split the first email on ECP India Runway Ending, and I split the LinkedIn connection note on US UK New GC. Then I compared segments and put more of the effort on incubators.",
      "On ECP India Runway Ending, variant A replied at 3.9% and B at 1.0%. On US UK New GC, LinkedIn variant B was accepted at 22.0% and A at 9.5%. Across LinkedIn, 209 of 778 requests were accepted, 26.9%. Incubators India replied at 8.1%, which was 3 of 37. Hand-counted, 12 of 20 ECP replies were positive, 60%.",
      "The incubator test is only 37 contacts, so I treat 8.1% as something to follow up, not a rule.",
    ],
    tags: ["Testing", "Email", "LinkedIn"],
    cover: "ab-ecp-india-replies.png",
    note: true,
    shots: [
      shot("ab-ecp-india-replies.png", "Chart of ECP India Runway Ending reply rates, version A at 3.9% and version B at 1.0%.", "ECP India Runway Ending. First-email reply rate: version A 3.9%, version B 1.0%."),
      shot("ab-us-uk-new-gc-linkedin.png", "Chart of US UK New GC LinkedIn acceptance, version B at 22.0% and version A at 9.5%.", "US UK New GC. LinkedIn acceptance: version B 22.0%, version A 9.5%."),
      shot("linkedin-acceptance-778.png", "Chart of 778 LinkedIn requests and 209 acceptances, a 26.9% acceptance rate.", "LinkedIn overall: 209 of 778 requests accepted, 26.9%."),
      shot("salesforge-ecp-india-runway-ending.png", "ECP India Runway Ending in Salesforge, 5 Oct to 20 Nov 2026. 205 contacted, 5 replies (2.4%). 661 emails, 75.1% unique open, 1 bounce. Positive rate 0 and meetings booked 0.", "ECP India Runway Ending, 5 Oct to 20 Nov: 205 contacted, 5 replies (2.4%). 661 emails, 75.1% open. Positive 0, meetings 0 in the tool.", true),
      shot("salesforge-us-uk-new-gc-linkedin.png", "US UK New GC LinkedIn in Salesforge, 7 Sep to 20 Nov 2026. 83 contacted, 2 replies (2.4%). 83 connections sent and 0 messages sent in the tool. Positive 0, meetings 0.", "US UK New GC LinkedIn, 7 Sep to 20 Nov: 83 connections, 2 replies (2.4%). Positive 0, meetings 0 in the tool.", true),
      shot("salesforge-incubators-india.png", "Incubators India in Salesforge, 19 Oct to 20 Nov 2026. 37 contacted, 3 replies (8.1%). 37 emails, 17 opened (45.9%), 2 bounced. Positive 0, meetings 0.", "Incubators India, 19 Oct to 20 Nov: 37 contacted, 3 replies (8.1%). 45.9% open. Positive 0, meetings 0.", true),
      shot("salesforge-linkedin-previous-fgc-ecp-craas.png", "LinkedIn Previous FGC ECP CRaaS in Salesforge, 14 Oct to 20 Nov 2026. 624 connections sent, 11 replies (1.8%). 699 in the list, 624 contacted. Positive 0, meetings 0.", "LinkedIn Previous FGC ECP CRaaS, 14 Oct to 20 Nov: 624 connections, 11 replies (1.8%). Positive 0, meetings 0.", true),
    ],
    category: "Outbound",
  },
  {
    slug: "retargeting-a-failed-offer",
    title: "The ECP offer that got no replies",
    summary: "ECP was getting opens and no replies. The list was the problem, not the copy.",
    line: "644 emails and no replies. I changed the list, then the emails.",
    story: [
      "This was April 2026, early in the outbound year. ECP is a legal retainer for early-stage startups.",
      "Two subject-line tests on the same 43 people got 0 replies. The first was 86 emails at an 8.1% open rate, then 128 emails at 3.1%. I said so in the 22 Apr stand-up: the leads were wrong, not the subject lines. I moved the offer to seed-funded companies, the ECP Manual Campaign, 430 emails at a 32.8% open rate. It still got 0 replies and ended on 11 May. In October I ran it again on Salesforge, with short emails tied to runway.",
      "That October sequence, ECP India Runway Ending, sent 661 emails to 205 people, at a 75.1% open rate and 5 replies (2.4%). Hand-counted, 60% of ECP replies were positive, 12 of 20.",
      "The April retarget itself still got 0 replies. Replies only showed up after the October rewrite, so I can't put the result down to the list change on its own.",
    ],
    tags: ["Diagnosis", "Lists"],
    cover: "retarget-seed-funded.png",
    shots: [
      shot(
        "retarget-seed-funded.png",
        "Chart of the ECP offer. Failed subject lines in April: 86 and 128 emails, 0 replies. Seeded retarget, 22 Apr to 11 May: 430 emails, 0 replies. Later Salesforge Runway Ending, 5 Oct to 20 Nov: 661 emails and 5 replies (2.4% of 205).",
        "ECP offer. April subject-line tests and the seeded retarget recorded 0 replies in Instantly. Runway Ending, a later sequence, shows 5 replies (2.4% of 205)."
      ),
    ],
    category: "Outbound",
  },
  {
    slug: "internal-tools",
    title: "The daily research brief",
    summary: "I built a few internal tools with AI coding agents so the team didn't have to research accounts by hand.",
    line: "A daily brief, funding alerts and lead tools. I built them with AI coding agents.",
    story: [
      "Picking who to contact meant reading legal-tech and funding news by hand. I built a GTM intelligence dashboard that researches that news each morning and publishes a brief on an internal site. I announced it on 1 Oct 2026. The team gets a fresh brief every day, and there's no public demo because it's an internal tool.",
      "On 5 Aug 2026 I added a funding-alert automation that flags recently funded companies when we're choosing accounts. The Founders Room landing page, built 12 to 13 Nov 2026, writes form leads into Zoho CRM.",
      "ChatbotIDer checks which chatbot and support tools a website runs and exports a CSV lead list. Competitor User Finder finds companies using a competitor's product and exports a lead list. Both are Python and Playwright. I also built a crypto futures research simulator. LSTM, CNN and tree models vote through a weighted ensemble on Binance Futures data, with walk-forward tests, fee and slippage modelling, and hard risk limits. It's paper trading only, in React and TensorFlow.js.",
    ],
    tags: ["Automation", "Built with AI"],
    coverLabel: "Daily brief",
    shots: [],
    category: "Builds",
  },
  {
    slug: "events-and-partnerships",
    title: "Following up after events in Bengaluru",
    summary: "Meetings at startup events weren't turning into a list anyone could follow. I wrote them up and put them in the CRM.",
    line: "I wrote up the meetings and put the follow-ups in Zoho.",
    story: [
      "Team Counsel meets founders at ecosystem events: eChai, CEDAT, an India-Germany startup bridge event, and Bengaluru Tech Summit. The meetings weren't turning into a list anyone could follow.",
      "I wrote minutes for each event and turned them into follow-up lists, booked the follow-up calls, and logged every event lead in Zoho CRM. That rule went in on 17 Nov. I also planned the Bengaluru Tech Summit meetings and stall coverage for partnerships, and I wrote go and no-go briefs on two legal-tech partnership offers.",
      "Before Bengaluru Tech Summit I had followed up 13 event-sourced accounts, and 8 of those meetings were held. At the summit, 18 to 19 Nov, we had 5 confirmed meetings. Some of the follow-ups were no-shows. The SDR sourced part of the event pipeline. The follow-up and the CRM rule were shared work.",
    ],
    tags: ["Events", "Partnerships", "CRM"],
    coverLabel: "13 accounts",
    shots: [],
    category: "Events",
  },
  {
    slug: "coindcx-partner-vertical",
    title: "The Business Partner channel at CoinDCX",
    summary: "I built and ran the Business Partner vertical, and the campaigns around it.",
    line: "The Business Partner vertical, sub-broker campaigns and the earn products.",
    story: [
      "I was at CoinDCX in Business and Strategic Alliances, Feb 2024 to Jun 2025, first as an intern and then as an Analyst. There wasn't a structured channel for business partners and sub-brokers.",
      "I built the Business Partner vertical and ran its first partner webinar. The sub-broker campaigns brought 100+ inbound leads. I found ICP prospects in Databricks, ran MoEngage lifecycle campaigns, and set up the MIS reporting for sales performance and pipeline. For the Oct to Dec festive Advanced Earn campaigns, about $1M was deployed.",
      "The partner channel reached $30M+ in monthly trading volume. Advanced Earn got to $8M+ AUC, and Prime took $2M+ in monthly fresh AUC. As an intern I onboarded $150,000+ AUC through the Prime funnel. These figures are from my own records at CoinDCX.",
    ],
    tags: ["Partnerships", "Lifecycle", "Crypto"],
    coverLabel: "$30M+",
    shots: [],
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
