import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ConfigContext } from "../../utils/configContext";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇹🇳" },
];

function LanguageSelector() {
  const { locale: currentLang = "en" } = useContext(ConfigContext)!;

  const changeLanguage = (newCode: string) => {
    if (newCode === currentLang) return;

    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    
    // Detect if we are currently in a locale-prefixed path
    const isCurrentAtSubfolder = ["fr", "ar"].includes(pathSegments[0]);
    
    let newPath = "";

    if (newCode === "en") {
      // Moving to English (no prefix)
      if (isCurrentAtSubfolder) {
        newPath = "/" + pathSegments.slice(1).join("/");
      } else {
        newPath = currentPath;
      }
    } else {
      // Moving to fr/ar
      if (isCurrentAtSubfolder) {
        newPath = "/" + newCode + "/" + pathSegments.slice(1).join("/");
      } else {
        // We are at root, add the code prefix
        newPath = "/" + newCode + currentPath;
      }
    }

    // Clean up slashes
    newPath = newPath.replace(/\/+/g, "/");
    if (newPath.length > 1 && newPath.endsWith("/")) {
      newPath = newPath.slice(0, -1);
    }

    window.location.href = newPath || "/";
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
        <GlobeAltIcon className="h-5 w-5" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 mt-4 border border-base-200"
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={currentLang === lang.code ? "active" : ""}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
