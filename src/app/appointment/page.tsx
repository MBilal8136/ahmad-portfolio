"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Toast from "@/components/ui/Toast";

const services = [
  {
    id: "weight-loss",
    name: "Weight Loss Consultation",
  },
  {
    id: "muscle-building",
    name: "Muscle Building Plan",
  },
  {
    id: "diabetes-management",
    name: "Diabetes Management",
  },
  {
    id: "pregnancy-nutrition",
    name: "Pregnancy Nutrition",
  },
  {
    id: "sports-nutrition",
    name: "Sports Nutrition",
  },
  {
    id: "general-consultation",
    name: "General Nutrition Consultation",
  },
  {
    id: "heart-health",
    name: "Heart Health & Cardiovascular Nutrition",
  },
  {
    id: "pediatric-nutrition",
    name: "Pediatric Nutrition for Children",
  },
  {
    id: "geriatric-nutrition",
    name: "Geriatric Nutrition for Seniors",
  },
  {
    id: "eating-disorders",
    name: "Eating Disorders Recovery",
  },
  {
    id: "food-allergies",
    name: "Food Allergies & Intolerances",
  },
  {
    id: "gut-health",
    name: "Gut Health & Digestive Wellness",
  },
  {
    id: "hormonal-balance",
    name: "Hormonal Balance & PCOS",
  },
  {
    id: "thyroid-nutrition",
    name: "Thyroid Health & Nutrition",
  },
  {
    id: "immune-support",
    name: "Immune System Support",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function Appointment() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    type: "success" | "error" | "warning";
    title: string;
    message?: string;
  }>({
    isVisible: false,
    type: "success",
    title: "",
    message: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.notes,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({
          isVisible: true,
          type: "success",
          title: "Appointment booked successfully!",
          message: "Confirmation emails have been sent to both you and Fiza.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        });
      } else {
        throw new Error(result.error || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setToast({
        isVisible: true,
        type: "error",
        title: "Failed to book appointment",
        message: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = services.find((s) => s.id === formData.service);

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
              duration: 3,
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
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-green/15 rounded-full blur-lg"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brand-green/20 rounded-full px-4 py-2 mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-sm font-medium text-brand-green">
                Certified Nutritionist
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Book Your{" "}
              <span className="relative">
                <span className="text-brand-green">Appointment</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-orange rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Schedule a personalized consultation with our certified
              nutritionist. Take the first step towards achieving your health
              goals.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>Free Consultation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 relative overflow-hidden group">
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                />

                <motion.h2
                  className="text-2xl font-bold text-gray-900 mb-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  Appointment Details
                  <motion.div
                    className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-brand-green to-brand-orange rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  />
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold text-gray-900 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <User className="w-5 h-5 text-brand-green" />
                      </motion.div>
                      Personal Information
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.15 }}
                      >
                        <Input
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.2 }}
                      >
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.25 }}
                    >
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+1 (555) 123-4567"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Service Selection */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold text-gray-900 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MessageSquare className="w-5 h-5 text-brand-green" />
                      </motion.div>
                      Service Selection
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.35 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choose a Service
                      </label>
                      <motion.select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </motion.select>
                    </motion.div>
                  </motion.div>

                  {/* Date and Time */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold text-gray-900 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Calendar className="w-5 h-5 text-brand-green" />
                      </motion.div>
                      Schedule
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.45 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <motion.input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <motion.select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </motion.select>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Additional Notes */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold text-gray-900 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MessageSquare className="w-5 h-5 text-brand-green" />
                      </motion.div>
                      Additional Information
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.6 }}
                    >
                      <Textarea
                        label="Notes (Optional)"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tell us about your health goals, dietary restrictions, or any specific concerns..."
                        rows={4}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.65 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                      />
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Booking...
                        </>
                      ) : (
                        <>
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Calendar className="mr-2" size={20} />
                          </motion.div>
                          Book Appointment
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Selected Service Info */}
              <AnimatePresence>
                {selectedService && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />

                      <motion.h3
                        className="text-lg font-semibold text-gray-900 mb-4 relative z-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="inline-flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sparkles className="w-4 h-4 text-brand-green" />
                          <span>Selected Service</span>
                        </motion.div>
                      </motion.h3>

                      <div className="space-y-3 relative z-10">
                        <motion.p
                          className="font-medium text-gray-900"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15, delay: 0.05 }}
                        >
                          {selectedService.name}
                        </motion.p>
                        <motion.div
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15, delay: 0.1 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-brand-green" />
                          </motion.div>
                          <span>Professional Consultation</span>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <motion.h3
                    className="text-lg font-semibold text-gray-900 mb-4 relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="inline-flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-4 h-4 text-brand-green" />
                      <span>What to Expect</span>
                    </motion.div>
                  </motion.h3>

                  <div className="space-y-3 relative z-10">
                    {[
                      "Comprehensive health assessment",
                      "Personalized nutrition plan",
                      "Lifestyle recommendations",
                      "Follow-up support",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.25 + index * 0.05,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        </motion.div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <motion.h3
                    className="text-lg font-semibold text-gray-900 mb-4 relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="inline-flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Heart className="w-4 h-4 text-brand-green" />
                      <span>Need Help?</span>
                    </motion.div>
                  </motion.h3>

                  <div className="space-y-3 text-sm text-gray-600 relative z-10">
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.35 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="w-4 h-4 text-brand-green" />
                      </motion.div>
                      <span>+1 (555) 123-4567</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="w-4 h-4 text-brand-green" />
                      </motion.div>
                      <span>fiza@nutrition.com</span>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
        type={toast.type}
        title={toast.title}
        message={toast.message}
      />

      <Footer />
    </div>
  );
}
