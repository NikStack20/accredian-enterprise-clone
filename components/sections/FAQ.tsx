// components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Accredian Enterprise?",
    answer:
      "Accredian Enterprise is a corporate learning solution that helps organizations upskill their workforce through customized, industry-aligned training programs.",
  },
  {
    question: "How are learning programs customized for our team?",
    answer:
      "We begin with a skill gap analysis to understand your team's current capabilities, then design a curriculum tailored to your business goals and technical requirements.",
  },
  {
    question: "Do you provide certifications on completion?",
    answer:
      "Yes, learners receive industry-recognized certifications upon successful completion of their respective programs.",
  },
  {
    question: "Can programs be delivered remotely?",
    answer:
      "Absolutely. Our programs support flexible delivery formats including live online sessions, hybrid models, and on-site workshops.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have delivered enterprise training across technology, finance, healthcare, retail, and manufacturing sectors, among others.",
  },
  {
    question: "How do you measure training effectiveness?",
    answer:
      "We provide detailed progress dashboards and completion analytics, allowing enterprises to track learning outcomes and measure ROI.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our enterprise learning programs."
          center
        />
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}