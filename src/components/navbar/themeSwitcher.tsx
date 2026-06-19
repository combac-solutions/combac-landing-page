import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../../utils/configContext";
import { motion, AnimatePresence } from "framer-motion";

function ThemeSwitcher() {
  const config = useContext(ConfigContext);
  const [mode, setMode] = useState<string>();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || !theme) {
      setMode("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setMode(config?.theme || "light");
      document.documentElement.setAttribute("data-theme", config?.theme || "light");
    }
  }, [config?.theme]);

  const toggleTheme = () => {
    const newMode = mode === "dark" ? (config?.theme || "light") : "dark";
    document.documentElement.setAttribute("data-theme", newMode);
    localStorage.setItem("theme", newMode);
    setMode(newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle btn-sm md:btn-md hover:bg-base-200 transition-colors duration-300 relative overflow-hidden"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mode === "dark" ? (
          <motion.svg
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-warning"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeSwitcher;
