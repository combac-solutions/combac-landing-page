export type LegalSection = {
    id: string;
    title: string;
    content: string;
    items?: string[];
};

export type LegalDocument = {
    seo: {
        title: string;
        description: string;
    };
    lastUpdated: string;
    version: string;
    sections: LegalSection[];
};

export type TemplateConfig = {
    locale?: string;
    name: string;
    seo: {
        title: string;
        description: string;
    };
    logo: string;
    theme: string;
    backgroundGrid: boolean;
    forceTheme: boolean;
    showThemeSwitch: boolean;
    googlePlayLink?: string | undefined;
    appStoreLink?: string | undefined;
    termsAndConditions: LegalDocument;
    privacyPolicy: LegalDocument;
    cookiesPolicy: LegalDocument;
    footer: {
        links: {
            title: string;
            href: string;
        }[];
        legalLinks: {
            termsAndConditions: boolean;
            privacyPolicy: boolean;
            cookiesPolicy: boolean;
        };
        socials?: {
            facebook?: string | undefined;
            instagram?: string | undefined;
            twitter?: string | undefined;
        } | undefined;
    };
    topNavbar: {
        cta?: string | undefined;
        disableWidthAnimation?: boolean | undefined;
        links: {
            title: string;
            href: string;
        }[];
        hideGooglePlay?: boolean | undefined;
        hideAppStore?: boolean | undefined;
    };
    appBanner?: {
        id?: string | undefined;
        title: string;
        subtitle: string;
        screenshots: string[];
    } | undefined;
    home: {
        seo: {
            title: string;
            description: string;
        };
        header: {
            id?: string | undefined;
            headline: string;
            subtitle: string;
            headlineMark?: number[] | undefined;
            screenshots: string[];
            rewards?: string[] | undefined;
            usersDescription?: string | undefined;
        };
        testimonials?: {
            id?: string | undefined;
            title: string;
            subtitle?: string | undefined;
            cards: {
                name: string;
                comment: string;
            }[];
        } | undefined;
        partners?: {
            id?: string | undefined;
            title: string;
            logos: string[];
        } | undefined;
        stats?: {
            id?: string | undefined;
            title: string;
            subtitle?: string | undefined;
            items: {
                value: string;
                label: string;
                icon: string;
            }[];
        } | undefined;
        faq?: {
            id?: string | undefined;
            title: string;
            qa: {
                question: string;
                answer: string;
            }[];
        } | undefined;
        howItWorks?: {
            id?: string | undefined;
            title: string;
            subtitle?: string | undefined;
            steps: {
                image: string;
                title: string;
                subtitle: string;
            }[];
        } | undefined;
        features?: {
            id?: string | undefined;
            title: string;
            subtitle?: string | undefined;
            cards: {
                icon: string;
                title: string;
                subtitle: string;
            }[];
        } | undefined;
        pricing?: {
            id?: string | undefined;
            title: string;
            actionText?: string | undefined;
            subtitle?: string | undefined;
            modalTitle?: string | undefined;
            modalDescription?: string | undefined;
            modalCloseText?: string | undefined;
            plans?: {
                featured?: boolean | undefined;
                badge?: string | undefined;
                title: string;
                price: string;
                rows: string[];
            }[] | undefined;
        } | undefined;
        aiFeature?: {
            id?: string | undefined;
            title: string;
            subtitle: string;
            badge?: string | undefined;
            image?: string | undefined;
        } | undefined;
        realLifeUsage?: {
            id?: string | undefined;
            tagline: string;
            title: string;
            description: string;
            imageAlt: string;
        } | undefined;
    };
}