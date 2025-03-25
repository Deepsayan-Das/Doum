import Navbar2 from '@/app/components/Navbar2';
import React from 'react'

function termsOfUse() {
    return (
      <>
       <div className=' w-full md:w-4/5 ml-[20vw] md:ml-[20vw]'><Navbar2/></div>
        <div className="bg-[#e1eefd] mt-[5vh] md:mt-[10vh] text-[#18375d] min-h-screen p-6">
          <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-lg font-glacial">
            <h1 className="text-3xl font-bold mb-4">TERMS AND CONDITIONS</h1>
            <p className="mb-4">Last Updated: 8th February 2025</p>
            <p className="mb-6">
              These Terms and Conditions ("Terms") govern the use of services made available on or through DOUM
              (the "Platform"), including its mobile application and website. By accessing or using DOUM’s services,
              you agree to these Terms. If you do not agree, please do not use the Platform.
            </p>
            
            <div className="space-y-6">
              <Section title="1. SERVICES" content={[ 
                "DOUM provides an online platform that connects customers with independent third-party service providers (\"Experts\") offering various home services (\"Services\").",
                "The Platform facilitates service bookings, payment processing, and user-expert communication. However, DOUM itself does not provide any services directly and is not liable for the quality of services rendered by Experts.",
                "DOUM reserves the right to modify, update, or discontinue services at any time without prior notice.",
                "Services offered through the Platform are intended for use only within India."
              ]} />
    
              <Section title="2. USER ACCOUNTS & ELIGIBILITY" content={[
                "To use DOUM, you must create an account and provide accurate personal details.",
                "Users must be at least 18 years old to register and avail services.",
                "You are responsible for all activities under your account and must maintain the confidentiality of your credentials.",
                "DOUM reserves the right to suspend or terminate accounts found violating these Terms or engaging in fraudulent activity."
              ]} />
              
              <Section title="3. BOOKINGS & PAYMENTS" content={[
                "Users can book services through the DOUM app or website. Service availability is subject to location, expert availability, and other conditions.",
                "Payment must be made via the Platform using available options such as UPI, credit/debit cards, or wallets.",
                "DOUM collects payments on behalf of Experts and facilitates transactions but does not assume responsibility for service completion.",
                "Additional charges may apply for materials or extended service requests beyond the initial booking scope."
              ]} />
            
              <Section title="4. CANCELLATION & REFUND POLICY" content={[
                "Users may cancel bookings before confirmation without any charges. Once confirmed, cancellation policies set by DOUM will apply.",
                "Refunds (if applicable) will be processed within 7-10 business days.",
                "DOUM reserves the right to cancel a booking due to unforeseen circumstances and will offer alternatives where possible."
              ]} />

              <Section title="5. SERVICE QUALITY & LIABILITY" content={["	DOUM verifies Experts to the best of its ability but does not guarantee the quality of services provided.",'	Any issues related to service quality must be reported within 24 hours of service completion.','	DOUM is not liable for any direct, indirect, incidental, or consequential damages arising from the use of its Platform or services.']}/>
              <Section title="6. USER RESPONSIBILITIES" content={["	Users must ensure a safe and appropriate environment for service execution.",'	Users must not engage in abusive, unlawful, or discriminatory behavior towards Experts.','	Any misuse of the Platform, including fraudulent bookings, false complaints, or attempts to bypass the Platform for direct service engagements, may result in account suspension or legal action']}/>
              <Section title='7. PRIVACY & DATA PROTECTION' content={["	DOUM collects and processes personal data in accordance with its Privacy Policy.",'	User data may be shared with Experts only to the extent necessary to fulfill service requests.','	DOUM implements reasonable security measures to protect user data but is not liable for breaches beyond its control.']}/>
              <Section title='8. THIRD-PARTY LINKS & ADVERTISEMENTS' content={['	The Platform may contain links to third-party websites, ads, or services. DOUM is not responsible for the content, policies, or practices of such third parties.','	Users engaging with third-party services do so at their own risk.']}/>
              <Section title='9.TERMINATION' content={['	DOUM reserves the right to terminate or suspend user accounts without prior notice if found in violation of these Terms.','	Users may delete their accounts by contacting DOUM support.','	Upon termination, any pending service requests will be canceled, and any outstanding dues must be settled.']}/>
              <Section title='10. DISPUTE RESOLUTION' content={['	Disputes will first be resolved through negotiation. If unresolved, disputes will be subject to arbitration in Kolkata, West Bengal.','	Users agree to waive class action rights and must file individual claims.']}/> 
              <Section title='11. MODIFICATIONS TO TERMS' content={['1.	DOUM may update these Terms periodically. Continued use of the Platform constitutes acceptance of revised Terms.','2.	Users will be notified of significant changes via email or in-app notifications.']}/>
              <Section title='12. CONTACT INFORMATION' content={['For any questions or concerns regarding these Terms, contact us at:Email: info@doum.in']} />

            </div>
          </div>
        </div>
        </>
      );
    }
    
    function Section({ title, content }) {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
      );
}

export default termsOfUse