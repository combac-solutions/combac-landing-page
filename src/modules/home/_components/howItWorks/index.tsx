import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import SwirlArrowBottomLeft from "./svg/swirlArrowBottomLeft";
import SwirlArrowBottomRight from "./svg/swirlArrowBottomRight";
import SwirlArrowBottom from "./svg/swirlArrowBottom";
import { getAssetPath } from "../../../../utils/assets";

function HowItWorks() {
  const {
    home: { howItWorks },
  } = useContext(ConfigContext)!;

  if (!howItWorks) return null;

  return (
    <section
      id={howItWorks.id}
      className="overflow-hidden max-w-screen-lg mx-auto px-4 py-24"
    >
      <div className="mb-20 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-3 text-4xl md:text-5xl font-bold tracking-tight">
          <AnimatedText text={howItWorks.title} />
        </h2>
        {howItWorks.subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg max-w-2xl mt-6 leading-relaxed"
          >
            {howItWorks.subtitle}
          </motion.p>
        )}
      </div>
      <div className="flex flex-col gap-40 md:gap-52">
        {howItWorks.steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={clsx(
              "text-primary relative flex flex-col items-center rounded-md md:flex-row",
              {
                "md:flex-row-reverse": index % 2 === 0,
              }
            )}
          >
            {index < howItWorks!.steps.length - 1 && (
              <>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                      opacity: 0
                    },
                    visible: { scale: 1, translateX: "-50%", opacity: 1 },
                  }}
                  transition={{ stiffness: 100, type: "spring", delay: 0.5 }}
                  className="hidden w-48 absolute -bottom-44 left-1/2 md:block pointer-events-none"
                >
                  {index % 2 === 0 ? (
                    <SwirlArrowBottomLeft />
                  ) : (
                    <SwirlArrowBottomRight />
                  )}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                      opacity: 0
                    },
                    visible: { scale: 1, translateX: "-50%", opacity: 1 },
                  }}
                  transition={{ stiffness: 100, type: "spring", delay: 0.5 }}
                  className="w-16 absolute -bottom-48 left-1/2 md:hidden md:-bottom-36 pointer-events-none"
                >
                  <SwirlArrowBottom />
                </motion.div>
              </>
            )}
            <motion.div
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="mb-8 flex flex-col text-center justify-center prose flex-1"
            >
              <div className="pb-2 font-sketch text-7xl md:text-8xl text-primary">
                {index < 10 && 0}
                {index + 1}
              </div>
              <h3 className="mt-0 text-3xl font-bold tracking-tight">{step.title}</h3>
              <p className="mx-auto max-w-sm opacity-70 text-base leading-relaxed">{step.subtitle}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { scale: 0.9, opacity: 0, y: 30 },
                visible: { scale: 1, opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
              className="flex-1 flex justify-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                <img
                  className="rounded-[2.5rem] lg:w-[80%] shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                  src={getAssetPath(step.image)}
                  alt={`step ${index}`}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
