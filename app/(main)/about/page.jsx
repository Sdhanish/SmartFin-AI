"use client"
import { BarChart, Scan, Shield, Brain, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="">
  <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
    About us <br /><span className="text-blue-600 text-3xl italic font-light">"Revolutionsing your finances through AI"</span>
  </h1>
  <div className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
    <p>💡Leverage the power of artificial intelligence to analyze spending habits and offer smart financial recommendations.</p>
    <p>📊 Easily create and manage budgets with intuitive tools that adapt to your lifestyle.</p>
    <p>🔍 Stay up-to-date with where your money goes, helping you make conscious spending choices.</p>
    <p>🚀 Get actionable insights that support confident and informed financial moves.</p>
  </div>
</div>

      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              To democratize financial intelligence by making advanced AI-powered tools accessible to everyone, 
              helping individuals make smarter decisions with their money.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Scan className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI-Powered Receipt Scanning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our Gemini AI technology automatically extracts transaction details from receipts, eliminating manual entry.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <BarChart className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-Time Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dynamic visualizations help you understand spending patterns and financial trends at a glance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Recommendations</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get personalized suggestions to optimize your budget and savings based on your behavior.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Bell className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Proactive Alerts</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Timely notifications when you're approaching budget limits or unusual spending occurs.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FileText className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automated Reports</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monthly financial summaries delivered to your inbox with actionable insights.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-blue-600 dark:text-blue-400 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bank-Level Security</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your data is protected with enterprise-grade encryption and security protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in clear, honest communication about finances and how we handle your data.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously pushing boundaries to deliver cutting-edge financial tools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Empowerment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Giving you the knowledge and tools to take control of your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-100 dark:bg-blue-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Life?</h2>
          <p className=" max-w-2xl mx-auto mb-8 ">
            Join thousands of users who are already experiencing stress-free money management with SmartFin AI.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" className="px-8 py-4 text-lg">
              Learn More
            </Button>
            <Button className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}