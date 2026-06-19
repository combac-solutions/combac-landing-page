import AppBanner from "@components/appBanner";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import LegalDocumentLayout from "@components/legalDocument";
import { ConfigContext } from "utils/configContext";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
}

function CookiesPolicyPage({ config }: Props) {
  return (
    <ConfigContext.Provider value={config}>
      <main>
        <Navbar />
        <LegalDocumentLayout document={config.cookiesPolicy} locale={config.locale} />
        <AppBanner />
        <Footer />
      </main>
    </ConfigContext.Provider>
  );
}

export default CookiesPolicyPage;
