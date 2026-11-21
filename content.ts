export const resumeHref = "/Rahul_Bagur_Resume.pdf";

export const profiles = {
  email: "rahulbagur@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahulbagur",
  github: "https://github.com/rahulbagur",
};

export const metrics = [
  {
    value: "7,681",
    label: "Emails sent in 2026, across 39 campaigns and sequences",
  },
  {
    value: "69.3%",
    label: "Open rate on 3,623 Salesforge emails",
  },
  {
    value: "26.9%",
    label: "LinkedIn acceptance on 778 requests",
  },
  {
    value: "$30M+",
    label: "Monthly partner trading volume at CoinDCX",
  },
];

export const roles = [
  {
    when: "Feb 2026 to present",
    where: "Bengaluru",
    org: "Team Counsel",
    posts: [
      {
        title: "Growth & Strategy Lead (GTM)",
        note: "Legal consulting practice for startups and scale-ups. I report to the founder.",
        points: [
          "Built the outbound and CRM stack from zero: 13 mailboxes on 4 sending domains, Instantly, Apollo, Salesforge, LinkedIn automation and Zoho CRM.",
          "15 Instantly campaigns (Mar to Jun) and 24 Salesforge sequences (Aug to Nov): 7,681 emails.",
          "Salesforge: 1,658 of 2,099 contacts reached, 69.3% open rate, 26.9% LinkedIn acceptance.",
          "Onboarded and managed an SDR, and built a daily GTM intelligence dashboard.",
        ],
      },
    ],
  },
  {
    when: "Feb 2024 to Jun 2025",
    where: "",
    org: "CoinDCX",
    posts: [
      {
        title: "Analyst, Wealth Management",
        note: "Aug 2024 to Jun 2025",
        points: [
          "Built the Business Partner vertical to $30M+ monthly trading volume.",
          "Scaled Advanced Earn to $8M+ AUC, and $2M+ monthly fresh AUC for Prime.",
          "\"Whale of the Quarter\" twice in a row, and the \"Super Satoshi\" monthly award.",
        ],
      },
      {
        title: "Business & Strategic Alliances Intern",
        note: "Feb 2024 to Jul 2024",
        points: [
          "Built the Prime sales funnel and onboarded $150,000+ AUC.",
          "Found ICP prospects in Databricks and ran targeted MoEngage campaigns.",
          "Set up the MIS reporting framework for sales performance and pipeline tracking.",
        ],
      },
    ],
  },
  {
    when: "Jul 2023 to Dec 2023",
    where: "Bengaluru",
    org: "Pickcel",
    posts: [
      {
        title: "Business Development (Sales) Intern",
        note: "",
        points: [
          "50+ demos, a $100,000+ pipeline, 15+ deals closed, and Vestel onboarded as a channel partner.",
        ],
      },
    ],
  },
];

export const cases = [
  {
    title: "Outbound and CRM from zero",
    problem:
      "A nine-person legal consulting practice wanted outbound in three markets. In February 2026 it had no CRM, no dedicated sending domains and no sequencing tool.",
    did: "Picked and checked sending domains, set up 13 mailboxes across 4 domains, ran campaigns in Instantly (from March) and then Salesforge (from August), added LinkedIn automation capped at 30 requests a day (live 14 Oct), and rolled out Zoho CRM to the team in late October with event and landing-page leads flowing straight in.",
    result:
      "39 campaigns and sequences and 7,681 emails in 2026. In Salesforge alone: 1,658 of 2,099 contacts reached, a 69.3% open rate with 0.6% bounce, and 209 of 778 LinkedIn requests accepted.",
  },
  {
    title: "Testing what gets replies",
    problem:
      "Early campaigns got opens but few replies, and one offer failed outright.",
    did: "Read stand-up and campaign data each week. When a campaign failed on lead quality, I moved it to seed-funded companies. I rewrote sequences into short, trigger-based emails and ran A/B tests on live sequences.",
    result:
      "First-email variant A replied at 3.9% against 1.0% for B. A LinkedIn variant lifted acceptance from 9.5% to 22.0%. Incubators turned out to be the best segment, at an 8.1% reply rate.",
  },
  {
    title: "GTM intelligence on autopilot",
    problem:
      "Choosing which accounts to contact depended on manual news and funding research.",
    did: "Built a daily GTM intelligence dashboard that runs scheduled web research on legal-tech and funding news and publishes it to an internal site, plus a funding-alert automation that feeds account selection. Also built a landing page whose form writes leads into Zoho CRM.",
    result:
      "The team gets a fresh account and news brief every day without manual research. The dashboard stays on an internal site.",
  },
  {
    title: "Turning an SDR into a working motion",
    problem: "A new SDR joined in August with no playbook.",
    did: "Trained her on the tools and ICP filters, coached messaging, set up a meeting-notes framework and gave daily lead and call priorities. In November the founder confirmed she reports to me day to day. I'm now setting her KPIs and a growth reporting view.",
    result: "A repeatable daily SDR rhythm with clear lead and call targets.",
  },
  {
    title: "A partner channel at CoinDCX",
    problem:
      "CoinDCX had no structured channel for business partners and sub-brokers.",
    did: "Built and managed the Business Partner vertical, ran sub-broker acquisition campaigns and delivered the first Business Partner webinar.",
    result:
      "$30M+ in monthly trading volume across partners and 250+ interested sub-broker leads.",
  },
];

export const projects = [
  {
    title: "Crypto futures research and paper-trading simulator",
    stack: "built with AI coding tools; React, TensorFlow.js",
    body: "Models vote through a validation-weighted ensemble on Binance Futures market data, with walk-forward testing, fee, slippage and funding modelling, and hard risk limits (2x max leverage, 3% daily stop, 10% drawdown halt). Paper trading only. A test blocks any order-placement code.",
  },
  {
    title: "ChatbotIDer",
    stack: "built with AI coding tools; Python, Playwright",
    body: "Desktop app that audits websites for chatbot and support tools (Intercom, Drift, HubSpot, Zoho SalesIQ, Zendesk and others), classifies them by industry and capability, and exports clean CSVs.",
  },
  {
    title: "Competitor User Finder",
    stack: "built with AI coding tools; Python, Playwright",
    body: "Finds companies running a competitor's product through search operators and public code signatures, dedupes domains and exports a lead list.",
  },
  {
    title: "LinkedIn outreach automation",
    stack: "built with AI coding tools; Node.js, Puppeteer",
    body: "Local tool that sends connection requests and messages through the user's own browser session and tracks lead status.",
  },
];

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

export const technicalSkills =
  "I ship working tools by directing AI coding agents (Claude, Gemini CLI), debug with them, and learn the concepts underneath; SQL for data pulls.";
