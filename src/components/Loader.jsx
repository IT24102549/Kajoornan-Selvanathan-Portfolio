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

      <div className="relative flex flex-col items-center">

        {/* Animated Dots */}
        <motion.div
          className="mb-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === 0
                  ? "bg-fuchsia-500"
                  : i === 1
                  ? "bg-cyan-400"
                  : "bg-blue-500"
              }`}
              animate={{
                y: [0, -10, 0],
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
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text
          text-4xl font-black uppercase tracking-[0.35em] text-transparent
          md:text-6xl"
        >
          ONE LIFE EQUATION
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500"
        />

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-6 text-xs uppercase tracking-[0.6em] text-slate-400 md:text-sm"
        >
          KAJOORNAN SELVANATHAN
        </motion.p>

        {/* Ripple Animation */}
        <div className="relative mt-12 flex justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-cyan-400/25"
              animate={{
                scale: [0.2, 2.8],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
              style={{
                width: 22,
                height: 22,
              }}
            />
          ))}

          <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_18px_#d946ef]" />
        </div>
      </div>
    </motion.div>
  );
}