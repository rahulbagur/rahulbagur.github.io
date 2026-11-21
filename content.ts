export const resumeHref = "/Rahul_Bagur_Resume.pdf";

export const profiles = {
  email: "rahulbagur@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahulbagur",
  github: "https://github.com/rahulbagur",
};

export const gtmSkills = [
  "Outbound sequencing",
  "A/B testing",
  "ICP and list building",
  "CRM design and hygiene",
  "Funnel reporting and MIS",
  "SDR enablement",
  "Partner programmes",
];

export const toolGroups = [
  { fn: "Sequencing", tools: "Instantly, Salesforge" },
  { fn: "CRM", tools: "Zoho CRM, Zoho SalesIQ" },
  { fn: "Enrichment and outreach", tools: "Apollo.io, LinkedIn Sales Navigator" },
  { fn: "Data and campaigns", tools: "Databricks, MoEngage" },
  { fn: "Workspace", tools: "Google Workspace" },
];

export const buildingWithAi =
  "I ship working tools by directing AI coding agents (Claude, Gemini CLI), debug with them, and learn the concepts underneath; SQL for data pulls.";

export type Proof = {
  file: string;
  alt: string;
  caption: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Study = {
  slug: string;
  title: string;
  summary: string;
  result: string;
  context: string;
  problem: string;
  did: string[];
  results: string[];
  metrics?: Metric[];
  callout?: string;
  proof: Proof[];
  shots?: Proof[];
};

const proof = (file: string, alt: string, caption: string): Proof => ({
  file,
  alt,
  caption,
});

export const studies: Study[] = [
  {
    slug: "outbound-engine",
    title: "Outbound engine from zero",
    summary:
      "Sending, sequencing and a CRM for a legal practice that had none of them.",
    result: "53 replies, 22 positive, 6 meetings, 1 client",
    context:
      "Team Counsel is a nine-person legal consulting practice for startups and scale-ups in Bengaluru. I joined in February 2026 as its first GTM hire and I report to the founder. The outbound runs in India, the US and the UK.",
    problem:
      "In February 2026 there was no CRM, no dedicated sending domains and no sequencing tool.",
    did: [
      "Picked and checked sending domains, and set up 13 mailboxes across 4 domains.",
      "Ran campaigns in Instantly from March, then in Salesforge from August. Apollo sat in the same stack.",
      "Added LinkedIn automation capped at 30 requests a day. It went live on 14 October.",
      "Rolled Zoho CRM out to the team in late October. Event leads and landing-page leads flow into it.",
      "Onboarded and coached an SDR.",
    ],
    results: [
      "Hand-counted from the inbox, 11 Aug to 20 Nov 2026: 53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound (4 held), 1 paying client.",
      "15 Instantly campaigns from March to June, and 24 Salesforge sequences from August to November: 7,681 emails.",
      "In Salesforge, 1,658 of 2,099 contacts were reached, at a 69.3% open rate and a 0.6% bounce. The tool shows 0 positive and 0 meetings because those were handled outside it.",
    ],
    metrics: [
      { value: "53", label: "replies, 11 Aug to 20 Nov" },
      { value: "22", label: "positive" },
      { value: "6", label: "meetings booked" },
      { value: "1", label: "paying client" },
    ],
    callout:
      "Why Salesforge shows 0 positive and 0 meetings: replies were handled and meetings booked outside Salesforge, so nothing was tagged in the tool, and Salesforge also misses LinkedIn replies in the native inbox. Hand-counted from the inbox, 11 Aug to 20 Nov 2026: 53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound (4 held), 1 paying client.",
    proof: [
      proof(
        "outbound-domains-mailboxes.png",
        "Salesforge mailboxes: 13 in total, all active, 178 emails sent that day. Mailbox names are covered.",
        "13 mailboxes, all marked active. 178 emails sent that day."
      ),
      proof(
        "outbound-volume.png",
        "Bar chart of emails sent in 2026. Instantly by month, January to June, totals 7,623. Salesforge, August to November, is 3,623.",
        "Emails sent in 2026. Instantly, January to June, by month (7,623). Salesforge, August to November, 3,623."
      ),
      proof(
        "outbound-instantly-salesforge.png",
        "Two charts. Instantly January to June: 7,623 emails and 53 reply events. Salesforge August to November: 3,623 emails and 16 replies on the email tab.",
        "Two outbound chapters. Instantly, January to June: 7,623 emails, 53 reply events. Salesforge, August to November: 3,623 emails, 16 email replies."
      ),
    ],
    shots: [
      proof(
        "salesforge-sender-profiles.png",
        "Salesforge sender profiles: 4 profiles, 178 of 390 emails sent today. Profile names are covered.",
        "4 sender profiles. 178 of 390 emails sent that day."
      ),
      proof(
        "salesforge-sequences-list.png",
        "Salesforge list of 24 sequences. Incubators India shows an 8.1% reply rate on 37 contacts. ECP India Runway Ending shows 2.4% on 205 contacts. US UK New GC LinkedIn shows 2.4% on 83 contacts. The sender column is covered.",
        "24 sequences. Incubators India, 8.1% reply on 37 contacts. ECP India Runway Ending, 2.4% on 205. US UK New GC LinkedIn, 2.4% on 83."
      ),
      proof(
        "salesforge-all-time-email-funnel.png",
        "Salesforge all-time email analytics. 3,623 emails sent, 730 opened (69.3%), 16 replies (1.5%), 21 bounced (0.6%). Positive rate 0 and meetings booked 0. Contacted 1,658 of 2,099.",
        "All-time email: 3,623 sent, 69.3% open, 16 replies (1.5%), 21 bounced. Positive 0, meetings 0. Contacted 1,658 of 2,099."
      ),
      proof(
        "salesforge-all-time-linkedin-funnel.png",
        "Salesforge all-time LinkedIn analytics. 778 connections sent, 209 accepted (26.9%), 13 replies (1.7%), 0 messages sent after accept. Positive rate 0 and meetings booked 0.",
        "All-time LinkedIn: 778 requests, 209 accepted (26.9%), 13 replies. Positive 0, meetings 0."
      ),
      proof(
        "salesforge-analytics-6-20-nov.png",
        "Salesforge analytics for 6 to 20 November 2026. 500 contacted and 20 replies (4%). Email: 573 sent, 61.2% open, 8 replies (2.4%), 6 bounced. Positive 0, meetings 0.",
        "6 to 20 Nov 2026: 500 contacted, 20 replies (4%). Email open rate 61.2% on 573 sends. Positive 0, meetings 0."
      ),
      proof(
        "salesforge-early-craas-ny.png",
        "Early CRaaS NY in Salesforge, 11 Aug to 20 Nov 2026. 54 contacted, 1 reply (1.9%). 212 emails sent, 88.8% open, 0 bounced. Positive 0, meetings 0.",
        "Early CRaaS NY, 11 Aug to 20 Nov: 54 contacted, 1 reply (1.9%). 212 emails, 88.8% open. Positive 0, meetings 0."
      ),
    ],
  },
  {
    slug: "multichannel-tests",
    title: "Multichannel tests",
    summary: "Live A/B tests on first-email replies and LinkedIn acceptance.",
    result: "3.9% reply vs 1.0%",
    context:
      "The sequences were already sending on email and LinkedIn. I read the stand-up notes and the campaign data each week and kept the tests on live sequences.",
    problem: "Early campaigns were getting opens and few replies.",
    did: [
      "Rewrote sequences into short, trigger-based emails.",
      "Ran A/B tests on live email sequences and on LinkedIn connection requests.",
      "Compared segments. Incubators came out ahead.",
    ],
    results: [
      "ECP India Runway Ending, first email: version A replied at 3.9%. Version B replied at 1.0%.",
      "US UK New GC, LinkedIn: version B was accepted at 22.0%. Version A was accepted at 9.5%.",
      "778 LinkedIn requests, 209 accepted, 26.9%.",
      "Incubators were the best segment, at an 8.1% reply rate.",
      "Hand-counted, the ECP offer had a 60% positive rate among replies: 12 of 20. On LinkedIn, about 21% of people who received a message replied.",
    ],
    callout:
      "Salesforge shows 0 positive and 0 meetings because replies and meetings were handled outside the tool, and it misses LinkedIn replies in the native inbox. Hand-counted, 11 Aug to 20 Nov 2026: 53 replies, 22 positive, 6 meetings booked (4 held), 1 paying client.",
    proof: [
      proof(
        "ab-ecp-india-replies.png",
        "Chart of ECP India Runway Ending reply rates, version A at 3.9% and version B at 1.0%.",
        "ECP India Runway Ending. First-email reply rate: version A 3.9%, version B 1.0%."
      ),
      proof(
        "ab-us-uk-new-gc-linkedin.png",
        "Chart of US UK New GC LinkedIn acceptance, version B at 22.0% and version A at 9.5%.",
        "US UK New GC. LinkedIn acceptance: version B 22.0%, version A 9.5%."
      ),
      proof(
        "linkedin-acceptance-778.png",
        "Chart of 778 LinkedIn requests and 209 acceptances, a 26.9% acceptance rate.",
        "LinkedIn overall: 209 of 778 requests accepted, 26.9%."
      ),
    ],
    shots: [
      proof(
        "salesforge-ecp-india-runway-ending.png",
        "ECP India Runway Ending in Salesforge, 5 Oct to 20 Nov 2026. 205 contacted, 5 replies (2.4%). 661 emails, 75.1% unique open, 1 bounce. Positive rate 0 and meetings booked 0.",
        "ECP India Runway Ending, 5 Oct to 20 Nov: 205 contacted, 5 replies (2.4%). 661 emails, 75.1% open. Positive 0, meetings 0 in the tool."
      ),
      proof(
        "salesforge-us-uk-new-gc-linkedin.png",
        "US UK New GC LinkedIn in Salesforge, 7 Sep to 20 Nov 2026. 83 contacted, 2 replies (2.4%). 83 connections sent and 0 messages sent in the tool. Positive 0, meetings 0.",
        "US UK New GC LinkedIn, 7 Sep to 20 Nov: 83 connections, 2 replies (2.4%). Positive 0, meetings 0 in the tool."
      ),
      proof(
        "salesforge-incubators-india.png",
        "Incubators India in Salesforge, 19 Oct to 20 Nov 2026. 37 contacted, 3 replies (8.1%). 37 emails, 17 opened (45.9%), 2 bounced. Positive 0, meetings 0.",
        "Incubators India, 19 Oct to 20 Nov: 37 contacted, 3 replies (8.1%). 45.9% open. Positive 0, meetings 0."
      ),
      proof(
        "salesforge-linkedin-previous-fgc-ecp-craas.png",
        "LinkedIn Previous FGC ECP CRaaS in Salesforge, 14 Oct to 20 Nov 2026. 624 connections sent, 11 replies (1.8%). 699 in the list, 624 contacted. Positive 0, meetings 0.",
        "LinkedIn Previous FGC ECP CRaaS, 14 Oct to 20 Nov: 624 connections, 11 replies (1.8%). Positive 0, meetings 0."
      ),
    ],
  },
  {
    slug: "retargeting-a-failed-offer",
    title: "Retargeting a failed offer",
    summary:
      "One offer failed on lead quality. I moved it to seed-funded companies.",
    result: "Moved to seed-funded companies",
    context:
      "This was early in the same outbound year. The sequences were already going out, and I was in the weekly stand-up looking at what each campaign actually did.",
    problem:
      "One offer failed outright. The campaigns could get opens, and the replies were not there. The lead list was the part that failed.",
    did: [
      "Read stand-up and campaign data each week.",
      "When the campaign failed on lead quality, I moved it to seed-funded companies.",
      "Rewrote the sequences into short, trigger-based emails.",
    ],
    results: [
      "April Instantly subject-line tests: 0 replies, on 86 emails and then 128.",
      "Seeded retarget, 22 Apr to 11 May: 430 emails, and 0 replies recorded in Instantly.",
      "Hand-counted, the ECP offer had a 60% positive rate among replies: 12 of 20. Those replies were not tagged in the sending tool.",
      "The later Salesforge sequence, ECP India Runway Ending, is a different run: 661 emails and 5 replies (2.4% of 205 contacts).",
    ],
    proof: [
      proof(
        "retarget-seed-funded.png",
        "Chart of the ECP offer. Failed subject lines in April: 86 and 128 emails, 0 replies. Seeded retarget, 22 Apr to 11 May: 430 emails, 0 replies. Later Salesforge Runway Ending, 5 Oct to 20 Nov: 661 emails and 5 replies (2.4% of 205).",
        "ECP offer. April subject-line tests and the seeded retarget recorded 0 replies in Instantly. Runway Ending, a later sequence, shows 5 replies (2.4% of 205)."
      ),
    ],
  },
  {
    slug: "internal-tools",
    title: "Internal tools, built with AI",
    summary:
      "A daily research brief, funding alerts, and lead tools. Built with AI coding tools.",
    result: "A fresh brief every day",
    context:
      "Choosing which accounts to contact depended on manual news and funding research. A few jobs also needed a tool that was not already in the stack.",
    problem:
      "The research was manual. There was no daily brief, and no alert when a relevant company raised.",
    did: [
      "Built a daily GTM intelligence dashboard that runs scheduled web research on legal-tech and funding news and publishes it to an internal site. Also built a funding-alert automation that feeds account selection, and a landing page whose form writes leads into Zoho CRM.",
      "ChatbotIDer audits a website for chatbot and support tools (Intercom, Drift, HubSpot, Zoho SalesIQ, Zendesk and others), classifies them by industry and capability, and exports a CSV. Built with AI coding tools; Python, Playwright.",
      "Competitor User Finder finds companies running a competitor's product through search operators and public code signatures, dedupes domains and exports a lead list. Built with AI coding tools; Python, Playwright.",
      "The crypto futures research simulator runs LSTM, CNN, Random Forest and XGBoost models that vote through a validation-weighted ensemble on Binance Futures market data. Walk-forward testing, fee, slippage and funding modelling, and hard risk limits: 2x max leverage, 3% daily stop, 10% drawdown halt. Paper trading only. A test blocks any order-placement code. Built with AI coding tools; React, TensorFlow.js.",
      "A local LinkedIn tool sends connection requests and messages through the user's own browser session and tracks lead status. Built with AI coding tools; Node.js, Puppeteer.",
    ],
    results: [
      "The team gets a fresh account and news brief every day, without the manual research. The dashboard stays on an internal site.",
      "The other tools are private builds. There is no public demo.",
    ],
    proof: [],
  },
];

export const studyBySlug = (slug: string) => studies.find((study) => study.slug === slug);
