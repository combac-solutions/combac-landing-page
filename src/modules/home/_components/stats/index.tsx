import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

function Stats() {
  const {
    home: { stats },
  } = useContext(ConfigContext)!;
  if (!stats) return null;

  return (
    <section id={stats.id} className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-neutral/20 -z-10" />
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-lg mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <AnimatedText text={stats.title} />
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125" />
                <motion.img
                  src={getAssetPath(item.icon)}
                  alt={item.label}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-20 h-20 md:w-24 md:h-24 relative z-10 drop-shadow-2xl"
                />
              </div>
              
              <div className="text-center relative z-10">
                <motion.span 
                  className="block text-3xl md:text-5xl font-black text-primary tracking-tighter mb-1"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {item.value}
                </motion.span>
                <span className="text-sm md:text-base font-medium opacity-60 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
