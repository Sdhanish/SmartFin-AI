// pages/security.jsx

import React from 'react';

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🔐 Our Security Practices</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Commitment to Security</h2>
          <p>
            At SmartFin AI, we prioritize the security of your financial data. We employ advanced security measures to ensure your information remains protected.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🔒 Privacy Practices</h2>
          <p>
            We respect your privacy and do not sell your personal information to or share it with unaffiliated third parties for their advertising or marketing purposes. For more details, please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🛡️ Security Measures</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Data Encryption:</strong> We use 256-bit encryption to protect data during transmission and at rest.</li>
            <li><strong>Secure Authentication:</strong> Our platform utilizes Clerk for secure user authentication, ensuring only authorized access.</li>
            <li><strong>Bot Protection:</strong> Integration with Arcjet provides advanced bot protection to prevent unauthorized access.</li>
            <li><strong>Regular Security Updates:</strong> We continuously update our systems to address potential vulnerabilities.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🚨 Incident Response</h2>
          <p>
            Our dedicated security team monitors the platform around the clock. In the event of any suspicious activity, we promptly investigate and take necessary actions to protect your account.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🔍 External Security Assessments</h2>
          <p>
            We collaborate with independent third-party security experts to regularly assess our platform for vulnerabilities. Additionally, our bug bounty program encourages security researchers to report any detected issues, enhancing our system's resilience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📄 Compliance and Auditing</h2>
          <p>
            SmartFin AI adheres to industry-standard security practices and undergoes regular audits to ensure compliance with relevant regulations and standards.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Us</h2>
          <p>
            We value your feedback and are here to address any security concerns you may have. Please reach out to us at <a href="mailto:security@smartfin.ai" className="text-blue-600 underline">security@smartfin.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SecurityPage;
