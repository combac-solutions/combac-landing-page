import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

const planImages = [
  "/misc/wallet-front-color.webp",
  "/misc/money-front-color.webp",
  "/misc/locker-front-color.webp",
];

const planBGs = ["bg-primary/5", "bg-secondary/5", "bg-accent/5"];

function Pricing() {
  const {
    home: { pricing },
  } = useContext(ConfigContext)!;
  if (!pricing) return null;

  return (
    <section
      id={pricing.id}
      className="overflow-hidden max-w-screen-lg mx-auto px-4 py-24"
    >
      <div className="mb-16 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-0 text-4xl md:text-5xl font-bold tracking-tight">
          <AnimatedText text={pricing.title} />
        </h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.6 }}
          viewport={{ once: true }}
          className="text-xl max-w-2xl mt-6"
        >
          {pricing.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col max-w-none gap-8 md:flex-row md:items-stretch lg:gap-10"
      >
        {pricing.plans?.map((plan, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1 + index * 0.1,
            }}
            className="md:w-1/3 flex relative group"
          >
            <div
              className={clsx(
                "relative flex-1 card p-0 border-2 transition-all duration-500 bg-base-100 overflow-hidden",
                plan.featured
                  ? "border-primary shadow-xl scale-105 z-10"
                  : "border-primary/5 shadow-sm hover:border-primary/20 hover:shadow-lg"
              )}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-content text-[10px] font-bold uppercase tracking-widest py-1.5 text-center absolute top-0 left-0 right-0 z-20">
                  Most Popular
                </div>
              )}
              <div className="card-body p-0 flex flex-col h-full">
                <div className="p-8 text-center pb-4">
                  <div className={clsx("h-32 w-32 mx-auto rounded-3xl p-6 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", planBGs[index])}>
                    <img
                      src={getAssetPath(planImages[index])}
                      alt="pricing plan"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight mb-2">{plan.title}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-black">{plan.price}</span>
                    {plan.price !== "Free" && <span className="opacity-50 text-sm">/mo</span>}
                  </div>
                </div>

                <div className="flex-1 px-8 pb-8 flex flex-col gap-4">
                  <div className="h-px w-full bg-primary/10 mb-2" />
                  {plan.rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 shrink-0">
                        <svg className={clsx("h-4 w-4", plan.featured ? "text-primary" : "text-primary/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm opacity-80 leading-snug">{row}</p>
                    </div>
                  ))}
                </div>

                {pricing.actionText && (
                  <div className="p-2">
                    <a
                      href={getAssetPath("/app")}
                      className={clsx(
                        "btn no-animation btn-lg w-full rounded-xl transition-all duration-300",
                        plan.featured ? "btn-primary hover:scale-[1.02] shadow-lg shadow-primary/20" : "btn-outline border-primary/20 hover:bg-primary/5 hover:border-primary"
                      )}
                    >
                      {pricing.actionText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
