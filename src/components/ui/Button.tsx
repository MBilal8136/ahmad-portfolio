"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "relative font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-green to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-brand-green shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-brand-orange to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 focus:ring-brand-orange shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green hover:shadow-lg",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        initial={false}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{
          scale: 1,
          opacity: [0, 0.3, 0],
          transition: { duration: 0.3 },
        }}
      />
    </motion.button>
  );
}
