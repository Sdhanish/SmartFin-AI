"use client"
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Smartfin AI?',
    answer:
      'Smartfin AI is a personalized AI-powered financial assistant that helps users manage their finances by analyzing spending habits and providing tailored advice.',
  },
  {
    question: 'How does Smartfin AI analyze my spending?',
    answer:
      'It utilizes advanced language models to review your transaction history, identifying patterns and offering insights to optimize your financial decisions.',
  },
  {
    question: 'Is my financial data secure with Smartfin AI?',
    answer:
      'Yes, Smartfin AI employs robust security measures to ensure your financial data is protected and handled with utmost confidentiality.',
  },
  {
    question: 'Can Smartfin AI help me save money?',
    answer:
      'Absolutely! By analyzing your spending habits, Smartfin AI provides personalized recommendations to help you reduce unnecessary expenses and save more.',
  },
  {
    question: 'How do I get started with Smartfin AI?',
    answer:
      'You can begin by signing up on our platform and connecting your financial accounts. Smartfin AI will then start analyzing your data to provide insights.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
