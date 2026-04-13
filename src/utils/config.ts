import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Combac",
  seo: {
    title: "Combac — Loyalty Rewards for Every Business",
    description:
      "Earn points, unlock rewards, and discover loyalty programs at all your favorite local businesses — all in one app.",
  },
  backgroundGrid: false,
  logo: "./logo.svg",
  theme: "combac",
  // Forces Combac light theme always
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
      { href: "./#pricing", title: "For Businesses" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Join Free",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "./#features", title: "Features" },
      { href: "./#how-it-works", title: "How it works" },
      { href: "./#pricing", title: "For Businesses" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Start Earning Rewards Today!",
    subtitle:
      "Download Combac and unlock loyalty programs at hundreds of local businesses — coffee shops, gyms, restaurants, salons, and more. Your wallet will thank you.",
    screenshots: [
      "./screenshots/1.webp",
      "./screenshots/2.webp",
      "./screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Combac — Loyalty Rewards for Every Business",
      description:
        "Earn points, unlock rewards, and discover loyalty programs at all your favorite local businesses — all in one app.",
    },
    testimonials: {
      id: "testimonials",
      title: "What Our Members Say",
      subtitle: "Thousands of happy customers earning rewards every day",
      cards: [
        {
          name: "Sarah M.",
          comment:
            "Combac completely changed how I shop locally. I've earned enough points at my coffee shop to get a free drink every week! The app is beautiful and really easy to use.",
        },
        {
          name: "James T.",
          comment:
            "My gym offers loyalty rewards through Combac and I've already redeemed three free sessions. It's a no-brainer — I was going anyway, now I get rewarded for it.",
        },
        {
          name: "Lena K.",
          comment:
            "I love that all my loyalty cards are in one place. No more forgetting 10 different stamp cards. Combac tracks everything and the rewards are actually worth it.",
        },
        {
          name: "Omar B.",
          comment:
            "As a restaurant regular, Combac pays for itself quickly. The QR code system is seamless — the staff love it too. Highly recommend to any local business customer.",
        },
        {
          name: "Priya S.",
          comment:
            "The app design is stunning and it just works. I've discovered new local businesses through Combac that I would have never visited otherwise. Game changer for supporting local.",
        },
      ],
    },
    stats: {
      title: "Our Community in Numbers",
      items: [
        {
          value: "10K+",
          label: "Active Members",
          icon: "./3D/rocket-front-color.webp",
        },
        {
          value: "500+",
          label: "Partner Businesses",
          icon: "./3D/medal-front-color.webp",
        },
        {
          value: "25K+",
          label: "Rewards Redeemed",
          icon: "./3D/trophy-front-color.webp",
        },
        {
          value: "4.9/5",
          label: "Average Rating",
          icon: "./3D/chart-front-color.webp",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How Combac Works",
      subtitle:
        "Earning loyalty rewards has never been this simple. Four easy steps to start benefiting from every purchase.",
      steps: [
        {
          title: "Download Combac",
          subtitle:
            "Get the Combac app on iOS or Android for free. Sign up in under 60 seconds and your loyalty journey begins immediately.",
          image: "./screenshots/1.webp",
        },
        {
          title: "Discover Local Businesses",
          subtitle:
            "Browse hundreds of participating businesses near you — cafés, gyms, salons, restaurants and more — all waiting to reward your loyalty.",
          image: "./screenshots/3.webp",
        },
        {
          title: "Earn Points Every Visit",
          subtitle:
            "Scan the business QR code or let them scan yours at checkout. Points land in your wallet instantly after every visit.",
          image: "./screenshots/2.webp",
        },
        {
          title: "Redeem Your Rewards",
          subtitle:
            "Exchange your accumulated points for free drinks, discounts, exclusive products, or special experiences — chosen by each business just for you.",
          image: "./screenshots/1.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "One App. Every Business. Real Rewards.",
      subtitle:
        "Combac brings all your loyalty programs together in a single, beautifully designed experience.",
      cards: [
        {
          title: "Multi-Business Loyalty",
          subtitle:
            "Join loyalty programs from coffee shops, gyms, restaurants, salons and any participating business — all managed from one unified app, no paper cards needed.",
          icon: "./3D/bookmark-fav-front-color.webp",
        },
        {
          title: "Instant Rewards",
          subtitle:
            "Points land in your wallet the moment you scan. No delays, no waiting. Redeem rewards immediately when you have enough balance at any participating business.",
          icon: "./3D/gift-front-color.webp",
        },
        {
          title: "Track Your Progress",
          subtitle:
            "Watch your loyalty stamps fill up in real time. See exactly how close you are to your next reward with beautiful progress cards for each business.",
          icon: "./3D/chart-front-color.webp",
        },
        {
          title: "Exclusive Offers",
          subtitle:
            "Businesses on Combac run special members-only promotions, double-point events, and surprise bonuses accessible only through the app.",
          icon: "./3D/crown-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "Is Combac free for customers?",
          answer:
            "Yes! Combac is completely free for customers. Download the app, create an account, and start joining loyalty programs at your favorite businesses at no cost.",
        },
        {
          question: "How do I earn points?",
          answer:
            "After joining a business's loyalty program in the app, simply scan the business's QR code (or let them scan yours) at checkout. Points are credited to your wallet instantly based on the business's reward rules.",
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
      headline: "Earn Rewards at Every Business You Love",
      headlineMark: [2, 4],
      subtitle:
        "Combac is the all-in-one loyalty app that lets you earn points, track rewards, and redeem perks at every local business you visit — coffee shops, gyms, restaurants, salons and more.",
      screenshots: [
        "./screenshots/1.webp",
        "./screenshots/2.webp",
        "./screenshots/3.webp",
      ],
      rewards: ["#1 Loyalty App", "Top Rated 2025"],
      usersDescription: "10,000+ active loyalty members",
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
            "QR code generation",
            "Business dashboard",
          ],
        },
        {
          title: "Standard Business",
          price: "39 DT/month",
          featured: true,
          rows: [
            "Starts after 3-month trial",
            "All Trial features included",
            "Customer analytics",
            "Multi-staff access",
            "Priority support",
          ],
        },
        {
          title: "Pay-As-You-Go",
          price: "Add-ons",
          rows: [
            "Push notifications to customers",
            "In-app advertising",
            "Double-points campaigns",
            "Custom branding",
            "SMS marketing (Coming soon)",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Combac",
      description: "Combac Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** January 1, 2025

## Introduction

Welcome to Combac (the "App"). Combac ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for Combac, we collect your name, email address, and other contact information.
- **Loyalty Activity:** We collect information about your loyalty program participation, points earned, and rewards redeemed.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as businesses you visit and rewards you redeem.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

## How We Use Your Information

We use the information we collect to:
- **Operate the Loyalty Platform:** Process points, rewards, and QR code scanning.
- **Personalize Your Experience:** Recommend businesses and offers tailored to your preferences.
- **Communicate with You:** Send notifications about rewards, offers, and updates.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at:

Combac  
privacy@combac.app
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Combac",
      description: "Combac Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** January 1, 2025

## Introduction

This Cookies Policy explains how Combac ("we," "our," or "us") uses cookies and similar technologies when you visit our website.

## What Are Cookies?

Cookies are small data files placed on your device when you visit a website. We use them to improve performance, remember your preferences, and analyze usage patterns.

## Types of Cookies We Use

1. **Strictly Necessary Cookies:** Essential for the site to function properly.
2. **Analytics Cookies:** Help us understand how visitors interact with our site.
3. **Functionality Cookies:** Remember your preferences and settings.

## Contact Us

For questions about our use of cookies: cookies@combac.app
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and Conditions - Combac",
      description: "Combac Terms and Conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** January 1, 2025

## Introduction

Welcome to Combac (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by Combac ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms.

## Use of the App

### 1. Eligibility
To use Combac, you must be at least 16 years old and capable of entering into a legally binding agreement.

### 2. User Accounts
- **Registration:** You must provide accurate information when creating your account.
- **Account Security:** You are responsible for keeping your account credentials secure.

### 3. Loyalty Points and Rewards
- Points are issued at the discretion of participating businesses.
- Combac does not guarantee the availability of any specific reward.
- Points have no cash value and cannot be transferred.

## Contact Us

If you have questions about these Terms: legal@combac.app
`,
  },
};

export default templateConfig;
