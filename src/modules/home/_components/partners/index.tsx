import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

function Partners() {
  const {
    home: { partners },
  } = useContext(ConfigContext)!;
  if (!partners) return null;

  return (
    <section id={partners.id} className="relative py-12 px-4">
      <div className="absolute inset-0 bg-neutral/30 -z-10" />
      <div className="max-w-screen-lg mx-auto mb-4 flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          className="text-neutral-content text-sm uppercase tracking-[0.2em] font-bold mb-12"
        >
          {partners.title}
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {partners.logos.map((logo, index) => (
            <motion.img
              key={index}
              src={getAssetPath(logo)}
              alt="partner logo"
              variants={{
                hidden: { y: 20, opacity: 0, filter: "grayscale(100%)" },
                visible: { y: 0, opacity: 0.6, filter: "grayscale(100%)" },
              }}
              whileHover={{ opacity: 1, filter: "grayscale(0%)", scale: 1.1 }}
              transition={{ 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 100,
                duration: 0.5 
              }}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
