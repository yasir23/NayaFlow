import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "AI Automation Services | NAYAFLOW",
  description:
    "Comprehensive AI automation services for startups, SMEs, and enterprises. Sales automation, LangGraph, Google SDK, OpenAI SDK, n8n, and Make.com integrations.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
