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
  logo: "./combac-logo.png",
  theme: "combac",
  forceTheme: false,
  showThemeSwitch: true,
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
    title: "Start earning rewards today!",
    subtitle:
      "Download Combac and unlock loyalty programs at hundreds of local businesses — cafes, gyms, restaurants, salons, and more. Your wallet will thank you.",
    screenshots: [
      "./screenshots/discover.jpeg",
      "./screenshots/wallet-dashboard.jpeg",
      "./screenshots/redeem-programs.jpeg",
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
          name: "Syrine",
          comment:
            "Combac has completely changed how I shop locally. I earned enough points at my coffee shop to get a free drink every week! The app is beautiful and really easy to use.",
        },
        {
          name: "Hazem",
          comment:
            "My gym offers loyalty rewards through Combac and I've already redeemed three free sessions. It's a no-brainer — I was going anyway, now I get rewarded for it.",
        },
        {
          name: "Oumaima",
          comment:
            "I love that all my loyalty cards are in one place. No more forgetting different stamp cards. Combac tracks everything and the rewards are totally worth it.",
        },
        {
          name: "Oussema",
          comment:
            "As a restaurant regular, Combac pays for itself quickly. The QR code system is seamless — the staff loves it too. Highly recommended for any local business customer.",
        },
        {
          name: "Ahmed",
          comment:
            "The app design is stunning and it simply works. I've discovered new local businesses through Combac that I never would have visited otherwise. A game-changer for supporting local.",
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
          image: "./screenshots/mockup-discover.png",
        },
        {
          title: "2. Earn",
          subtitle:
            "Collect points seamlessly through our high-speed QR technology.",
          image: "./screenshots/mockup-1.png",
        },
        {
          title: "3. Track",
          subtitle:
            "Monitor your progress with beautifully designed, data-rich dashboards.",
          image: "./screenshots/mockup-2.png",
        },
        {
          title: "4. Redeem",
          subtitle:
            "Enjoy exclusive rewards curated specifically for your preferences.",
          image: "./screenshots/mockup-3.png",
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
            "Currently, points never expire! Only specific reward programs may have an expiration date. In the future, we will add an optional feature allowing businesses to set an expiration duration for their points, but you will always be notified in advance.",
        },
        {
          question: "I'm a business owner. How do I join?",
          answer:
            "Download the Combac app from the App Store or Google Play, create an account as a business, and start using the app to reward your customers, etc.",
        },
      ],
    },
    header: {
      headline: "The smarter way to reward loyalty",
      headlineMark: [1, 2],
      subtitle:
        "Replace your stack of paper cards with a single digital identity. Combac is the unified loyalty wallet that lets you discover local favorites, earn instant points at cafes, gyms, or salons, and redeem rewards—all through one premium experience.",
      screenshots: [
        "./screenshots/scan-client.jpeg",
        "./screenshots/redeem-programs.jpeg",
        "./screenshots/wallet-dashboard.jpeg",
      ],
    },
    pricing: {
      id: "pricing",
      title: "Simple & Transparent Pricing",
      subtitle: "Join hundreds of businesses growing with Combac. Start for free, grow forever.",
      earlyAdopterNote: "✨ Current pricing is exclusively for early adopters",
      actionText: "Start Your Free Trial",
      modalTitle: "Get Started with Combac",
      modalDescription: "Combac is available on the App Store and Google Play. Download it, sign up as a business, and start using it right away!",
      modalCloseText: "Close",
      plans: [
        {
          title: "Early Bird Trial",
          price: "Free",
          rows: [
            "2 Months Full Access",
            "Unlimited loyalty members",
            "Unlimited reward programs",
            "QR code & Basic analytics",
            "Push notifications included",
          ],
        },
        {
          title: "Standard Business",
          price: "59 DT/month",
          rows: [
            "Starts after 2-month trial",
            "Custom branding & Campaigns",
            "In-app advertising tools",
            "Multi-staff access",
            "Priority support",
          ],
        },
        {
          title: "AI-Powered Pro",
          price: "TBA",
          featured: true,
          badge: "Coming Soon",
          rows: [
            "Everything in Standard",
            "AI-Generated Loyalty Programs",
            "Smart Customer Behavior Insights",
            "Personalized Recommendations",
            "Automated client reminders to consume points",
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
    realLifeUsage: {
      tagline: "Real-Life Experience",
      title: "Seamless Everyday Integration",
      description: "Use Combac effortlessly in your daily routine. Whether you're grabbing your morning coffee or visiting your favorite local spots, earning rewards has never been this natural and seamlessly integrated into real life.",
      imageAlt: "User using Combac in a coffee shop",
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Combac",
      description: "Learn how Combac collects, uses, and protects your personal data and loyalty information.",
    },
    lastUpdated: "June 2026",
    version: "1.0",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: "Welcome to Combac. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website. Please read this policy carefully. If you disagree with its terms, please discontinue use of our platform.",
      },
      {
        id: "information-we-collect",
        title: "Information We Collect",
        content: "We collect information you provide directly to us, information we collect automatically when you use Combac, and information from third-party services. The types of information we collect depend on how you use our platform.",
        items: [
          "Information you provide: name, email, phone number, and profile details.",
          "Information collected automatically: device data, usage logs, IP address, and app interactions.",
          "Information from third parties: app store platforms, analytics providers, and authentication services.",
        ],
      },
      {
        id: "account-information",
        title: "Account Information",
        content: "When you create a Combac account, we collect your name, email address, phone number, and profile photo (optional). This information is used to identify you on the platform, personalize your experience, and communicate important updates about your account or rewards.",
      },
      {
        id: "business-information",
        title: "Business Information",
        content: "If you register as a business owner on Combac, we additionally collect your business name, address, category, logo, and contact information. This information is displayed to customers within the app to help them discover and engage with your loyalty programs.",
      },
      {
        id: "loyalty-program-data",
        title: "Loyalty Program Data",
        content: "We collect data related to your interactions with loyalty programs, including points earned, rewards redeemed, transaction timestamps, and program participation history. This data is essential to operating the core features of Combac and providing accurate reward tracking for both customers and business owners.",
      },
      {
        id: "device-and-usage",
        title: "Device and Usage Information",
        content: "We automatically collect certain technical information when you use our app, including your device type, operating system version, app version, unique device identifiers, crash reports, and feature usage patterns. This data helps us maintain app stability, fix bugs, and improve the overall user experience.",
      },
      {
        id: "location-information",
        title: "Location Information",
        content: "With your permission, we may collect approximate location data to help you discover nearby businesses that offer Combac loyalty programs. You can disable location access at any time through your device settings. We do not track your precise real-time location or share your location data with third parties for advertising purposes.",
      },
      {
        id: "how-we-use",
        title: "How We Use Your Information",
        content: "We use the information we collect to operate, maintain, and improve the Combac platform. Specifically, we use your data to:",
        items: [
          "Create and manage your account and loyalty records.",
          "Process transactions and track points and rewards accurately.",
          "Send you notifications about your rewards, account activity, and platform updates.",
          "Personalize your in-app experience and recommend relevant businesses.",
          "Analyze usage patterns to improve platform features and performance.",
          "Detect and prevent fraud, abuse, and security incidents.",
          "Comply with legal obligations and enforce our Terms of Use.",
        ],
      },
      {
        id: "data-sharing",
        title: "Data Sharing",
        content: "We do not sell your personal information. We share your data only in the following limited circumstances:",
        items: [
          "With business owners: your name and loyalty activity are shared with businesses whose programs you participate in.",
          "With service providers: trusted third-party services that help us operate the platform (e.g., cloud hosting, analytics).",
          "For legal compliance: when required by law, court order, or governmental authority.",
          "In a business transaction: if Combac is acquired or merged, your data may transfer to the new entity.",
        ],
      },
      {
        id: "data-security",
        title: "Data Security",
        content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encrypted data transmission (HTTPS/TLS), secure data storage practices, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        id: "user-rights",
        title: "Your Rights",
        content: "Depending on your location, you may have the following rights regarding your personal data:",
        items: [
          "Access: request a copy of the personal data we hold about you.",
          "Correction: request that we correct inaccurate or incomplete information.",
          "Deletion: request that we delete your personal data (subject to legal obligations).",
          "Portability: request your data in a structured, machine-readable format.",
          "Objection: object to certain types of data processing, including direct marketing.",
          "Withdrawal of consent: withdraw consent where processing is based on your consent.",
        ],
      },
      {
        id: "account-deletion",
        title: "Account Deletion",
        content: "You may delete your Combac account at any time from within the app settings. Upon deletion, your personal profile and account information will be permanently removed within 30 days. Certain transaction records may be retained for legal and financial compliance purposes as required by applicable law.",
      },
      {
        id: "data-retention",
        title: "Data Retention",
        content: "We retain your personal data for as long as your account is active or as needed to provide you with our services. If you delete your account, we will delete or anonymize your data within 30 days, except where we are required to retain it for legal, regulatory, or fraud-prevention purposes.",
      },
      {
        id: "childrens-privacy",
        title: "Children's Privacy",
        content: "Combac is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without verified parental consent, we will take steps to delete that information promptly. If you believe a child has provided us with personal information, please contact us immediately.",
      },
      {
        id: "policy-changes",
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or platform features. When we make material changes, we will notify you through the app or via email. The 'Last Updated' date at the top of this policy reflects the most recent revision. Your continued use of Combac after any changes constitutes your acceptance of the updated policy.",
      },
      {
        id: "contact",
        title: "Contact Information",
        content: "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at: privacy@combac.app. We are committed to addressing your concerns promptly and transparently.",
      },
    ],
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Combac",
      description: "Understand how Combac uses cookies and similar technologies to enhance your experience.",
    },
    lastUpdated: "June 2026",
    version: "1.0",
    sections: [
      {
        id: "what-are-cookies",
        title: "What Are Cookies",
        content: "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use a web-based application. They are widely used to make websites and apps work more efficiently, as well as to provide information to the operators of the site. Cookies help your device remember information about your visit, like your preferred language and other settings.",
      },
      {
        id: "why-we-use-cookies",
        title: "Why We Use Cookies",
        content: "Combac uses cookies and similar technologies (such as local storage and session storage) to ensure the proper functioning of our platform, enhance your experience, and gather analytical insights. We are committed to using only the minimum cookies necessary to deliver a high-quality, secure, and personalized service.",
      },
      {
        id: "authentication-cookies",
        title: "Authentication Cookies",
        content: "These cookies are essential for you to log in and stay logged in to your Combac account. They securely store your session information so you do not have to enter your credentials every time you visit. Without these cookies, features that require authentication cannot function.",
        items: [
          "Session tokens: maintain your logged-in state across page visits.",
          "Authentication identifiers: securely verify your identity with our servers.",
          "Security state: detect and prevent unauthorized access attempts.",
        ],
      },
      {
        id: "preference-cookies",
        title: "Preference Cookies",
        content: "These cookies remember your settings and preferences to personalize your experience on Combac. They allow us to remember choices you have made, such as your preferred language (English, French, or Arabic), display theme (light or dark mode), and other UI preferences.",
        items: [
          "Language preference: remember your selected language across sessions.",
          "Theme preference: remember your dark mode or light mode selection.",
          "Interface settings: remember your layout and display choices.",
        ],
      },
      {
        id: "analytics-cookies",
        title: "Analytics Cookies",
        content: "We use analytics cookies to understand how visitors interact with our platform. This information helps us improve the performance, usability, and content of Combac. Analytics data is aggregated and anonymized — it does not identify individual users.",
        items: [
          "Page view tracking: understand which sections of the app are most visited.",
          "Feature usage analysis: identify which features are most and least used.",
          "Error and crash reporting: detect and resolve technical issues quickly.",
          "Funnel analysis: understand how users navigate through key flows.",
        ],
      },
      {
        id: "security-cookies",
        title: "Security Cookies",
        content: "Security cookies help protect you and Combac from fraudulent activity, unauthorized access, and other security threats. These cookies are essential to maintaining the integrity and safety of our platform and cannot be disabled without affecting your security.",
        items: [
          "CSRF protection tokens: prevent cross-site request forgery attacks.",
          "Rate limiting identifiers: protect against automated abuse and brute-force attacks.",
          "Fraud detection signals: identify and block suspicious activity patterns.",
        ],
      },
      {
        id: "third-party-services",
        title: "Third-Party Services",
        content: "Some features of Combac integrate with third-party services that may set their own cookies on your device. These services include analytics providers and cloud infrastructure partners. We select third-party partners carefully and require them to comply with applicable data protection regulations. We do not allow third-party advertising cookies on our platform.",
      },
      {
        id: "managing-cookies",
        title: "Managing Cookies",
        content: "You have control over the cookies placed on your device. You can manage or disable cookies through your browser or device settings. Please note that disabling certain cookies may affect the functionality of Combac.",
        items: [
          "Browser settings: most browsers allow you to view, delete, or block cookies via their privacy settings.",
          "Device settings: on mobile devices, you can manage app-level storage permissions through your OS settings.",
          "Theme preference: stored in your browser's localStorage and can be cleared by clearing site data.",
          "Note: disabling essential or authentication cookies will prevent you from logging in or using core features.",
        ],
      },
      {
        id: "policy-updates",
        title: "Updates to This Policy",
        content: "We may update this Cookies Policy from time to time as our technology or legal requirements change. When we make significant changes, we will notify you through the app or via email. We encourage you to review this policy periodically to stay informed about how we use cookies.",
      },
      {
        id: "contact",
        title: "Contact Information",
        content: "If you have questions or concerns about our use of cookies or this policy, please contact us at: privacy@combac.app. We are happy to answer any questions and address your concerns.",
      },
    ],
  },
  termsAndConditions: {
    seo: {
      title: "Terms & Conditions - Combac",
      description: "Read the Terms and Conditions governing your use of the Combac loyalty platform.",
    },
    lastUpdated: "June 2026",
    version: "1.0",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        content: "By downloading, installing, or using the Combac mobile application or website (collectively, the 'Platform'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the Platform. We reserve the right to modify these Terms at any time, and your continued use of the Platform after any changes constitutes your acceptance of the new Terms.",
      },
      {
        id: "eligibility",
        title: "Eligibility",
        content: "You must be at least 16 years of age to use Combac. By using the Platform, you represent and warrant that you meet this age requirement, that you have the legal capacity to enter into a binding agreement, and that your use of the Platform does not violate any applicable laws or regulations in your jurisdiction.",
      },
      {
        id: "user-accounts",
        title: "User Accounts",
        content: "To access core features of Combac, you must create an account. You are responsible for:",
        items: [
          "Providing accurate, current, and complete information during registration.",
          "Maintaining the confidentiality of your account credentials.",
          "All activity that occurs under your account.",
          "Notifying us immediately at support@combac.app of any unauthorized use of your account.",
          "Ensuring only you use your account — accounts are non-transferable.",
        ],
      },
      {
        id: "customer-responsibilities",
        title: "Customer Responsibilities",
        content: "As a customer using Combac to participate in loyalty programs, you agree to:",
        items: [
          "Use the Platform honestly and only earn points through legitimate transactions.",
          "Not attempt to exploit, manipulate, or abuse loyalty point systems.",
          "Not share QR codes or account access with unauthorized persons.",
          "Comply with any specific terms set by individual business loyalty programs.",
          "Report any errors in your points balance promptly to support.",
        ],
      },
      {
        id: "business-responsibilities",
        title: "Business Owner Responsibilities",
        content: "If you register as a business owner on Combac, you additionally agree to:",
        items: [
          "Provide accurate and truthful business information.",
          "Honor all loyalty rewards and redemption programs you create on the Platform.",
          "Not create fraudulent, misleading, or deceptive loyalty programs.",
          "Comply with all applicable consumer protection and advertising laws.",
          "Maintain the confidentiality of your business account credentials.",
          "Promptly update your business information when it changes.",
        ],
      },
      {
        id: "loyalty-programs",
        title: "Loyalty Programs",
        content: "Combac enables businesses to create and manage loyalty programs for their customers. Business owners are solely responsible for the design, terms, and execution of their loyalty programs. Combac acts as a technology platform facilitating these programs and is not responsible for the fulfillment of specific rewards or offers made by individual businesses.",
      },
      {
        id: "rewards-redemption",
        title: "Rewards and Redemption",
        content: "Points earned through Combac are subject to the terms set by the business whose program you participate in. Points have no monetary value outside of the Combac platform and cannot be exchanged for cash. Redemption programs may have expiration dates set by the business. Currently, points themselves do not expire, though this may change in the future with appropriate notice.",
        items: [
          "Points are non-transferable and non-refundable.",
          "Rewards are subject to availability at the business's discretion.",
          "Combac reserves the right to void points obtained through fraudulent means.",
          "Businesses may set their own expiration policies for specific redemption programs.",
        ],
      },
      {
        id: "prohibited-activities",
        title: "Prohibited Activities",
        content: "You agree not to engage in any of the following prohibited activities:",
        items: [
          "Creating fake accounts or impersonating another person or business.",
          "Using automated bots, scripts, or tools to interact with the Platform.",
          "Attempting to hack, reverse-engineer, or circumvent the Platform's security measures.",
          "Fraudulently earning, transferring, or redeeming loyalty points.",
          "Uploading malicious code, viruses, or any harmful content.",
          "Harassing, threatening, or abusing other users or business owners.",
          "Using the Platform for any unlawful purpose.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: "The Combac name, logo, app design, user interface, source code, and all associated content are the exclusive intellectual property of Combac and are protected by applicable copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended personal or business purposes only. Any other use is strictly prohibited without our written consent.",
      },
      {
        id: "service-availability",
        title: "Service Availability",
        content: "We strive to keep Combac available 24/7, but we do not guarantee uninterrupted access to the Platform. We may temporarily suspend the service for maintenance, upgrades, or due to events beyond our reasonable control. We will endeavor to provide advance notice of planned maintenance and to restore service as quickly as possible in the event of unplanned outages.",
      },
      {
        id: "liability",
        title: "Limitation of Liability",
        content: "To the maximum extent permitted by applicable law, Combac and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Platform. Our total liability for any claims related to the Platform shall not exceed the amount you paid us in the 12 months preceding the claim.",
      },
      {
        id: "suspension",
        title: "Account Suspension",
        content: "We reserve the right to suspend or restrict your account at any time if we determine, in our sole discretion, that you have violated these Terms, engaged in fraudulent activity, or pose a risk to the Platform or other users. We will make reasonable efforts to notify you of any suspension and the reasons for it.",
      },
      {
        id: "termination",
        title: "Termination",
        content: "Either party may terminate the user relationship at any time. You may delete your account from within the app settings. We may terminate your access to Combac at any time for violation of these Terms or for any other reason with reasonable notice. Upon termination, your right to use the Platform immediately ceases and your loyalty points will be forfeited.",
      },
      {
        id: "changes-to-terms",
        title: "Changes to Terms",
        content: "We may update these Terms from time to time to reflect changes in our practices, legal requirements, or platform features. When we make material changes, we will notify you at least 14 days in advance through the app or via email. Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated Terms.",
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: "These Terms shall be governed by and construed in accordance with the laws of Tunisia, without regard to its conflict of law principles. Any disputes arising from or related to these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the competent courts of Tunis, Tunisia.",
      },
      {
        id: "contact",
        title: "Contact Information",
        content: "If you have any questions, concerns, or disputes regarding these Terms and Conditions, please contact us at: legal@combac.app. We are committed to resolving issues fairly and promptly.",
      },
    ],
  },
};

export default en;
