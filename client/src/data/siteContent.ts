/*  src/data/siteContent.ts
    Central place for every line of on-site copy. Extend or tweak here. */

export const siteContent = {
  /* ─────────────────────────── Home ─────────────────────────── */
  home: {
    hero: {
      title: "Welcome to Aionion Insurance Marketing Pvt. Ltd.",
      tagline: "Advice + Access + Assurance = Aionion",
      paragraph:
        "At Aionion Insurance Marketing Pvt. Ltd. we make insurance simple, accessible and effective. " +
        "As an IRDAI-registered Insurance Marketing Firm, we partner with leading insurers to offer " +
        "Term, Health, General and SME insurance solutions tailored to your unique needs.",
      cta: "Explore Our Products",
    },

    services: {
      heading: "Explore Our Services",
      list: [
        "Term Insurance Plans",
        "Health Insurance",
        "General Insurance (Motor, Travel, Property)",
        "SME & Corporate Insurance",
      ],
    },

    why: {
      heading: "Why Aionion?",
      bullets: [
        "Multi-Insurer Platform",
        "Personalised Advice",
        "Transparent Process",
        "Prompt Claim Assistance",
        "End-to-End Policy Management",
      ],
    },
  },

  /* ───────────────────────── Products ───────────────────────── */
  products: {
    pageTitle: "Our Insurance Solutions",
    intro:
      "We bring you a wide range of insurance products from top insurers under one roof.",
    categories: [
      {
        name: "Term Insurance",
        description: "Pure protection plans that secure your family's future.",
        plans: ["Pure Term Insurance"],
      },
      {
        name: "Health Insurance",
        description:
          "Comprehensive medical coverages for individuals, families and senior citizens.",
        plans: [
          "Individual & Family Floater Policies",
          "Critical Illness Cover",
          "Top-Up & Super Top-Up Plans",
          "Senior Citizen Health Insurance",
        ],
      },
      {
        name: "General Insurance",
        description: "Protect your assets and journeys.",
        plans: ["Motor Insurance (Car & Two-Wheeler)", "Travel Insurance"],
      },
      {
        name: "SME & Corporate Insurance",
        description: "Tailored risk solutions for businesses of every size.",
        plans: [
          "Group Mediclaim",
          "Group Term Life",
          "Home Insurance",
          "Fire & Marine Insurance",
          "Workmen Compensation",
          "Cyber Insurance",
          "Professional Indemnity Insurance",
          "Contractors All-Risk Policy",
          "Erection All-Risk Policy",
          "Marine Insurance",
        ],
      },
    ],
  },

  /* ───────────────────────── Renewals ───────────────────────── */
  renewals: {
    pageTitle: "Easy Renewals with Aionion",
    intro:
      "Never miss a renewal with our automated reminders and seamless assistance.",
    steps: [
      { step: "1", text: "Enter Policy Details" },
      { step: "2", text: "Review Premium & Benefits" },
      { step: "3", text: "Pay Online Securely" },
    ],
    note:
      "Whether your policy is with us or another provider, we make renewals hassle-free and timely.",
  },

  /* ─────────────────────────  Claims  ───────────────────────── */
  claims: {
    pageTitle: "Claim Support You Can Rely On",
    intro: "Filing an insurance claim can be stressful. We make it easy.",
    services: [
      "Documentation Support",
      "Insurer Coordination",
      "Claim Filing Guidance",
      "Real-Time Status Updates",
      "Dispute Resolution",
    ],
    closing: "We stay with you until your claim is settled.",
  },

  /* ─────────────────────── Knowledge Centre ─────────────────── */
  knowledge: {
    pageTitle: "Learn and Stay Informed",
    categories: [
      "Insurance Basics",
      "Product Comparison Guides",
      "Tax Benefits of Insurance",
      "IRDAI Updates & Guidelines",
      "Frequently Asked Questions (FAQs)",
    ],
  },

  /* ───────────────────────── Contact ────────────────────────── */
  contact: {
    pageTitle: "We're Here to Help",
    addressLines: [
      "Aionion Insurance Marketing Pvt. Ltd.",
      "No 5/2 Hanumantha Road, Royapettah",
    ],
    email: "imf@aioniongroup.com",
    businessHours: "Monday – Saturday · 9:00 AM – 6:00 PM",
  },
} as const;
