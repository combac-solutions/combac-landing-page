import type { TemplateConfig } from "../configType";
// Load full legal documents from project root as raw markdown at build time
import privacyContent from '../../../PRIVACY_POLICY.md?raw';
import termsContent from '../../../TERMS_OF_USE.md?raw';

const en: TemplateConfig = {
  name: "Combac",
  seo: {
    title: "Combac — Loyalty Rewards for Every Business",
    description:
      "Earn points, unlock rewards, and discover loyalty programs at all your favorite local businesses — all in one app.",
  },
  backgroundGrid: false,
  logo: "./logo.svg",
  theme: "combac",
  forceTheme: false,
  showThemeSwitch: true,
  appStoreLink: "#",
  googlePlayLink: "#",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://x.com",
    },
    links: [
      { href: "./#features", title: "Features" },
      { href: "./#how-it-works", title: "How it works" },
      { href: "./#pricing", title: "Pricing" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Join Waitlist",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "./#features", title: "Features" },
      { href: "./#how-it-works", title: "How it works" },
      { href: "./#pricing", title: "Pricing" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Be the first to experience Combac",
    subtitle:
      "Join our exclusive waitlist and be the first to know when we launch. The future of loyalty is almost here.",
    screenshots: [
      "./screenshots/1.webp",
      "./screenshots/2.webp",
      "./screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Combac — The smarter way to reward loyalty",
      description:
        "Earn rewards, track points, and connect with your favorite businesses with Combac's premium loyalty platform.",
    },
    testimonials: {
      id: "testimonials",
      title: "Building the Future of Loyalty",
      subtitle: "Join a growing community of businesses and customers",
      cards: [
        {
          name: "Innovative Rewards",
          comment:
            "Combac isn't just another stamp card app. It's a data-driven connection between you and the places you love.",
        },
        {
          name: "Seamless Access",
          comment:
            "No more physical cards. One digital identity for every business you visit. Simple, clean, and always with you.",
        },
      ],
    },
    stats: {
      title: "Ecosystem Growth",
      subtitle: "Combac is rapidly expanding its network. Join the pre-launch phase and witness the birth of a smarter rewards economy.",
      items: [
        {
          value: "•••",
          label: "Active Members",
          icon: "./3D/rocket-front-color.webp",
        },
        {
          value: "•••",
          label: "Partner Businesses",
          icon: "./3D/medal-front-color.webp",
        },
        {
          value: "Thousands",
          label: "Potential Rewards",
          icon: "./3D/trophy-front-color.webp",
        },
        {
          value: "Top Rated",
          label: "Anticipated App",
          icon: "./3D/chart-front-color.webp",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "The Combac Experience",
      subtitle:
        "We are redefining how you interact with local brands. A premium experience from first scan to final reward.",
      steps: [
        {
          title: "1. Discover",
          subtitle:
            "Find top-rated businesses in your area that value your loyalty.",
          image: "./screenshots/3.webp",
        },
        {
          title: "2. Earn",
          subtitle:
            "Collect points seamlessly through our high-speed QR technology.",
          image: "./screenshots/2.webp",
        },
        {
          title: "3. Track",
          subtitle:
            "Monitor your progress with beautifully designed, data-rich dashboards.",
          image: "./screenshots/1.webp",
        },
        {
          title: "4. Redeem",
          subtitle:
            "Enjoy exclusive rewards curated specifically for your preferences.",
          image: "./screenshots/2.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Designed for Modern Loyalty",
      subtitle:
        "Combac combines premium aesthetics with futuristic technology to reward your every visit.",
      cards: [
        {
          title: "Discover Businesses",
          subtitle:
            "Explore a curated list of local favorites and hidden gems looking to reward you.",
          icon: "./3D/bookmark-fav-front-color.webp",
        },
        {
          title: "Earn Loyalty Points",
          subtitle:
            "Every visit counts. Watch your points grow as you support your favorite spots.",
          icon: "./3D/gift-front-color.webp",
        },
        {
          title: "Redeem Rewards",
          subtitle:
            "Turn your accumulated points into meaningful rewards and exclusive experiences.",
          icon: "./3D/crown-front-color.webp",
        },
        {
          title: "Track Your Progress",
          subtitle:
            "Stay informed with real-time updates on your loyalty status and goal progress.",
          icon: "./3D/chart-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "When is the launch?",
          answer:
            "We are currently in a private beta phase and preparing for a full public launch very soon. Join the waitlist to be notified and get early access.",
        },
        {
          question: "Is Combac free for customers?",
          answer:
            "Yes! Combac is completely free for customers. Download the app once we launch, create an account, and start joining loyalty programs at your favorite businesses at no cost.",
        },
        {
          question: "How do I earn points?",
          answer:
            "After joining a business's loyalty program in the app, simply scan the business's QR code (or let them scan yours) at checkout. Points are credited to your wallet instantly.",
        },
        {
          question: "How do I redeem my rewards?",
          answer:
            "When you've accumulated enough points for a reward, tap 'Redeem' in the app from that business's loyalty card. Show the confirmation screen to the business and enjoy your reward!",
        },
        {
          question: "Can I use Combac at any business?",
          answer:
            "Combac works at any business that has registered on the platform. We're growing fast — if your favorite spot isn't on Combac yet, you can invite them directly from the app.",
        },
        {
          question: "Do my points expire?",
          answer:
            "Point expiry policies are set by each individual business on the platform. The app clearly shows you any expiry dates so you never lose a reward by surprise.",
        },
        {
          question: "I'm a business owner. How do I join?",
          answer:
            "Great! Head to the 'For Businesses' section of this page and choose a plan. Setup takes less than 10 minutes and your first customers can start earning the same day.",
        },
      ],
    },
    header: {
      headline: "The smarter way to reward loyalty",
      headlineMark: [1, 2],
      subtitle:
        "Replace your stack of paper cards with a single digital identity. Combac is the unified loyalty wallet that lets you discover local favorites, earn instant points at cafes, gyms, or salons, and redeem rewards—all through one premium experience.",
      screenshots: [
        "./screenshots/1.webp",
        "./screenshots/2.webp",
        "./screenshots/3.webp",
      ],
      rewards: ["Launching Soon", "Join the Waitlist"],
      usersDescription: "••• active members",
    },
    pricing: {
      id: "pricing",
      title: "Simple & Transparent Pricing",
      subtitle: "Join hundreds of businesses growing with Combac. Start for free, grow forever.",
      actionText: "Start Your Free Trial",
      plans: [
        {
          title: "Early Bird Trial",
          price: "Free",
          rows: [
            "3 Months Full Access",
            "Unlimited loyalty members",
            "Unlimited reward programs",
            "QR code & Basic analytics",
            "Push notifications included",
          ],
        },
        {
          title: "Standard Business",
          price: "39 DT/month",
          rows: [
            "Starts after 3-month trial",
            "Custom branding & Campaigns",
            "In-app advertising tools",
            "Multi-staff access",
            "Priority support",
          ],
        },
        {
          title: "AI-Powered Pro",
          price: "89 DT/month",
          featured: true,
          rows: [
            "Everything in Standard",
            "AI-Generated Loyalty Programs",
            "Smart Customer Behavior Insights",
            "Personalized Recommendations",
            "SMS Marketing (Coming soon)",
          ],
        },
      ],
    },
    aiFeature: {
      id: "ai-feature",
      title: "The Future of Loyalty is Intelligent",
      subtitle: "Our AI enhances the loyalty platform by turning data into smart, actionable insights. It helps business owners automatically generate optimized loyalty programs, understand customer behavior, and improve engagement with personalized recommendations. The result is a more intelligent, data-driven system that boosts customer retention, increases reward usage, and simplifies decision-making with minimal effort.",
      badge: "Coming Soon",
      image: "./3D/bulb-front-color.webp",
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Combac",
      description: "Combac Privacy Policy",
    },
    content: privacyContent,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Combac",
      description: "Combac Cookies Policy",
    },
    content: `# Cookies Policy`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and Conditions - Combac",
      description: "Combac Terms and Conditions",
    },
    content: termsContent,
  },
};

export default en;
