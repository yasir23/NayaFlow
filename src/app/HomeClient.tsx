"use client";

import React from "react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

export default function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold tracking-tight text-blue-700 mb-6"
          >
            AI Automation Services for Every Business
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8"
          >
            From startups to enterprises, NAYAFLOW delivers tailored automation
            solutions with OpenAI, LangGraph, Google SDK, n8n, and Make.com
            integrations.
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm hover:bg-gray-100 transition"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Tailored Solutions by Business Size
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              Whether you&apos;re a startup, SME, or enterprise, our AI automation
              services adapt to your stage and scale.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Startups",
                color: "green",
                text: "Rapid deployment, affordable pricing, and integrations to grow from day one.",
                points: ["Setup in 2–4 weeks", "Cost-effective plans", "Essential automation"],
              },
              {
                title: "SMEs",
                color: "blue",
                text: "Flexible, scalable workflows for growing businesses needing advanced automation.",
                points: ["Multi-department workflows", "Analytics & scaling", "Advanced integrations"],
              },
              {
                title: "Enterprises",
                color: "purple",
                text: "Enterprise-grade orchestration with compliance, security, and unlimited scalability.",
                points: ["Compliance features", "Custom workflows", "24/7 dedicated support"],
              },
            ].map((seg, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`p-6 rounded-xl ${
                  seg.color === "green" 
                    ? "bg-green-50 border-green-100" 
                    : seg.color === "blue" 
                    ? "bg-blue-50 border-blue-100" 
                    : "bg-purple-50 border-purple-100"
                } border shadow`}
              >
                <h3 className={`text-xl font-bold ${
                  seg.color === "green" 
                    ? "text-green-700" 
                    : seg.color === "blue" 
                    ? "text-blue-700" 
                    : "text-purple-700"
                } mb-3`}>
                  {seg.title}
                </h3>
                <p className="text-gray-600 mb-4">{seg.text}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {seg.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Powerful Integrations
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              We connect your business with industry-leading platforms and tools
              for seamless automation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Tabs defaultValue="startups" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <TabsTrigger value="startups">Startups</TabsTrigger>
                <TabsTrigger value="smes">SMEs</TabsTrigger>
                <TabsTrigger value="enterprises">Enterprises</TabsTrigger>
              </TabsList>
              <TabsContent value="startups">
                <AnimatedCard title="Startup Automation" color="green" />
              </TabsContent>
              <TabsContent value="smes">
                <AnimatedCard title="SME Automation" color="blue" />
              </TabsContent>
              <TabsContent value="enterprises">
                <AnimatedCard title="Enterprise Automation" color="purple" />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full py-16 bg-blue-600 text-center text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="max-w-xl mx-auto text-blue-100 mb-8">
            Schedule a free consultation and discover how NAYAFLOW can transform
            your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-blue-600 shadow hover:bg-gray-100 transition"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-12 items-center justify-center rounded-md border border-blue-300 px-8 text-sm font-medium shadow-sm hover:bg-blue-700 transition"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

/* Animated Integration Card */
function AnimatedCard({ title, color }: { title: string; color: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="p-8 bg-white rounded-xl shadow border text-left"
    >
      <h3 className={`text-2xl font-bold ${
        color === "green" 
          ? "text-green-700" 
          : color === "blue" 
          ? "text-blue-700" 
          : "text-purple-700"
      } mb-4`}>{title}</h3>
      <p className="text-gray-600">Feature details and integrations here...</p>
    </motion.div>
  );
}
