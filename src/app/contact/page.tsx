import ContactForm from "../../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NAYAFlOW | AI Agent Orchestration Platform",
  description: "Get in touch with NAYAFlOW to discuss how our AI agent orchestration platform can transform your enterprise automation needs.",
};

export default function Contact() {
  return (
    <>
      <div className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform your enterprise with AI agent orchestration? Our team is here to help.
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  );
} 