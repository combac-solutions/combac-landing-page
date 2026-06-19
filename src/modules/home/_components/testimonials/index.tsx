import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  const {
    home: { testimonials },
  } = useContext(ConfigContext)!;
  if (!testimonials) return null;

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12">
      <div className="mb-6 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-0">
          <AnimatedText text={testimonials.title} />
        </h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          {testimonials.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          loop
          autoplay
          modules={[Autoplay]}
          spaceBetween={32}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={1}
        >
          {testimonials.cards.map(({ name, comment }, index) => (
            <SwiperSlide className="!h-[22rem] my-2" key={index}>
              <div className="h-full card shadow-xl border border-white/10 bg-[#1E293B]/80 backdrop-blur-md group/testi">
                <div className="p-6 card-body relative">
                  <div className="absolute top-4 right-6 uppercase text-[8px] font-bold tracking-[0.2em] text-white/20">Beta phase</div>
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          key={index}
                          className="h-4 w-4 mask mask-star-2 bg-primary/40"
                        />
                      ))}
                  </div>
                  <p className="text-white/70 italic transition-all duration-500 leading-relaxed text-sm">"{comment}"</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <h2 className="card-title text-white text-base font-bold">{name}</h2>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Early Tester</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonials;
