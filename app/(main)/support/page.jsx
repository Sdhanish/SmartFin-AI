"use client"

import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SupportPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/send-support-email", {
        method: "POST",
        body: JSON.stringify(data),
      });
  
      if (!res.ok) throw new Error("Failed to send");
  
      toast.success("Feedback submitted successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Oops! Could not send feedback. Try again later.");
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Support | SmartFin AI</title>
        <meta name="description" content="Get help with SmartFin AI. Explore FAQs, tutorials, and contact support." />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How can we assist you?
          </h1>

        

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Getting Started',
                description: 'Learn how to set up your SmartFin AI account and navigate the dashboard.',
              },
              {
                title: 'Budgeting & Tracking',
                description: 'Discover how to manage budgets, track expenses, and analyze spending patterns.',
              },
              {
                title: 'AI Features',
                description: 'Explore AI-powered tools like receipt scanning and financial insights.',
              },
              {
                title: 'Account & Security',
                description: 'Manage your account settings and understand our security protocols.',
              },
            ].map((section, index) => (
              <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{section.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
              </div>
            ))}
          </section>

          

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <ul className="space-y-4">
              {[
                {
                  question: 'How do I scan a receipt using SmartFin AI?',
                  answer: 'Navigate to the "Receipts" section and click on "Scan New Receipt." Follow the on-screen instructions to upload and process your receipt.',
                },
                {
                  question: 'Can I set spending limits for specific categories?',
                  answer: 'Yes, go to the "Budgets" section, select a category, and set your desired spending limit.',
                },
                {
                  question: 'How does SmartFin AI categorize my transactions?',
                  answer: 'Our AI analyzes transaction details and assigns categories based on patterns and merchant information. You can manually adjust categories if needed.',
                },
              ].map((faq, index) => (
                <li key={index}>
                  <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <summary className="font-medium text-gray-800 dark:text-white cursor-pointer">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">📬 Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-12">
            <Input
  {...register("name", { required: "Name is required" })}
  placeholder="Your Name"
/>
{errors.name && <p className="text-red-500">{errors.name.message}</p>}

<Input
  {...register("email", { required: "Email is required" })}
  placeholder="smartfinai@gmail.com"
/>
{errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <Textarea
              {...register("feedback", { required: "Feedback is required" })}
              placeholder="Your Feedback"
              className="w-full"
              rows={5}
            />
            {errors.feedback && <p className="text-red-500">{errors.feedback.message}</p>}
            <div className="flex gap-4">
              <Button type="submit">Send</Button>
              <Button type="button" variant="outline" onClick={() => reset()}>
                Cancel
              </Button>
            </div>
          </form>
            <p>
              We value your feedback and are here to address any security concerns you may have. Please reach out to us at{' '}
              <a href="mailto:security@smartfin.ai" className="text-blue-600 underline">
                security@smartfin.ai
              </a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default SupportPage;
