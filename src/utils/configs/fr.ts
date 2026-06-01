import type { TemplateConfig } from "../configType";
import privacyContent from '../../../PRIVACY_POLICY_FR.md?raw';
import termsContent from '../../../TERMS_OF_USE_FR.md?raw';

const fr: TemplateConfig = {
  name: "Combac",
  seo: {
    title: "Combac — Récompenses de fidélité pour chaque Business",
    description:
      "Gagnez des points, débloquez des récompenses et découvrez des programmes de fidélité dans tous vos établissements locaux préférés — le tout dans une seule application.",
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
      { href: "./#features", title: "Fonctionnalités" },
      { href: "./#how-it-works", title: "Comment ça marche" },
      { href: "./#pricing", title: "Tarifs" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "S'inscrire gratuitement",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "./#features", title: "Fonctionnalités" },
      { href: "./#how-it-works", title: "Comment ça marche" },
      { href: "./#pricing", title: "Tarifs" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Commencez à gagner des récompenses dès aujourd'hui !",
    subtitle:
      "Téléchargez Combac et débloquez des programmes de fidélité dans des centaines d'établissements locaux — cafés, salles de sport, restaurants, salons, et plus encore. Votre portefeuille vous remerciera.",
    screenshots: [
      "./screenshots/1.webp",
      "./screenshots/2.webp",
      "./screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Combac — Récompenses de fidélité pour chaque Business",
      description:
        "Gagnez des points, débloquez des récompenses et découvrez des programmes de fidélité dans tous vos établissements locaux préférés — le tout dans une seule application.",
    },
    testimonials: {
      id: "testimonials",
      title: "Ce que nos membres disent",
      subtitle: "Des milliers de clients heureux gagnent des récompenses chaque jour",
      cards: [
        {
          name: "Sarah M.",
          comment:
            "Combac a complètement changé ma façon de consommer localement. J'ai gagné assez de points dans mon café pour avoir une boisson gratuite chaque semaine ! L'application est magnifique et vraiment facile à utiliser.",
        },
        {
          name: "James T.",
          comment:
            "Ma salle de sport propose des récompenses de fidélité via Combac et j'ai déjà utilisé trois séances gratuites. C'est une évidence — j'y allais de toute façon, maintenant je suis récompensé pour ça.",
        },
        {
          name: "Lena K.",
          comment:
            "J'adore le fait que toutes mes cartes de fidélité soient au même endroit. Plus besoin d'oublier 10 cartes de fidélité différentes. Combac suit tout et les récompenses valent vraiment le coup.",
        },
        {
          name: "Omar B.",
          comment:
            "En tant qu'habitué de restaurant, Combac est vite rentabilisé. Le système de QR code est fluide — le personnel l'adore aussi. Je recommande vivement à tout client local.",
        },
        {
          name: "Priya S.",
          comment:
            "Le design de l'application est superbe et ça fonctionne tout simplement. J'ai découvert de nouveaux établissements locaux grâce à Combac que je n'aurais jamais visités autrement. Un vrai changement pour soutenir le local.",
        },
      ],
    },
    stats: {
      title: "Croissance de l'écosystème",
      subtitle: "Combac étend rapidement son réseau. Rejoignez la phase de pré-lancement et assistez à la naissance d'une économie de récompenses plus intelligente.",
      items: [
        {
          value: "•••",
          label: "Membres Actifs",
          icon: "./3D/rocket-front-color.webp",
        },
        {
          value: "500+",
          label: "Business partenaires",
          icon: "./3D/medal-front-color.webp",
        },
        {
          value: "25K+",
          label: "Récompenses échangées",
          icon: "./3D/trophy-front-color.webp",
        },
        {
          value: "4.9/5",
          label: "Note moyenne",
          icon: "./3D/chart-front-color.webp",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "Comment fonctionne Combac",
      subtitle:
        "Gagner des récompenses de fidélité n'a jamais été aussi simple. Quatre étapes faciles pour commencer à bénéficier de chaque achat.",
      steps: [
        {
          title: "Téléchargez Combac",
          subtitle:
            "Obtenez l'application Combac sur iOS ou Android gratuitement. Inscrivez-vous en moins de 60 secondes et votre parcours de fidélité commence immédiatement.",
          image: "./screenshots/1.webp",
        },
        {
          title: "Découvrez les commerces locaux",
          subtitle:
            "Parcourez des centaines de Business participants près de chez vous — cafés, salles de sport, salons, restaurants et plus encore — qui n'attendent que de récompenser votre fidélité.",
          image: "./screenshots/3.webp",
        },
        {
          title: "Gagnez des points à chaque visite",
          subtitle:
            "Scannez le QR code de l'entreprise ou laissez-les scanner le vôtre au moment du paiement. Les points arrivent dans votre portefeuille instantanément après chaque visite.",
          image: "./screenshots/2.webp",
        },
        {
          title: "Échangez vos récompenses",
          subtitle:
            "Échangez vos points accumulés contre des boissons gratuites, des réductions, des produits exclusifs ou des expériences spéciales — choisis par chaque entreprise juste pour vous.",
          image: "./screenshots/1.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Une application. Chaque Business. De vraies récompenses.",
      subtitle:
        "Combac rassemble tous vos programmes de fidélité dans une seule expérience magnifiquement conçue.",
      cards: [
        {
          title: "Fidélité multi-Business",
          subtitle:
            "Rejoignez les programmes de fidélité des cafés, salles de sport, restaurants, salons et chaque Business participant — le tout géré depuis une seule application unifiée, sans cartes papier.",
          icon: "./3D/bookmark-fav-front-color.webp",
        },
        {
          title: "Récompenses instantanées",
          subtitle:
            "Les points arrivent dans votre portefeuille au moment où vous scannez. Pas de délais, pas d'attente. Échangez vos récompenses immédiatement dès que vous avez assez de solde.",
          icon: "./3D/gift-front-color.webp",
        },
        {
          title: "Suivez vos progrès",
          subtitle:
            "Regardez vos tampons de fidélité se remplir en temps réel. Voyez exactement à quel point vous êtes proche de votre prochaine récompense avec de belles cartes de progression.",
          icon: "./3D/chart-front-color.webp",
        },
        {
          title: "Offres exclusives",
          subtitle:
            "Les Business sur Combac proposent des promotions spéciales réservées aux membres, des événements double-points et des bonus surprises accessibles uniquement via l'application.",
          icon: "./3D/crown-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Foire aux questions",
      qa: [
        {
          question: "C'est pour quand le lancement ?",
          answer:
            "Nous sommes actuellement en phase de bêta privée et préparons un lancement public complet très prochainement. Rejoignez la liste d'attente pour être informé en premier et obtenir un accès anticipé.",
        },
        {
          question: "Combac est-il gratuit pour les clients ?",
          answer:
            "Oui ! Combac est complètement gratuit pour les clients. Téléchargez l'application dès notre lancement, créez un compte et commencez à rejoindre des programmes de fidélité dans vos établissements préférés sans frais.",
        },
        {
          question: "Comment puis-je gagner des points ?",
          answer:
            "Après avoir rejoint le programme de fidélité d'un commerce dans l'application, scannez simplement le QR code du commerce (ou laissez-les scanner le vôtre) au moment du paiement. Les points sont crédités instantanément.",
        },
        {
          question: "Comment puis-je échanger mes récompenses ?",
          answer:
            "Lorsque vous avez accumulé assez de points pour une récompense, appuyez sur 'Échanger' dans l'application depuis la carte de fidélité de ce commerce. Montrez l'écran de confirmation au commerçant et profitez de votre récompense !",
        },
        {
          question: "Puis-je utiliser Combac dans n'importe quel commerce ?",
          answer:
            "Combac fonctionne dans chaque commerce inscrit sur la plateforme. Nous grandissons vite — si votre endroit préféré n'est pas encore sur Combac, vous pouvez les inviter directement depuis l'application.",
        },
        {
          question: "Mes points expirent-ils ?",
          answer:
            "Les politiques d'expiration des points sont définies par chaque Business individuel sur la plateforme. L'application vous montre clairement toutes les dates d'expiration.",
        },
        {
          question: "Je suis propriétaire d'entreprise. Comment puis-je rejoindre ?",
          answer: "Génial ! Rendez-vous dans la section 'Business' de cette page et choisissez un forfait. La configuration prend moins de 10 minutes.",
        },
      ],
    },
    header: {
      headline: "Gagnez des récompenses dans chaque Business que vous aimez",
      headlineMark: [2, 4],
      subtitle:
        "Combac est l'application de fidélité tout-en-un qui vous permet de gagner des points, de suivre vos récompenses et de profiter d'avantages dans chaque établissement local que vous visitez.",
      screenshots: [
        "./screenshots/1.webp",
        "./screenshots/2.webp",
        "./screenshots/3.webp",
      ],
      rewards: ["#1 App de Fidélité", "Mieux notée 2025"],
      usersDescription: "••• membres de fidélité actifs",
    },
    pricing: {
      id: "pricing",
      title: "Tarification simple et transparente",
      subtitle: "Rejoignez des centaines de Business qui grandissent avec Combac. Commencez gratuitement, grandissez pour toujours.",
      actionText: "Commencez votre essai gratuit",
      plans: [
        {
          title: "Essai Early Bird",
          price: "Gratuit",
          rows: [
            "3 mois d'accès complet",
            "Membres de fidélité illimités",
            "Programmes de récompenses illimités",
            "QR codes & Analyses de base",
            "Notifications push incluses",
          ],
        },
        {
          title: "Partenaire Standard",
          price: "39 DT/mois",
          rows: [
            "Commence après l'essai de 3 mois",
            "Branding & Campagnes personnalisées",
            "Outils de publicité in-app",
            "Accès multi-personnel",
            "Support prioritaire",
          ],
        },
        {
          title: "Pro Propulsé par l'IA",
          price: "89 DT/mois",
          featured: true,
          rows: [
            "Tout ce qui est inclus dans Standard",
            "Programmes de fidélité générés par l'IA",
            "Analyses intelligentes du comportement client",
            "Recommandations personnalisées",
            "Marketing SMS (Prochainement)",
          ],
        },
      ],
    },
    aiFeature: {
      id: "ai-feature",
      title: "L'avenir de la fidélité est intelligent",
      subtitle: "Notre IA améliore la plateforme de fidélité en transformant les données en informations intelligentes et exploitables. Elle aide les propriétaires d'entreprise à générer automatiquement des programmes de fidélité optimisés, à comprendre le comportement des clients et à améliorer l'engagement grâce à des recommandations personnalisées. Le résultat est un système plus intelligent, basé sur les données, qui stimule la rétention des clients, augmente l'utilisation des récompenses et simplifie la prise de décision avec un effort minimal.",
      badge: "Bientôt disponible",
      image: "./3D/bulb-front-color.webp",
    },
  },
  privacyPolicy: {
    seo: {
      title: "Politique de confidentialité - Combac",
      description: "Politique de confidentialité de Combac",
    },
    content: privacyContent,
  },
  cookiesPolicy: {
    seo: {
      title: "Politique relative aux cookies - Combac",
      description: "Politique relative aux cookies de Combac",
    },
    content: `# Politique relative aux cookies

Nous utilisons des cookies pour améliorer les performances et mémoriser vos préférences.
`,
  },
  termsAndConditions: {
    seo: {
      title: "Conditions générales - Combac",
      description: "Conditions générales de Combac",
    },
    content: termsContent,
  },
};

export default fr;
