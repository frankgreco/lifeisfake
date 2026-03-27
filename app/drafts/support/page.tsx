"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I restore my purchases?",
    answer:
      "Open the app, go to Settings, and tap \"Restore Purchases.\" This will re-activate any previous in-app purchases tied to your Apple ID. Make sure you're signed in with the same Apple ID you originally used.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "You can request full deletion of your data by emailing us at fbgrecojr@me.com with the subject line \"Data Deletion Request.\" We will process your request within 30 days and confirm once complete.",
  },
  {
    question: "Is my content private?",
    answer:
      "Your uploaded content is stored securely in the cloud. We do not sell your data or share it with third-party advertisers. See our Privacy Policy for full details on how your information is handled.",
  },
  {
    question: "The app is crashing or not loading. What should I do?",
    answer:
      "First, make sure your app is updated to the latest version. Try force-quitting and reopening. If the issue persists, restart your device. Still stuck? Reach out to us and include your device model and iOS version.",
  },
  {
    question: "Something else?",
    answer:
      'We\'re happy to help. <a href="mailto:fbgrecojr@me.com?subject=Drafts%20Support%20Request" class="text-blue-600 underline hover:text-blue-800">Contact us</a> and we\'ll get back to you as soon as possible.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  color,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  color: string;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-gray-900 font-medium text-base pr-8 group-hover:text-gray-600 transition-colors">
          {question}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 leading-none"
          style={{
            backgroundColor: color,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="text-gray-500 text-sm leading-relaxed pb-5 pr-12"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

const accentColors = [
  "#50BE78",
  "#5A96FF",
  "#F5B43C",
  "#111111",
  "#FF92C2",
  "#EB6464",
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-6 py-16 md:py-24 pb-24">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/logo.svg"
            alt="Drafts"
            className="w-72 md:w-96 h-auto"
          />
        </div>

        {/* FAQs */}
        <div className="mb-16">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              color={accentColors[i % accentColors.length]}
            />
          ))}
        </div>


      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 text-sm text-gray-400">
        <a href="/legal/privacy" className="hover:text-gray-600 transition-colors">
          Privacy
        </a>
      </footer>
    </div>
  );
}
