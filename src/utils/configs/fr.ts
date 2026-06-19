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
      { href: "./#features", title: "Fonctionnalités" },
      { href: "./#how-it-works", title: "Comment ça marche" },
      { href: "./#pricing", title: "Tarifs" },
      { href: "./#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
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
      "./screenshots/discover.jpeg",
      "./screenshots/wallet-dashboard.jpeg",
      "./screenshots/redeem-programs.jpeg",
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
          name: "Syrine",
          comment:
            "Combac a complètement changé ma façon de consommer localement. J'ai gagné assez de points dans mon café pour avoir une boisson gratuite chaque semaine ! L'application est magnifique et vraiment facile à utiliser.",
        },
        {
          name: "Hazem",
          comment:
            "Ma salle de sport propose des récompenses de fidélité via Combac et j'ai déjà utilisé trois séances gratuites. C'est une évidence — j'y allais de toute façon, maintenant je suis récompensé pour ça.",
        },
        {
          name: "Oumaima",
          comment:
            "J'adore le fait que toutes mes cartes de fidélité soient au même endroit. Plus besoin d'oublier 10 cartes de fidélité différentes. Combac suit tout et les récompenses valent vraiment le coup.",
        },
        {
          name: "Oussema",
          comment:
            "En tant qu'habitué de restaurant, Combac est vite rentabilisé. Le système de QR code est fluide — le personnel l'adore aussi. Je recommande vivement à tout client local.",
        },
        {
          name: "Ahmed",
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
          image: "./screenshots/mockup-1.png",
        },
        {
          title: "Découvrez les commerces locaux",
          subtitle:
            "Parcourez des centaines de Business participants près de chez vous — cafés, salles de sport, salons, restaurants et plus encore — qui n'attendent que de récompenser votre fidélité.",
          image: "./screenshots/mockup-discover.png",
        },
        {
          title: "Gagnez des points à chaque visite",
          subtitle:
            "Scannez le QR code de l'entreprise ou laissez-les scanner le vôtre au moment du paiement. Les points arrivent dans votre portefeuille instantanément après chaque visite.",
          image: "./screenshots/mockup-2.png",
        },
        {
          title: "Échangez vos récompenses",
          subtitle:
            "Échangez vos points accumulés contre des boissons gratuites, des réductions, des produits exclusifs ou des expériences spéciales — choisis par chaque entreprise juste pour vous.",
          image: "./screenshots/mockup-1.png",
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
            "Actuellement, les points n'expirent jamais ! Seuls les programmes de récompense spécifiques peuvent avoir une date d'expiration. À l'avenir, nous ajouterons une fonctionnalité optionnelle permettant aux entreprises de définir une durée d'expiration pour leurs points, mais vous en serez toujours informé à l'avance.",
        },
        {
          question: "Je suis propriétaire d'entreprise. Comment puis-je rejoindre ?",
          answer:
            "Téléchargez l'application Combac sur l'App Store ou Google Play, créez un compte en tant qu'entreprise et commencez à utiliser l'application pour récompenser vos clients, etc.",
        },
      ],
    },
    header: {
      headline: "Gagnez des récompenses dans chaque Business que vous aimez",
      headlineMark: [2, 4],
      subtitle:
        "Combac est l'application de fidélité tout-en-un qui vous permet de gagner des points, de suivre vos récompenses et de profiter d'avantages dans chaque établissement local que vous visitez.",
      screenshots: [
        "./screenshots/scan-client.jpeg",
        "./screenshots/redeem-programs.jpeg",
        "./screenshots/wallet-dashboard.jpeg",
      ],
    },
    pricing: {
      id: "pricing",
      title: "Tarification simple et transparente",
      subtitle: "Rejoignez des centaines de Business qui grandissent avec Combac. Commencez gratuitement, grandissez pour toujours.",
      earlyAdopterNote: "✨ La tarification actuelle est exclusive aux premiers adoptants",
      actionText: "Commencez votre essai gratuit",
      modalTitle: "Commencez avec Combac",
      modalDescription: "Combac est disponible sur l'App Store et Google Play. Téléchargez l'application, créez un compte en tant qu'entreprise et commencez à l'utiliser dès maintenant !",
      modalCloseText: "Fermer",
      plans: [
        {
          title: "Essai Early Bird",
          price: "Gratuit",
          rows: [
            "2 Mois d'accès complet",
            "Membres de fidélité illimités",
            "Programmes de récompenses illimités",
            "QR codes & Analyses de base",
            "Notifications push incluses",
          ],
        },
        {
          title: "Business Standard",
          price: "39 DT/mois",
          rows: [
            "Commence après l'essai de 2 mois",
            "Branding & Campagnes personnalisées",
            "Outils de publicité in-app",
            "Accès multi-personnel",
            "Support prioritaire",
          ],
        },
        {
          title: "Pro Propulsé par l'IA",
          price: "À venir",
          featured: true,
          badge: "Bientôt disponible",
          rows: [
            "Tout ce qui est inclus dans Standard",
            "Programmes de fidélité générés par l'IA",
            "Analyses intelligentes du comportement client",
            "Recommandations personnalisées",
            "Rappels automatiques aux clients pour consommer leurs points",
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
    realLifeUsage: {
      tagline: "Expérience du Quotidien",
      title: "Intégration Quotidienne Fluide",
      description: "Utilisez Combac sans effort dans votre routine quotidienne. Que ce soit pour prendre votre café du matin ou visiter vos endroits locaux préférés, gagner des récompenses n'a jamais été aussi naturel et parfaitement intégré à la vraie vie.",
      imageAlt: "Utilisateur se servant de Combac dans un café",
    },
  },
  privacyPolicy: {
    seo: {
      title: "Politique de confidentialité - Combac",
      description: "Découvrez comment Combac collecte, utilise et protège vos données personnelles et vos informations de fidélité.",
    },
    lastUpdated: "Juin 2026",
    version: "1.0",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content: "Bienvenue chez Combac. Nous nous engageons à protéger vos informations personnelles et votre droit à la vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile et notre site web. Veuillez lire attentivement cette politique. Si vous n'êtes pas d'accord avec ses termes, veuillez cesser d'utiliser notre plateforme.",
      },
      {
        id: "information-we-collect",
        title: "Informations que nous collectons",
        content: "Nous collectons les informations que vous nous fournissez directement, les informations collectées automatiquement lors de votre utilisation de Combac, et les informations provenant de services tiers.",
        items: [
          "Informations que vous fournissez : nom, e-mail, numéro de téléphone et détails du profil.",
          "Informations collectées automatiquement : données d'appareil, journaux d'utilisation, adresse IP et interactions avec l'application.",
          "Informations de tiers : plateformes de magasins d'applications, fournisseurs d'analyses et services d'authentification.",
        ],
      },
      {
        id: "account-information",
        title: "Informations de compte",
        content: "Lorsque vous créez un compte Combac, nous collectons votre nom, adresse e-mail, numéro de téléphone et photo de profil (facultatif). Ces informations sont utilisées pour vous identifier sur la plateforme, personnaliser votre expérience et communiquer des mises à jour importantes concernant votre compte ou vos récompenses.",
      },
      {
        id: "business-information",
        title: "Informations d'entreprise",
        content: "Si vous vous inscrivez en tant que propriétaire d'entreprise sur Combac, nous collectons également le nom, l'adresse, la catégorie, le logo et les coordonnées de votre entreprise. Ces informations sont affichées aux clients dans l'application pour les aider à découvrir et à s'engager dans vos programmes de fidélité.",
      },
      {
        id: "loyalty-program-data",
        title: "Données des programmes de fidélité",
        content: "Nous collectons des données relatives à vos interactions avec les programmes de fidélité, notamment les points gagnés, les récompenses échangées, les horodatages des transactions et l'historique de participation aux programmes. Ces données sont essentielles au fonctionnement des principales fonctionnalités de Combac.",
      },
      {
        id: "device-and-usage",
        title: "Informations sur l'appareil et l'utilisation",
        content: "Nous collectons automatiquement certaines informations techniques lorsque vous utilisez notre application, notamment le type d'appareil, la version du système d'exploitation, la version de l'application, les identifiants uniques de l'appareil, les rapports de plantage et les habitudes d'utilisation des fonctionnalités.",
      },
      {
        id: "location-information",
        title: "Informations de localisation",
        content: "Avec votre autorisation, nous pouvons collecter des données de localisation approximatives pour vous aider à découvrir les entreprises à proximité qui proposent des programmes de fidélité Combac. Vous pouvez désactiver l'accès à la localisation à tout moment dans les paramètres de votre appareil.",
      },
      {
        id: "how-we-use",
        title: "Comment nous utilisons vos informations",
        content: "Nous utilisons les informations collectées pour exploiter, maintenir et améliorer la plateforme Combac. Plus précisément, nous utilisons vos données pour :",
        items: [
          "Créer et gérer votre compte et vos dossiers de fidélité.",
          "Traiter les transactions et suivre avec précision les points et les récompenses.",
          "Vous envoyer des notifications sur vos récompenses, l'activité de votre compte et les mises à jour de la plateforme.",
          "Personnaliser votre expérience dans l'application et recommander des entreprises pertinentes.",
          "Analyser les habitudes d'utilisation pour améliorer les fonctionnalités et les performances de la plateforme.",
          "Détecter et prévenir la fraude, les abus et les incidents de sécurité.",
          "Respecter les obligations légales et appliquer nos conditions d'utilisation.",
        ],
      },
      {
        id: "data-sharing",
        title: "Partage de données",
        content: "Nous ne vendons pas vos informations personnelles. Nous partageons vos données uniquement dans les circonstances limitées suivantes :",
        items: [
          "Avec les propriétaires d'entreprises : votre nom et votre activité de fidélité sont partagés avec les entreprises dont vous participez aux programmes.",
          "Avec les prestataires de services : des services tiers de confiance qui nous aident à exploiter la plateforme.",
          "Pour la conformité légale : lorsque la loi, une ordonnance du tribunal ou une autorité gouvernementale l'exige.",
          "Dans le cadre d'une transaction commerciale : en cas d'acquisition ou de fusion de Combac.",
        ],
      },
      {
        id: "data-security",
        title: "Sécurité des données",
        content: "Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos informations personnelles contre tout accès, divulgation, altération ou destruction non autorisés. Ces mesures comprennent la transmission de données chiffrées (HTTPS/TLS), des pratiques de stockage sécurisé, des contrôles d'accès et des audits de sécurité réguliers.",
      },
      {
        id: "user-rights",
        title: "Vos droits",
        content: "Selon votre localisation, vous pouvez disposer des droits suivants concernant vos données personnelles :",
        items: [
          "Accès : demander une copie des données personnelles que nous détenons vous concernant.",
          "Rectification : demander la correction d'informations inexactes ou incomplètes.",
          "Suppression : demander la suppression de vos données personnelles (sous réserve des obligations légales).",
          "Portabilité : demander vos données dans un format structuré et lisible par machine.",
          "Opposition : vous opposer à certains types de traitement de données.",
          "Retrait du consentement : retirer votre consentement lorsque le traitement est basé sur celui-ci.",
        ],
      },
      {
        id: "account-deletion",
        title: "Suppression du compte",
        content: "Vous pouvez supprimer votre compte Combac à tout moment depuis les paramètres de l'application. Après la suppression, votre profil personnel et vos informations de compte seront définitivement supprimés dans un délai de 30 jours. Certains enregistrements de transactions peuvent être conservés à des fins de conformité légale.",
      },
      {
        id: "data-retention",
        title: "Conservation des données",
        content: "Nous conservons vos données personnelles aussi longtemps que votre compte est actif ou selon les besoins pour vous fournir nos services. Si vous supprimez votre compte, nous supprimerons ou anonymiserons vos données dans un délai de 30 jours, sauf obligation légale contraire.",
      },
      {
        id: "childrens-privacy",
        title: "Confidentialité des enfants",
        content: "Combac n'est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si nous apprenons que nous avons collecté des données d'un enfant sans consentement parental vérifié, nous prendrons des mesures pour supprimer ces informations rapidement.",
      },
      {
        id: "policy-changes",
        title: "Modifications de cette politique",
        content: "Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre pour refléter les changements dans nos pratiques, les exigences légales ou les fonctionnalités de la plateforme. Lorsque nous apportons des modifications importantes, nous vous en informerons via l'application ou par e-mail.",
      },
      {
        id: "contact",
        title: "Informations de contact",
        content: "Si vous avez des questions, des préoccupations ou des demandes concernant cette Politique de confidentialité, veuillez nous contacter à : privacy@combac.app. Nous nous engageons à traiter vos préoccupations rapidement et de manière transparente.",
      },
    ],
  },
  cookiesPolicy: {
    seo: {
      title: "Politique relative aux cookies - Combac",
      description: "Comprenez comment Combac utilise les cookies et les technologies similaires pour améliorer votre expérience.",
    },
    lastUpdated: "Juin 2026",
    version: "1.0",
    sections: [
      {
        id: "what-are-cookies",
        title: "Que sont les cookies ?",
        content: "Les cookies sont de petits fichiers texte placés sur votre appareil (ordinateur, smartphone ou tablette) lorsque vous visitez un site web ou utilisez une application web. Ils sont largement utilisés pour faire fonctionner les sites web et les applications plus efficacement, ainsi que pour fournir des informations aux opérateurs du site.",
      },
      {
        id: "why-we-use-cookies",
        title: "Pourquoi utilisons-nous des cookies ?",
        content: "Combac utilise des cookies et des technologies similaires (telles que le stockage local et le stockage de session) pour assurer le bon fonctionnement de notre plateforme, améliorer votre expérience et recueillir des informations analytiques. Nous nous engageons à n'utiliser que le minimum de cookies nécessaires pour fournir un service de haute qualité, sécurisé et personnalisé.",
      },
      {
        id: "authentication-cookies",
        title: "Cookies d'authentification",
        content: "Ces cookies sont essentiels pour vous connecter et rester connecté à votre compte Combac. Ils stockent en toute sécurité vos informations de session afin que vous n'ayez pas à saisir vos identifiants à chaque visite.",
        items: [
          "Jetons de session : maintiennent votre état de connexion entre les visites.",
          "Identifiants d'authentification : vérifient votre identité de manière sécurisée.",
          "État de sécurité : détecte et prévient les tentatives d'accès non autorisées.",
        ],
      },
      {
        id: "preference-cookies",
        title: "Cookies de préférences",
        content: "Ces cookies mémorisent vos paramètres et préférences pour personnaliser votre expérience sur Combac, tels que votre langue préférée (français, anglais ou arabe) et votre thème d'affichage (mode clair ou sombre).",
        items: [
          "Préférence de langue : mémorise votre langue sélectionnée entre les sessions.",
          "Préférence de thème : mémorise votre sélection de mode sombre ou clair.",
          "Paramètres d'interface : mémorise votre mise en page et vos choix d'affichage.",
        ],
      },
      {
        id: "analytics-cookies",
        title: "Cookies d'analyse",
        content: "Nous utilisons des cookies d'analyse pour comprendre comment les visiteurs interagissent avec notre plateforme. Ces informations nous aident à améliorer les performances, la convivialité et le contenu de Combac. Les données analytiques sont agrégées et anonymisées.",
        items: [
          "Suivi des pages vues : comprendre quelles sections de l'application sont les plus visitées.",
          "Analyse de l'utilisation des fonctionnalités : identifier les fonctionnalités les plus et les moins utilisées.",
          "Rapports d'erreurs et de plantages : détecter et résoudre rapidement les problèmes techniques.",
        ],
      },
      {
        id: "security-cookies",
        title: "Cookies de sécurité",
        content: "Les cookies de sécurité aident à vous protéger, vous et Combac, contre les activités frauduleuses, les accès non autorisés et autres menaces de sécurité. Ces cookies sont essentiels au maintien de l'intégrité et de la sécurité de notre plateforme.",
        items: [
          "Jetons de protection CSRF : préviennent les attaques de falsification de requêtes intersites.",
          "Identifiants de limitation de débit : protègent contre les abus automatisés.",
          "Signaux de détection de fraude : identifient et bloquent les modèles d'activité suspects.",
        ],
      },
      {
        id: "third-party-services",
        title: "Services tiers",
        content: "Certaines fonctionnalités de Combac s'intègrent à des services tiers qui peuvent placer leurs propres cookies sur votre appareil. Nous sélectionnons soigneusement nos partenaires tiers et leur demandons de respecter les réglementations applicables en matière de protection des données. Nous n'autorisons pas les cookies publicitaires tiers sur notre plateforme.",
      },
      {
        id: "managing-cookies",
        title: "Gestion des cookies",
        content: "Vous contrôlez les cookies placés sur votre appareil. Vous pouvez gérer ou désactiver les cookies via les paramètres de votre navigateur ou de votre appareil. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité de Combac.",
        items: [
          "Paramètres du navigateur : la plupart des navigateurs vous permettent de gérer les cookies via leurs paramètres de confidentialité.",
          "Paramètres de l'appareil : sur les appareils mobiles, vous pouvez gérer les autorisations de stockage via les paramètres du système d'exploitation.",
          "Préférence de thème : stockée dans le localStorage de votre navigateur et peut être effacée en effaçant les données du site.",
        ],
      },
      {
        id: "policy-updates",
        title: "Mises à jour de cette politique",
        content: "Nous pouvons mettre à jour cette Politique relative aux cookies de temps à autre au fur et à mesure que notre technologie ou nos exigences légales évoluent. Lorsque nous apportons des modifications importantes, nous vous en informerons via l'application ou par e-mail.",
      },
      {
        id: "contact",
        title: "Informations de contact",
        content: "Si vous avez des questions ou des préoccupations concernant notre utilisation des cookies ou cette politique, veuillez nous contacter à : privacy@combac.app.",
      },
    ],
  },
  termsAndConditions: {
    seo: {
      title: "Conditions générales - Combac",
      description: "Lisez les Conditions générales régissant votre utilisation de la plateforme de fidélité Combac.",
    },
    lastUpdated: "Juin 2026",
    version: "1.0",
    sections: [
      {
        id: "acceptance",
        title: "Acceptation des conditions",
        content: "En téléchargeant, installant ou utilisant l'application mobile ou le site web Combac (collectivement, la « Plateforme »), vous acceptez d'être lié par ces Conditions générales (« Conditions »). Si vous n'acceptez pas ces Conditions, n'utilisez pas la Plateforme. Nous nous réservons le droit de modifier ces Conditions à tout moment.",
      },
      {
        id: "eligibility",
        title: "Éligibilité",
        content: "Vous devez avoir au moins 16 ans pour utiliser Combac. En utilisant la Plateforme, vous déclarez et garantissez que vous remplissez cette condition d'âge, que vous avez la capacité juridique de conclure un accord contraignant et que votre utilisation de la Plateforme ne viole aucune loi applicable.",
      },
      {
        id: "user-accounts",
        title: "Comptes utilisateurs",
        content: "Pour accéder aux fonctionnalités principales de Combac, vous devez créer un compte. Vous êtes responsable de :",
        items: [
          "Fournir des informations exactes, actuelles et complètes lors de l'inscription.",
          "Maintenir la confidentialité de vos identifiants de compte.",
          "Toute activité se produisant sous votre compte.",
          "Nous notifier immédiatement à support@combac.app de toute utilisation non autorisée.",
          "S'assurer que vous seul utilisez votre compte — les comptes sont non transférables.",
        ],
      },
      {
        id: "customer-responsibilities",
        title: "Responsabilités des clients",
        content: "En tant que client utilisant Combac pour participer à des programmes de fidélité, vous acceptez de :",
        items: [
          "Utiliser la Plateforme honnêtement et ne gagner des points que par des transactions légitimes.",
          "Ne pas tenter d'exploiter, manipuler ou abuser des systèmes de points de fidélité.",
          "Ne pas partager les codes QR ou l'accès au compte avec des personnes non autorisées.",
          "Respecter les conditions spécifiques fixées par les programmes de fidélité individuels.",
          "Signaler rapidement toute erreur dans votre solde de points au support.",
        ],
      },
      {
        id: "business-responsibilities",
        title: "Responsabilités des propriétaires d'entreprises",
        content: "Si vous vous inscrivez en tant que propriétaire d'entreprise sur Combac, vous acceptez également de :",
        items: [
          "Fournir des informations commerciales exactes et véridiques.",
          "Honorer tous les programmes de récompenses et de remboursement que vous créez sur la Plateforme.",
          "Ne pas créer de programmes de fidélité frauduleux, trompeurs ou mensongers.",
          "Respecter toutes les lois applicables en matière de protection des consommateurs.",
          "Maintenir la confidentialité de vos identifiants de compte professionnel.",
        ],
      },
      {
        id: "loyalty-programs",
        title: "Programmes de fidélité",
        content: "Combac permet aux entreprises de créer et gérer des programmes de fidélité pour leurs clients. Les propriétaires d'entreprises sont seuls responsables de la conception, des conditions et de l'exécution de leurs programmes de fidélité. Combac agit en tant que plateforme technologique facilitant ces programmes.",
      },
      {
        id: "rewards-redemption",
        title: "Récompenses et remboursements",
        content: "Les points gagnés via Combac sont soumis aux conditions fixées par l'entreprise dont vous participez au programme. Les points n'ont aucune valeur monétaire en dehors de la plateforme Combac et ne peuvent pas être échangés contre de l'argent.",
        items: [
          "Les points sont non transférables et non remboursables.",
          "Les récompenses sont soumises à la disponibilité à la discrétion de l'entreprise.",
          "Combac se réserve le droit d'annuler les points obtenus de manière frauduleuse.",
          "Les entreprises peuvent définir leurs propres politiques d'expiration pour des programmes de remboursement spécifiques.",
        ],
      },
      {
        id: "prohibited-activities",
        title: "Activités interdites",
        content: "Vous acceptez de ne pas vous engager dans les activités interdites suivantes :",
        items: [
          "Créer de faux comptes ou usurper l'identité d'une autre personne ou entreprise.",
          "Utiliser des robots automatisés, des scripts ou des outils pour interagir avec la Plateforme.",
          "Tenter de pirater, d'ingénierie inverse ou de contourner les mesures de sécurité de la Plateforme.",
          "Gagner, transférer ou rembourser frauduleusement des points de fidélité.",
          "Télécharger du code malveillant, des virus ou tout contenu nuisible.",
          "Harceler, menacer ou abuser d'autres utilisateurs ou propriétaires d'entreprises.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Propriété intellectuelle",
        content: "Le nom Combac, le logo, la conception de l'application, l'interface utilisateur, le code source et tout le contenu associé sont la propriété intellectuelle exclusive de Combac et sont protégés par les lois applicables sur le droit d'auteur, les marques déposées et d'autres lois sur la propriété intellectuelle.",
      },
      {
        id: "service-availability",
        title: "Disponibilité du service",
        content: "Nous nous efforçons de maintenir Combac disponible 24h/24 et 7j/7, mais nous ne garantissons pas un accès ininterrompu à la Plateforme. Nous pouvons temporairement suspendre le service pour maintenance, mises à niveau ou en raison d'événements indépendants de notre volonté.",
      },
      {
        id: "liability",
        title: "Limitation de responsabilité",
        content: "Dans toute la mesure permise par la loi applicable, Combac et ses dirigeants, directeurs, employés et agents ne sauraient être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif découlant de votre utilisation ou de votre impossibilité d'utiliser la Plateforme.",
      },
      {
        id: "suspension",
        title: "Suspension de compte",
        content: "Nous nous réservons le droit de suspendre ou de restreindre votre compte à tout moment si nous déterminons que vous avez violé ces Conditions, vous êtes livré à une activité frauduleuse ou représentez un risque pour la Plateforme ou d'autres utilisateurs.",
      },
      {
        id: "termination",
        title: "Résiliation",
        content: "L'une ou l'autre des parties peut mettre fin à la relation utilisateur à tout moment. Vous pouvez supprimer votre compte dans les paramètres de l'application. Nous pouvons mettre fin à votre accès à Combac à tout moment pour violation de ces Conditions. À la résiliation, votre droit d'utiliser la Plateforme cesse immédiatement.",
      },
      {
        id: "changes-to-terms",
        title: "Modifications des conditions",
        content: "Nous pouvons mettre à jour ces Conditions de temps à autre. Lorsque nous apportons des modifications importantes, nous vous en informerons au moins 14 jours à l'avance via l'application ou par e-mail. Votre utilisation continue de la Plateforme après la date d'entrée en vigueur de toute modification constitue votre acceptation des Conditions mises à jour.",
      },
      {
        id: "governing-law",
        title: "Droit applicable",
        content: "Ces Conditions sont régies et interprétées conformément aux lois de la Tunisie, sans égard aux principes de conflits de lois. Tout litige découlant de ces Conditions ou de votre utilisation de la Plateforme sera soumis à la juridiction exclusive des tribunaux compétents de Tunis, Tunisie.",
      },
      {
        id: "contact",
        title: "Informations de contact",
        content: "Si vous avez des questions, des préoccupations ou des litiges concernant ces Conditions générales, veuillez nous contacter à : legal@combac.app.",
      },
    ],
  },
};

export default fr;

