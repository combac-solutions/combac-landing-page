import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";

function RealLifeUsage() {
  const {
    home: { realLifeUsage },
  } = useContext(ConfigContext)!;
  if (!realLifeUsage) return null;

  return (
    <section id={realLifeUsage.id} className="max-w-screen-xl mx-auto px-4 py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">{realLifeUsage.tagline}</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {realLifeUsage.title}
          </h2>
          <div className="h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full w-20" />
          <p className="text-lg opacity-70 leading-relaxed max-w-lg">
            {realLifeUsage.description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10"
        >
          <img 
            src="/user-in-cofeeshop.png" 
            alt={realLifeUsage.imageAlt} 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default RealLifeUsage;
