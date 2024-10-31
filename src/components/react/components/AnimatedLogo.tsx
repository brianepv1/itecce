// src/components/react/ItecceLoading/components/AnimatedLogo.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { globeVariants, bookVariants, textVariants } from '../variants'

interface AnimatedLogoProps {
  shouldAnimate: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ shouldAnimate }) => (
  <>
    <div className="relative w-32 h-32 mb-8 sm:w-48 sm:h-48 md:w-64 md:h-64">
      <motion.div
        variants={globeVariants}
        className="absolute inset-0"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0093d9"
            strokeWidth="2"
            className="opacity-20"
          />
          <motion.path
            d="M10,50 Q50,-10 90,50 Q50,110 10,50"
            fill="none"
            stroke="#0093d9"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.7, ease: "easeInOut" }}
          />
          <motion.path
            d="M50,10 Q110,50 50,90 Q-10,50 50,10"
            fill="none"
            stroke="#0093d9"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.7, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>
      </motion.div>
      <motion.div
        variants={bookVariants}
        className="absolute inset-0 flex items-center justify-center"
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
      >
        <div className="w-16 h-12 bg-[#00004e] rounded-sm transform rotate-12 sm:w-24 sm:h-18 md:w-32 md:h-24" />
      </motion.div>
    </div>
    <motion.div
      variants={textVariants}
      className="flex flex-col items-center"
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      <span className="text-4xl font-bold tracking-wider text-[#00004e] sm:text-5xl md:text-6xl">
        ITECCE
      </span>
      <span className="text-xl tracking-widest text-[#0093d9] mt-2 sm:text-2xl md:text-3xl">
        UNIVERSIDAD
      </span>
    </motion.div>
  </>
)
