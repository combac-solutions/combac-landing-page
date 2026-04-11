import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

function Features() {
  const {
    home: { features },
  } = useContext(ConfigContext)!;
  if (!features) return null;

  return (
    <section id={features.id} className="max-w-screen-lg mx-auto px-4 py-24">
      <div className="mb-16 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h2 className="mb-3 text-4xl md:text-5xl font-bold tracking-tight">
          <AnimatedText text={features.title} />
        </h2>
        <motion.div
          className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:120px] md:[--w:200px]"
          initial={{ width: 0 }}
          whileInView={{ width: "var(--w)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
        />
        {features.subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg max-w-2xl mt-6 leading-relaxed"
          >
            {features.subtitle}
          </motion.p>
        )}
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8"
      >
        {features.cards.map((feat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={clsx(
              "shadow-sm hover:shadow-xl transition-all duration-500 border-primary/5 border-2 card relative overflow-hidden group px-8 md:px-12 py-4 bg-base-100",
              {
                "col-span-1 sm:col-span-2":
                  index === features!.cards.length - 1 &&
                  features!.cards.length % 2 === 1,
              }
            )}
          >
            <div className="relative mb-6 mt-6 flex justify-center">
              <div
                className="absolute inset-0 bg-primary/5 -z-10 rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <figure className="py-6">
                <img
                  src={getAssetPath(feat.icon)}
                  alt="feature icon"
                  className="w-32 md:w-40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </figure>
            </div>
            <div className="w-full pt-2 px-0 card-body items-center text-center transition-transform group-hover:translate-y-[-4px] duration-300">
              <h3 className="card-title text-2xl font-bold tracking-tight">{feat.title}</h3>
              <div className="h-0.5 w-12 bg-primary/20 my-2 group-hover:w-24 transition-all duration-500" />
              <p className="opacity-70 leading-relaxed text-base">{feat.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
