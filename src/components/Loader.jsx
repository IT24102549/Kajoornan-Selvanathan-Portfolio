import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2200);
    const completeTimer = setTimeout(() => onComplete?.(), 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden
      bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0F172A_45%,_#111827_100%)]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">

        {/* Animated Dots */}
        <motion.div
          className="mb-8 flex gap-3 sm:mb-10 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${
                i === 0
                  ? "bg-fuchsia-500"
                  : i === 1
                  ? "bg-cyan-400"
                  : "bg-blue-500"
              }`}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.18,
              }}
            />
          ))}
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Mobile */}
          <div className="sm:hidden">
            <h1 className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-black uppercase text-[2.2rem] tracking-[0.18em] leading-tight">
              THE
            </h1>

            <h1 className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-black uppercase text-[2.2rem] tracking-[0.18em] leading-tight">
              JOURNEY
            </h1>
          </div>

          {/* Desktop */}
          <h1
            className="
              hidden sm:block
              bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500
              bg-clip-text text-transparent
              text-5xl md:text-6xl
              font-black uppercase
              tracking-[0.28em]
            "
          >
            THE JOURNEY
          </h1>
        </motion.div>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "35%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 h-[2px] max-w-[140px] rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500"
        />

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="
            mt-6
            text-[10px]
            sm:text-sm
            uppercase
            tracking-[0.38em]
            sm:tracking-[0.55em]
            text-slate-400
            text-center
          "
        >
          KAJOORNAN SELVANATHAN
        </motion.p>

        {/* Ripple Animation */}
        <div className="relative mt-12 flex justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-cyan-400/20"
              animate={{
                scale: [0.2, 2.8],
                opacity: [0.45, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ))}

          <motion.div
            className="h-3 w-3 rounded-full bg-fuchsia-500 shadow-[0_0_20px_#d946ef]"
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}