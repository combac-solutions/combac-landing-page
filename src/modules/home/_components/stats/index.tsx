import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { getAssetPath } from "../../../../utils/assets";

function AbstractLineChart() {
  return (
    <div className="relative h-32 w-full group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/10">
      <div className="absolute top-2 left-4 text-[10px] font-bold text-white/30 tracking-widest uppercase">System Activity</div>
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,20 V100 H0 Z"
          fill="url(#chartGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,20"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeLinecap="round"
          className="blur-[2px] opacity-70"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-md">
        <span className="text-white font-bold text-xs tracking-widest uppercase italic">Launching Soon</span>
      </div>
    </div>
  );
}

function AbstractBarChart() {
  return (
    <div className="relative h-32 w-full group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/10">
      <div className="absolute top-2 left-4 text-[10px] font-bold text-white/30 tracking-widest uppercase">Business Growth</div>
      <div className="flex items-end justify-between h-full gap-2 pt-6">
        {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
            className="flex-1 bg-gradient-to-t from-secondary/40 to-primary/80 rounded-t-sm blur-[1px] opacity-60 group-hover:blur-0 group-hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
}

function AbstractPieChart() {
  return (
    <div className="relative h-32 w-full group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/10">
      <div className="absolute top-2 left-4 text-[10px] font-bold text-white/30 tracking-widest uppercase">Reward Distribution</div>
      <div className="flex items-center justify-center h-full">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 32 32">
          <circle r="16" cx="16" cy="16" fill="transparent" stroke="#10B981" strokeWidth="32" strokeDasharray="60 100" className="opacity-20 blur-[1px]" />
          <circle r="16" cx="16" cy="16" fill="transparent" stroke="#A78BFA" strokeWidth="32" strokeDasharray="30 100" strokeDashoffset="-60" className="opacity-40 blur-[2px]" />
          <circle r="16" cx="16" cy="16" fill="transparent" stroke="#7C3AED" strokeWidth="32" strokeDasharray="10 100" strokeDashoffset="-90" className="opacity-60 blur-[3px]" />
        </svg>
        <div className="ml-4 flex flex-col gap-1">
          <div className="h-1 w-8 bg-primary rounded-full blur-[1px]" />
          <div className="h-1 w-12 bg-secondary rounded-full blur-[1px]" />
          <div className="h-1 w-6 bg-accent rounded-full blur-[1px]" />
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const {
    home: { stats },
  } = useContext(ConfigContext)!;
  if (!stats) return null;

  return (
    <section id={stats.id} className="relative py-32 px-4 overflow-hidden bg-[#0F172A]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-1" />

      <div className="max-w-screen-lg mx-auto text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Ecosystem Status</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {stats.title}
          </h2>
          {stats.subtitle && (
            <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              {stats.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Stats Items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-y-10 gap-x-6"
            >
              {stats.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  transition={{ 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 100,
                    damping: 15
                  }}
                  className="flex flex-col group"
                >
                  <div className="text-left relative">
                    <motion.span 
                      className="block text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 blur-[20px] group-hover:blur-[6px] transition-all duration-700"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {item.value}
                    </motion.span>
                    <div className="absolute top-0 right-0 opacity-40 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] text-primary font-bold italic tracking-wider">SOON</span>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-white/20 uppercase tracking-[0.3em]">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Abstract Visuals */}
            <div className="flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <AbstractLineChart />
                </motion.div>
                <div className="grid grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <AbstractBarChart />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <AbstractPieChart />
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
