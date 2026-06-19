import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppBanner from "../../components/appBanner";
import { ConfigContext } from "../../utils/configContext";
import type { TemplateConfig } from "../../utils/configType";
import Header from "./_components/header";
import Features from "./_components/features";
import AiFeature from "./_components/aiFeature";
import RealLifeUsage from "./_components/realLifeUsage";
import Faq from "./_components/faq";
import HowItWorks from "./_components/howItWorks";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";

interface Props {
  config: TemplateConfig;
}

function Home({ config }: Props) {
  return (
    <ConfigContext.Provider value={config}>
      <main>
        <Navbar />
        <Header />
        <RealLifeUsage />
        <Features />
        <AiFeature />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <AppBanner />
        <Footer />
      </main>
    </ConfigContext.Provider>
  );
}

export default Home;
