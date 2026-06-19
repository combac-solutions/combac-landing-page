import { motion, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import SingleScreenshot from "./singleScreenshot";
import SVGWave from "./svg/wave";
import SVGBlob from "./svg/blob";
import { getAssetPath } from "../../../../utils/assets";

function Header() {
  const {
    googlePlayLink,
    appStoreLink,
    home: { header, partners },
  } = useContext(ConfigContext)!;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section id={header.id} className="relative pb-8 md:pb-4">
      <div className="max-w-screen-lg mx-auto py-4 px-4 md:py-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 items-center md:items-start md:h-[300vh]">
            <div className="static top-40 flex flex-col prose justify-center py-8 md:sticky md:h-[548px]">
              <div className="flex flex-col gap-2 my-4 3xs:flex-row">
                {header.rewards?.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
                    className="flex items-center self-center h-8 md:h-12"
                  >
                    <img src={getAssetPath("/misc/wreath-left.webp")} className="h-full" />
                    <p className="text-xs text-gray-500 whitespace-pre text-center">
                      {reward}
                    </p>
                    <img src={getAssetPath("/misc/wreath-right.webp")} className="h-full" />
                  </motion.div>
                ))}
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="mt-0 mb-4 text-4xl md:text-6xl tracking-tight"
                dir={/[\u0600-\u06FF]/.test(header.headline) ? "rtl" : "ltr"}
              >
                {header.headlineMark ? (
                  <>
                    {header.headline
                      .split(" ")
                      .slice(0, header.headlineMark[0])
                      .join(" ")}{" "}
                    <span className="inline-block relative">
                      <span>
                        {header.headline
                          .split(" ")
                          .slice(...header.headlineMark)
                          .join(" ")}
                      </span>
                      <motion.span
                        animate={{
                          width: "100%",
                          height: "100%",
                        }}
                        transition={{ duration: 0.8, delay: 1, ease: "circOut" }}
                        className="w-0 h-full top-0 left-0 z-[-1] absolute inline-block bg-gradient-to-r from-primary/80 to-secondary/40 rounded-lg"
                      />
                    </span>{" "}
                    {header.headline
                      .split(" ")
                      .slice(header.headlineMark[1])
                      .join(" ")}
                  </>
                ) : (
                  header.headline
                )}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                className="whitespace-pre-wrap text-left m-0 my-1 max-w-md md:text-lg md:max-w-lg opacity-70"
              >
                {header.subtitle}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                className="list-none flex gap-4 m-0 p-0"
              >
                {googlePlayLink && (
                  <li className="m-0 p-0">
                    <a href={googlePlayLink} className="transition-transform hover:scale-105 active:scale-95">
                      <img
                        className="h-14"
                        alt="google play logo"
                        src={getAssetPath("/stores/google-play.svg")}
                      />
                    </a>
                  </li>
                )}
                {appStoreLink && (
                  <li className="m-0 p-0">
                    <a href={appStoreLink} className="transition-transform hover:scale-105 active:scale-95">
                      <img
                        className="h-14"
                        alt="app store logo"
                        src={getAssetPath("/stores/app-store.svg")}
                      />
                    </a>
                  </li>
                )}
              </motion.ul>
              {header.usersDescription && (
                <div className="not-prose flex items-center gap-2 my-4">
                  <ul className="avatar-group -space-x-4">
                    {Array.from(Array(5)).map((_, index) => (
                      <motion.li
                        key={index}
                        initial={{ scale: 0, opacity: 0, x: -10 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        className="avatar"
                      >
                        <div className="w-8 border-2 border-base-100">
                          <img
                            src={getAssetPath(`/avatars/${index + 1}.webp`)}
                            alt={`app user ${index + 1}`}
                          />
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    className="text-sm font-medium opacity-80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, type: "spring" }}
                  >
                    {header.usersDescription}
                  </motion.p>
                </div>
              )}
            </div>
          </div>
          <div className="min-h-[300vh] z-[-1]" ref={ref}>
            <div className="flex justify-center sticky top-28 md:top-40">
              <SVGBlob
                scrollYProgress={scrollYProgress}
                className="-z-10 absolute hidden w-[800px] -top-20 -right-60 md:hidden xl:block opacity-50"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4,
                }}
                className="relative h-[548px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
              >
                <div className="absolute top-[2%] bottom-[2%] left-[4.5%] right-[4.5%] rounded-[2rem] overflow-hidden">
                  {header.screenshots.map((src, index) => (
                    <SingleScreenshot
                      key={src}
                      src={getAssetPath(src)}
                      scrollYProgress={scrollYProgress}
                      index={index}
                      totalCount={header.screenshots.length}
                    />
                  ))}
                </div>
                <img
                  src={getAssetPath("/misc/iphone-frame.webp")}
                  alt="iphone-frame"
                  className="relative z-10 h-full pointer-events-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {partners && (
        <SVGWave className="absolute -bottom-1 left-0 right-0 -z-10" />
      )}
    </section>
  );
}

export default Header;
