"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import AnimatedTitle from "../Components/AnimatedTitle";

export default function Faqs() {
  // Store FAQ data in a dynamic array for easy editing
  const faqData = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your specific business needs.",
    },
    {
      id: 2,
      question: "How much does a typical project cost?",
      answer:
        "Project costs vary depending on scope, complexity, and timeline. We provide detailed quotes after an initial consultation to understand your specific requirements. Contact us for a free estimate.",
    },
    {
      id: 3,
      question: "What is your typical timeline for projects?",
      answer:
        "Our timelines depend on project complexity. Simple websites might take 2-4 weeks, while complex applications can take several months. We'll provide a detailed timeline during our project planning phase.",
    },
    {
      id: 4,
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital products remain up-to-date and function optimally. Our team is available for technical support, updates, and enhancements.",
    },
    {
      id: 5,
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, and various database solutions. Our team stays current with the latest developments to provide cutting-edge solutions.",
    },
    {
      id: 6,
      question: "How do we get started working together?",
      answer:
        "Getting started is easy! Simply contact us through our website form, email, or phone. We'll schedule an initial consultation to discuss your project needs and determine the best path forward.",
    },
  ]

  // Track which FAQ item is open
  const [openItem, setOpenItem] = useState(null)

  // Toggle FAQ item open/closed
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <AnimatedTitle
              title="  <b> Frequently Ask <br> Question  </b>"
              containerClass="mt-8 !text-black text-center reveal-element "
            />
          <p className="text-gray-400 text-lg">Find answers to the most common questions about our services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-200 hover:border-green-900 hover:shadow-[0_0_10px_rgba(0,255,0,0.1)]"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors duration-200"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                    openItem === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-900 border-t border-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
         
      </div>
    </div>
  )
}

