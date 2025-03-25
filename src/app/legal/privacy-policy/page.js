import Navbar2 from '@/app/components/Navbar2';
import React from 'react'

function privacyPolicy() {
    return (
      <>
       <div className=' w-full ml-[20vw] md:ml-[20vw]'><Navbar2/></div>
        <div className="bg-[#e1eefd] mt-[5vh] md:mt-[10vh] text-[#18375d] min-h-screen p-8 font-glacial">
          <div className="max-w-6xl w-full md:w-4/5 mx-auto bg-white p-6 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">PRIVACY POLICY</h1>
            <p className="mb-4">
              This Privacy Policy describes how DOUM ("we," "our," or "us") collects,
              uses, and protects the personal information of users ("you," "your," or
              "User") who access our platform, website, and mobile application
              (collectively, the "Platform"). By accessing and using the Platform, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our services.
            </p>
            <p className="mb-4 font-semibold">1. COLLECTION OF INFORMATION</p>
            <p className="mb-4 font-semibold">1.1 Personal Information</p>
            <ul className="list-disc list-inside mb-4">
              <li>Name, email address, phone number, and location</li>
              <li>Payment details (UPI, credit/debit card information) for transactions</li>
              <li>User profile details, including preferences and service history</li>
            </ul>
            <p className="mb-4 font-semibold">1.2 Service-Related Information</p>
            <ul className="list-disc list-inside mb-4">
              <li>Information related to service requests, such as type of service required, preferred appointment time, and additional details you provide</li>
              <li>Reviews and feedback shared on the Platform</li>
            </ul>
            <p className="mb-4 font-semibold">1.3 Automatically Collected Information</p>
            <ul className="list-disc list-inside mb-4">
              <li>IP address, browser type, device details, and operating system</li>
              <li>Platform usage patterns, page visits, and interaction with our services</li>
              <li>Location data for better service recommendations (with your consent)</li>
            </ul>
            <p className="mb-4 font-semibold">2. USE OF INFORMATION</p>
            <ul className="list-disc list-inside mb-4">
              <li>To facilitate service requests, confirmations, and communications</li>
              <li>To provide customer support and address grievances</li>
              <li>To personalize your experience and recommend relevant services</li>
              <li>To process payments securely</li>
              <li>To enhance and improve Platform features, performance, and security</li>
              <li>To comply with legal obligations and ensure fraud prevention</li>
            </ul>
            <p className="mb-4 font-semibold">3. SHARING OF INFORMATION</p>
            <p className="mb-4">
              DOUM does not sell or rent your personal information. However, we may share it in the following cases:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>With Service Providers (Experts): Necessary details are shared with verified service providers to fulfill your service requests.</li>
              <li>With Payment Gateways: For secure processing of transactions.</li>
              <li>With Legal and Regulatory Authorities: If required by law or to prevent fraud and misuse.</li>
              <li>With Third-Party Analytics & Marketing Partners: To improve user experience and optimize advertisements.</li>
            </ul>
            <p className="mb-4 font-semibold">4. COOKIES AND TRACKING TECHNOLOGIES</p>
            <ul className="list-disc list-inside mb-4">
              <li>Recognize returning users and streamline login sessions</li>
              <li>Improve the functionality and performance of the Platform</li>
              <li>Provide personalized recommendations and targeted advertising</li>
            </ul>
            <p className="mb-4">You may disable cookies through your browser settings; however, this may limit some features of the Platform.</p>
            <p className="mb-4 font-semibold">5. DATA SECURITY</p>
            <ul className="list-disc list-inside mb-4">
              <li>Encryption of sensitive payment data</li>
              <li>Secure access controls to prevent unauthorized access</li>
              <li>Periodic security audits and monitoring for potential threats</li>
            </ul>
            <p className="mb-4">However, no method of data transmission over the internet is 100% secure, and while we strive to protect your data, we cannot guarantee absolute security.</p>
            <p className="mb-4 font-semibold">6. YOUR RIGHTS & CHOICES</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access & Correction: You may update or modify your personal information via the Platform.</li>
              <li>Opt-Out: You can opt out of promotional emails and marketing communications.</li>
              <li>Data Deletion: You may request the deletion of your account and associated data by contacting our support team at info@doum.in.</li>
            </ul>
            <p className="mb-4 font-semibold">7. THIRD-PARTY LINKS & SERVICES</p>
            <p className="mb-4">Our Platform may contain links to third-party websites or services. This Privacy Policy does not govern those external sites, and we encourage users to review their privacy policies before providing any personal information.</p>
            <p className="mb-4 font-semibold">8. CHANGES TO THIS POLICY</p>
            <p className="mb-4">We reserve the right to modify this Privacy Policy at any time. Any updates will be posted on the Platform, and continued use of our services constitutes acceptance of the revised terms.</p>
            <p className="mb-4 font-semibold">9. Legal Jurisdiction & Dispute Resolution Notice</p>
            <p className="mb-4">All legal matters, disputes, and proceedings related to DOUM Pvt. Ltd. shall fall under the exclusive jurisdiction of the Calcutta High Court. Any claims, litigations, or legal actions against DOUM must be filed and resolved solely within this jurisdiction, ensuring a centralized and efficient legal process.<br/>

Before initiating any legal proceedings, all parties—including customers, partners, and stakeholders—agree to attempt resolution through arbitration. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996, with proceedings taking place in Kolkata. If arbitration fails to resolve the dispute, the matter shall then be escalated exclusively to the Calcutta High Court.</p>
            <p className="mb-4 font-semibold">10. CONTACT US</p>
            <p className="mb-4">For any questions or concerns regarding this Privacy Policy, you can contact us at:</p>
            <p className="mb-4">DOUM Privacy Team</p>
            <p className="mb-4">Email: info@doum.in</p>
          </div>
        </div>
        </>
      );
}

export default privacyPolicy;