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

export type Study = {
  slug: string;
  title: string;
  summary: string;
  result: string;
  context: string;
  problem: string;
  did: string[];
  results: string[];
  proof: Proof[];
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
    result: "7,681 emails in 2026",
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
      "15 Instantly campaigns from March to June, and 24 Salesforge sequences from August to November.",
      "7,681 emails across those 39 campaigns and sequences.",
      "In Salesforge, 1,658 of 2,099 contacts were reached, at a 69.3% open rate and a 0.6% bounce.",
    ],
    proof: [
      proof(
        "outbound-domains-mailboxes.png",
        "Redacted view of the four sending domains and 13 mailboxes.",
        "Four sending domains and 13 mailboxes."
      ),
      proof(
        "outbound-instantly-salesforge.png",
        "Redacted view of Instantly campaigns and Salesforge sequences.",
        "Instantly from March, then Salesforge from August."
      ),
      proof(
        "outbound-zoho-routing.png",
        "Redacted view of Zoho CRM receiving event and landing-page leads.",
        "Zoho CRM after the late-October rollout. Event leads and landing-page leads come straight in."
      ),
      proof(
        "outbound-volume.png",
        "Chart of 7,681 emails across 39 campaigns and sequences in 2026.",
        "7,681 emails in 2026, across 15 Instantly campaigns and 24 Salesforge sequences."
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
    ],
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
      "The offer was moved to seed-funded companies. The reply and acceptance tests from the same year are in the multichannel case.",
    ],
    proof: [
      proof(
        "retarget-seed-funded.png",
        "Redacted view of the offer after it was moved to seed-funded companies.",
        "The offer after the move to seed-funded companies."
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
    proof: [
      proof(
        "tools-gtm-dashboard.png",
        "Redacted view of the daily GTM intelligence dashboard.",
        "The daily GTM brief. It stays on an internal site."
      ),
      proof(
        "tools-funding-alerts.png",
        "Redacted view of the funding-alert automation used for account selection.",
        "Funding alerts that feed account selection."
      ),
      proof(
        "tools-chatbotider.png",
        "Redacted view of ChatbotIDer, the desktop audit for chatbot and support tools.",
        "ChatbotIDer. Built with AI coding tools; Python, Playwright."
      ),
      proof(
        "tools-competitor-finder.png",
        "Redacted view of Competitor User Finder and a deduped lead export.",
        "Competitor User Finder. Built with AI coding tools; Python, Playwright."
      ),
      proof(
        "tools-simulator.png",
        "Redacted view of the paper-trading research simulator. No live orders.",
        "Paper-trading research simulator. Built with AI coding tools; React, TensorFlow.js. A test blocks any order placement."
      ),
      proof(
        "tools-linkedin-outreach.png",
        "Redacted view of the local LinkedIn outreach tool tracking lead status.",
        "Local LinkedIn outreach tool. Built with AI coding tools; Node.js, Puppeteer."
      ),
    ],
  },
];

export const studyBySlug = (slug: string) => studies.find((study) => study.slug === slug);
