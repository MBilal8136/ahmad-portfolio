"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  const baseClasses =
    "bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden relative group";

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }
          : {}
      }
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Shine effect */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          initial={false}
        />
      )}
    </motion.div>
  );
}
