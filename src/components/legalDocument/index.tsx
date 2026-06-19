import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import type { LegalDocument, LegalSection } from "utils/configType";

interface Props {
  document: LegalDocument;
  locale?: string;
}

function CopyLinkButton({ sectionId }: { sectionId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link to section"
      className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded-md hover:bg-primary/10 text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.svg
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-4 h-4 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : (
          <motion.svg
            key="link"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}

function SectionItem({ section, index, isRtl }: { section: LegalSection; index: number; isRtl: boolean }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.04 }}
      className="border border-base-300/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Section Header / Accordion Toggle */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className={clsx(
          "w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-base-100 hover:bg-base-200/50 transition-colors group",
          isRtl && "flex-row-reverse"
        )}
        aria-expanded={isOpen}
      >
        <div className={clsx("flex items-center gap-3", isRtl && "flex-row-reverse")}>
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <h2 className="text-base md:text-lg font-bold tracking-tight text-base-content">
            {section.title}
          </h2>
          <CopyLinkButton sectionId={section.id} />
        </div>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-5 h-5 text-primary/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Section Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={clsx("px-5 md:px-6 pb-6 pt-3 border-t border-base-300/40", isRtl && "text-right")}>
              <p className="text-base-content/75 leading-relaxed text-sm md:text-base">
                {section.content}
              </p>
              {section.items && section.items.length > 0 && (
                <ul className={clsx("mt-4 space-y-2", isRtl ? "pr-1" : "pl-1")}>
                  {section.items.map((item, i) => (
                    <li key={i} className={clsx("flex items-start gap-3 text-sm md:text-base text-base-content/75", isRtl && "flex-row-reverse")}>
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function LegalDocumentLayout({ document, locale }: Props) {
  const isRtl = locale === "ar";
  const [activeSection, setActiveSection] = useState<string>(document.sections[0]?.id || "");
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll to hash on load
    if (window.location.hash) {
      const el = window.document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    document.sections.forEach((s) => {
      const el = window.document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [document.sections]);

  const scrollToSection = (id: string) => {
    const el = window.document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen">
      {/* Page Hero Header */}
      <div className="relative overflow-hidden border-b border-base-300/50 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, oklch(var(--p) / 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(var(--s) / 0.06) 0%, transparent 50%)"
          }}
        />
        <div className="relative max-w-screen-lg mx-auto px-4 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx("flex flex-col gap-4", isRtl && "items-end text-right")}
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge badge-primary badge-outline font-mono text-xs px-3 py-2">
                v{document.version}
              </span>
              <span className="badge badge-ghost font-mono text-xs px-3 py-2">
                {document.lastUpdated}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-base-content">
              {document.sections[0] ? document.sections[0].title.split(" ")[0] === "Introduction"
                ? document.seo.title.replace(" - Combac", "")
                : document.seo.title.replace(" - Combac", "")
              : document.seo.title.replace(" - Combac", "")}
            </h1>
            <p className="text-base-content/60 text-lg max-w-2xl">{document.seo.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile TOC Toggle */}
      <div className="lg:hidden sticky top-16 z-30 bg-base-100/90 backdrop-blur border-b border-base-300/50 px-4 py-3">
        <button
          onClick={() => setTocOpen((o) => !o)}
          className={clsx("flex items-center gap-2 text-sm font-semibold text-primary w-full", isRtl && "flex-row-reverse justify-end")}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          {locale === "ar" ? "جدول المحتويات" : locale === "fr" ? "Table des matières" : "Table of Contents"}
          <motion.svg
            animate={{ rotate: tocOpen ? 180 : 0 }}
            className={clsx("w-4 h-4 ml-auto", isRtl && "mr-auto ml-0")}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {tocOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-3 space-y-1"
            >
              {document.sections.map((section, i) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={clsx(
                      "w-full text-left text-sm py-1.5 px-2 rounded-lg transition-colors",
                      activeSection === section.id
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-base-content/60 hover:text-base-content hover:bg-base-200",
                      isRtl && "text-right"
                    )}
                  >
                    <span className="text-xs opacity-50 mr-2">{i + 1}.</span>{section.title}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Main Layout: Sidebar TOC + Content */}
      <div className="max-w-screen-lg mx-auto px-4 py-10 md:py-16 flex gap-10 lg:gap-16">
        {/* Sticky Sidebar TOC (desktop) */}
        <aside
          className={clsx(
            "hidden lg:block w-64 flex-shrink-0",
            isRtl ? "order-last" : "order-first"
          )}
        >
          <div className="sticky top-24">
            <p className={clsx("text-xs font-bold uppercase tracking-widest text-base-content/40 mb-4", isRtl && "text-right")}>
              {locale === "ar" ? "المحتويات" : locale === "fr" ? "Sommaire" : "On this page"}
            </p>
            <ul className="space-y-1">
              {document.sections.map((section, i) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={clsx(
                      "w-full text-sm py-1.5 px-3 rounded-lg transition-all duration-200 border-l-2",
                      isRtl && "border-l-0 border-r-2 text-right",
                      activeSection === section.id
                        ? "border-primary text-primary bg-primary/8 font-semibold"
                        : "border-transparent text-base-content/50 hover:text-base-content hover:bg-base-200 hover:border-primary/30"
                    )}
                  >
                    <span className="text-xs opacity-40 mr-1.5">{i + 1}.</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Document Content */}
        <main className="flex-1 min-w-0 space-y-4">
          {document.sections.map((section, index) => (
            <SectionItem key={section.id} section={section} index={index} isRtl={isRtl} />
          ))}

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={clsx(
              "mt-10 p-5 rounded-2xl bg-base-200/50 border border-base-300/50 text-sm text-base-content/50 flex items-start gap-3",
              isRtl && "flex-row-reverse text-right"
            )}
          >
            <svg className="w-5 h-5 text-primary/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {locale === "ar"
                ? `آخر تحديث: ${document.lastUpdated} — الإصدار ${document.version}`
                : locale === "fr"
                ? `Dernière mise à jour : ${document.lastUpdated} — Version ${document.version}`
                : `Last updated: ${document.lastUpdated} — Version ${document.version}`}
            </span>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default LegalDocumentLayout;
