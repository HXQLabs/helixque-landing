"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Users, MessageCircle, Target, Shield } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Connect with LinkedIn and set your skills, industry, language preferences, and career goals.",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      number: "02", 
      title: "Get Matched Instantly",
      description: "Our smart algorithm finds compatible professionals based on your preferences and experience level.",
      icon: Target,
      color: "bg-green-500",
    },
    {
      number: "03",
      title: "Connect Anonymously", 
      description: "Start conversations without revealing your identity until you're ready to share more details.",
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      number: "04",
      title: "Practice & Learn",
      description: "Engage in mock interviews, get mentorship, practice coding, or discuss career strategies.",
      icon: MessageCircle,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="container mx-auto flex w-full max-w-6xl flex-col items-center justify-start px-4 py-16 text-center md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-5xl xl:tracking-tighter">
          How It Works
        </h2>
        <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
          Get started in minutes and begin networking with professionals who share your goals and interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-6 h-full border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-all duration-300">
              <BorderBeam size={80} duration={8} delay={index * 0.5} colorFrom="#3b82f6" colorTo="#8b5cf6" borderWidth={1} />
              
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground text-sm mb-4">
          Ready to start networking?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://helixque.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/HXQLabs/helixque"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};
