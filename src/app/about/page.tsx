"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Users,
  Heart,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";

const qualifications = [
  {
    title: "Master's in Human Nutrition & Dietetics",
    institution: "University of Management and Technology",
    description:
      "Specialized in therapeutic nutrition and chronic disease management.",
  },
  {
    title: "Works as a Dietitian in Alkhidmat Hospital",
    institution: "Alkhidmat Hospital",
    description:
      " I was responsible for providing nutritional advice to diabetic patients and creating meal plans for them. ",
  },
  {
    title: "Registered Dietitian (RD)",
    institution: "Academy of Nutrition and Dietetics",
    description:
      "Certified professional with expertise in medical nutrition therapy.",
  },
  {
    title: "Bachelor's in Human Nutrition & Dietetics",
    institution: "Government College University Faisalabad",
    description:
      "Comprehensive foundation in food chemistry and human nutrition.",
  },
];

const specialties = [
  {
    icon: <Heart className="w-8 h-8 text-brand-green" />,
    title: "Weight Management",
    description:
      "Personalized plans for sustainable weight loss and healthy weight gain.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand-orange" />,
    title: "Family Nutrition",
    description:
      "Nutrition guidance for all family members, from children to seniors.",
  },
  {
    icon: <Award className="w-8 h-8 text-brand-green" />,
    title: "Sports Nutrition",
    description:
      "Performance-focused nutrition for athletes and active individuals.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-brand-orange" />,
    title: "Chronic Disease Management",
    description:
      "Specialized care for diabetes, heart disease, and other conditions.",
  },
];

const stats = [
  { number: "500+", label: "Clients Helped" },
  { number: "5+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-orange-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-brand-green/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-16 h-16 bg-brand-orange/10 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-green/15 rounded-full blur-lg"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brand-green/20 rounded-full px-4 py-2 mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span className="text-sm font-medium text-brand-green">
                  Certified Nutritionist
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Meet{" "}
                <span className="relative">
                  <span className="text-brand-green">Fiza</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-orange rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Certified Nutritionist & Registered Dietitian with over 5 years
                of experience helping people achieve their health goals through
                personalized nutrition plans.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My passion for nutrition began during my own health journey, and
                now I'm dedicated to helping others discover the power of proper
                nutrition for optimal health and wellness.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-5 h-5 text-brand-green" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">
                    Certified RD
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-5 h-5 text-brand-green" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">
                    Master's Degree
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-5 h-5 text-brand-green" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">
                    500+ Clients
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/image.jpeg"
                  alt="Fiza - Professional Nutritionist"
                  fill
                  className="object-cover object-fit group-hover:scale-110 transition-transform duration-500"
                  style={{
                    objectPosition: "center -110px",
                    objectFit: "cover",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-brand-green/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-orange/20 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-orange rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              My <span className="text-brand-green">Impact</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Numbers that reflect my commitment to helping people achieve their
              health goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="relative p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-brand-green mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-24 h-24 bg-brand-green/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-20 h-20 bg-brand-orange/5 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Education &{" "}
              <span className="text-brand-green">Certifications</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My journey in nutrition and dietetics has been built on a strong
              educational foundation.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-brand-green to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CheckCircle className="w-8 h-8" />
                      </motion.div>
                    </motion.div>

                    {/* Animated ring around icon */}
                    <motion.div
                      className="absolute inset-0 w-16 h-16 border-2 border-brand-green/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="p-6 relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                      />

                      <motion.h3
                        className="text-xl font-semibold text-gray-900 mb-2 relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {qual.title}
                      </motion.h3>
                      <motion.p
                        className="text-brand-green font-medium mb-2 relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {qual.institution}
                      </motion.p>
                      <p className="text-gray-600 relative z-10">
                        {qual.description}
                      </p>
                    </Card>
                  </motion.div>
                </div>

                {/* Enhanced connecting line */}
                {index < qualifications.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-brand-green to-brand-orange"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-28 h-28 bg-brand-orange/5 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="text-brand-green">Specialties</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I specialize in various areas of nutrition to provide
              comprehensive care for all your health needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                  />

                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-green/10 to-brand-orange/10 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        {specialty.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-xl font-semibold text-gray-900 mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {specialty.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {specialty.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-brand-green/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-orange/20 rounded-full"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7,
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-green-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full blur-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Icon */}
            <motion.div
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              My <span className="text-green-200">Philosophy</span>
            </motion.h2>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                "I believe that nutrition is not about restriction, but about
                nourishing your body with the right foods to help you feel your
                best. Every person is unique, and so should be their nutrition
                plan."
              </motion.p>

              {/* Quote decoration */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-white/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-white/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/appointment"
                className="inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="bg-white text-brand-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                  />
                  <span className="relative z-10">Book a Consultation</span>
                </motion.button>
              </motion.a>

              <motion.a
                href="/contact"
                className="inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-green transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                  />
                  <span className="relative z-10">Get in Touch</span>
                </motion.button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
