export const whitepaperPages = {
  COVER: {
    title: "openTILL SMPF | Institutional Whitepaper v1.0",
    meta: "Confidential — For Strategic & Institutional Review | Powered by $DUC",
    body: [
      "openTILL | Structured Merchant Participation Framework (SMPF)",
      "Powered by $DUC (Digital Utility Credit)",
      "Institutional Whitepaper v1.0",
    ],
  },
  EXECUTIVE_SUMMARY: {
    title: "Executive Summary",
    meta: "openTILL | Structured Merchant Participation Framework",
    body: [
      "openTILL is a merchant-aligned financial infrastructure platform engineered to modernize payment processing and unify commerce operations through transparent economics and programmable participation.",
      "The Structured Merchant Participation Framework introduces a Digital Utility Credit (DUC) that rewards measurable contribution while preserving positive treasury flow.",
    ],
  },
  MARKET_CONTEXT: {
    title: "Market Context",
    meta: "Problem landscape for modern merchants",
    body: [
      "Modern merchants face escalating processing fees, opaque pricing structures, and fragmented software ecosystems.",
      "openTILL replaces extraction-based models with alignment-based infrastructure.",
    ],
  },
  PLATFORM_ARCHITECTURE: {
    title: "Platform Architecture",
    meta: "Cloud-native commerce stack",
    body: [
      "openTILL integrates processing infrastructure, unified dashboards, inventory intelligence, QR ordering modules, API extensibility, and multi-location management into a cloud-native framework.",
    ],
  },
  FEATURE_GATED_PERMISSION_MODEL: {
    title: "Feature-Gated Permission Model",
    meta: "NFT-gated credentials",
    body: [
      "openTILL utilizes NFT-gated feature credentials to unlock defined system capabilities.",
      "These digital credentials provide structured access rights and are not equity instruments.",
    ],
  },
  DIGITAL_UTILITY_CREDIT: {
    title: "Digital Utility Credit (DUC)",
    meta: "Utility instrument, not equity",
    body: [
      "The DUC provides feature unlock tiers, fee optimization levels, governance input weighting, and ecosystem participation privileges.",
      "It does not convey ownership, dividends, or profit rights.",
    ],
  },
  TOKENOMICS_ALLOCATION: {
    title: "Tokenomics Allocation",
    meta: "Allocation overview (visual in PDF page 5)",
    body: [
      "The tokenomics allocation is presented in the institutional whitepaper as a chart (see PDF page 5).",
      "Use DOWNLOAD MANIFESTO to open the full PDF with the visuals.",
    ],
  },
  EMISSION_MODEL_VISUALIZATION: {
    title: "Emission Model Visualization",
    meta: "Illustrative surplus vs processing volume (visual in PDF page 5)",
    body: [
      "The emission model visualization is shown as a chart in the institutional whitepaper (see PDF page 5).",
      "Use DOWNLOAD MANIFESTO to open the full PDF with the visuals.",
    ],
  },
  PROJECT_DETAILS_ECOSYSTEM: {
    title: "Project Details & Ecosystem",
    meta: "Strategic infrastructure + framework design",
    body: [
      "openTILL is engineered as a merchant-aligned financial infrastructure platform.",
      "Unlike traditional payment processors that operate on extraction-based models, openTILL utilizes a cloud-native framework to unify fragmented commerce operations.",
      "The project's primary goal is to modernize payment processing through transparent economics and a participation-based reward system.",
    ],
  },
  GOVERNANCE_AND_UTILITY: {
    title: "Governance and Utility (The SMPF)",
    meta: "Participation-weighted governance access",
    body: [
      "The project operates under the Structured Merchant Participation Framework (SMPF).",
      "Central to this is the Digital Utility Credit (DUC), which serves as a unit of account within the ecosystem.",
      "Access to advanced features and governance influence is managed through a Feature-Gated Permission Model (utilizing NFT-gated credentials), ensuring that ecosystem privileges are tied to active participation and verified credentials rather than equity ownership.",
    ],
  },
  SUSTAINABILITY_MODEL: {
    title: "Sustainability Model",
    meta: "Strict mathematical emission control",
    body: [
      "To ensure long-term viability, the project follows a strict mathematical emission model:",
      "Emission Cap (EC) = Net Surplus (NS) × Emission Ratio (ER).",
      "This ensures that the ecosystem only expands its credit supply when there is a verified net surplus in the treasury.",
    ],
  },
  POS_PLATFORM_FEATURES: {
    title: "POS Platform Features",
    meta: "Operating System for Commerce",
    body: ["The openTILL POS system is designed to be an all-in-one \"Operating System for Commerce,\" featuring:"],
    bullets: [
      "Unified Payment Processing: Integrated stack for credit, debit, and digital asset transactions with optimized fee structures.",
      "Inventory Intelligence: Real-time stock tracking with automated reorder triggers and sales analytics.",
      "QR-Based Ordering: Native support for tableside and remote ordering to reduce labor costs and improve customer flow.",
      "Multi-Location Management: A centralized dashboard for enterprise users to manage menus, staff, and reporting across multiple sites.",
      "Tiered Feature Unlocking: A scalable access model where merchants can unlock specialized modules based on their participation tier.",
    ],
  },
  APPENDIX_A: {
    title: "Appendix A — Mathematical Emission Model",
    meta: "Formula sheet",
    body: [
      "Infrastructure Revenue (IR) = Processed Volume (PV) × Infrastructure Allocation (IA)",
      "Net Surplus (NS) = IR − Operational Reserve (OR)",
      "Emission Cap (EC) = NS × Emission Ratio (ER), where ER ≤ 1",
      "If NS ≤ 0, then EC = 0 (no emission).",
    ],
  },
  APPENDIX_B: {
    title: "Appendix B — Legal Positioning",
    meta: "Compliance-first posture",
    body: [
      "The Digital Utility Credit is structured as a functional digital access instrument.",
      "It does not represent equity, profit participation, revenue entitlement, or dividend rights.",
      "Distribution is tied exclusively to measurable ecosystem participation.",
      "openTILL commits to independent legal review, compliance-first structuring, and avoidance of speculative marketing language.",
    ],
  },
};

export const fileSystem = {
  "C:": {
    openTILL: {
      "README.TXT":
        "openTILL SMPF | Institutional Whitepaper v1.0\n\nType HELP to explore commands.\nTip: Use PAGES to list whitepaper pages, then PAGE [NAME] to render in page-format.\n",
      "EXECUTIVE_SUMMARY.TXT": "Use: PAGE EXECUTIVE_SUMMARY",
      "MARKET_CONTEXT.TXT": "Use: PAGE MARKET_CONTEXT",
      "PLATFORM_ARCHITECTURE.TXT": "Use: PAGE PLATFORM_ARCHITECTURE",
      "FEATURE_GATED_PERMISSION_MODEL.TXT": "Use: PAGE FEATURE_GATED_PERMISSION_MODEL",
      "DIGITAL_UTILITY_CREDIT.TXT": "Use: PAGE DIGITAL_UTILITY_CREDIT",
      "TOKENOMICS_ALLOCATION.TXT": "Use: PAGE TOKENOMICS_ALLOCATION",
      "EMISSION_MODEL_VISUALIZATION.TXT": "Use: PAGE EMISSION_MODEL_VISUALIZATION",
      "PROJECT_DETAILS_ECOSYSTEM.TXT": "Use: PAGE PROJECT_DETAILS_ECOSYSTEM",
      "GOVERNANCE_AND_UTILITY.TXT": "Use: PAGE GOVERNANCE_AND_UTILITY",
      "SUSTAINABILITY_MODEL.TXT": "Use: PAGE SUSTAINABILITY_MODEL",
      "POS_PLATFORM_FEATURES.TXT": "Use: PAGE POS_PLATFORM_FEATURES",
      "APPENDIX_A.TXT": "Use: PAGE APPENDIX_A",
      "APPENDIX_B.TXT": "Use: PAGE APPENDIX_B",
      WHITEPAPER: {
        "PAGES.INDEX": "Use: PAGES\nUse: PAGE [NAME]\nExample: PAGE EXECUTIVE_SUMMARY\n",
      },
    },
  },
};