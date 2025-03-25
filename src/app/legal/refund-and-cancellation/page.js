import Navbar2 from '@/app/components/Navbar2';
import React from 'react'

function refundAndCancellation() {
    return (
      <>
        <div className=' w-full md:w-4/5 ml-[20vw] md:ml-[20vw]'><Navbar2/></div>
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg text-[#18375d] font-glacial mt-[5vh] md:mt-[10vh]">
          <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-gray-600 mb-6">Last Updated: 8th February 2025</p>
          <p className="mb-4">
            PLEASE READ THIS REFUND AND CANCELLATION POLICY CAREFULLY. BY USING THE
            SERVICES THROUGH THE DOUM PLATFORM, YOU AGREE TO BE BOUND BY THE TERMS
            OUTLINED BELOW.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Applicability and Amendment</h2>
          <p className="mb-4">
            1.1 DOUM, through its platform, facilitates the provision of home
            services through a network of independent service providers ("Experts")
            for customers on an on-demand basis ("Services"), for a fee ("Fee").
          </p>
          <p className="mb-4">
            1.2 By requesting a booking through the DOUM Platform, you agree to
            comply with this Refund and Cancellation Policy. If you do not agree,
            you should not proceed with booking the Services.
          </p>
          <p className="mb-4">
            1.3 DOUM reserves the right to modify or amend this Policy at any time.
            Continued use of our Services after changes take effect constitutes
            acceptance of the updated terms.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Cancellation Policy</h2>
          <p className="mb-4">
            2.1 Users may cancel their service bookings at least 30 minutes before
            the scheduled time without any cancellation fee.
          </p>
          <p className="mb-4">
            2.2 If a cancellation request is received within the permitted time
            frame, DOUM will either process a refund or reschedule the service.
          </p>
          <p className="mb-4">
            2.3 If a user opts for cash payment and cancels the booking after the
            Expert has arrived at the location, a cancellation charge of up to 100%
            of the Fee may apply.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Refund Policy</h2>
          <p className="mb-4">
            3.1 The Fee paid for services is generally non-refundable, except under
            specific circumstances such as no-show by the Expert, unsatisfactory
            service, or duplicate payments.
          </p>
          <p className="mb-4">
            3.2 Refund requests will be evaluated at DOUM’s discretion. Approved
            refunds will be credited within 7 business days.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Customer Support</h2>
          <p className="mb-4">
            For any queries or concerns regarding refunds or cancellations, please
            reach out to our support team at <a className="text-blue-600" href="mailto:info@doum.in">info@doum.in</a>.
          </p>
    
          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Legal Disclaimer</h2>
          <p className="mb-4">
            This document is an electronic record in accordance with the
            Information Technology Act, 2000. BY USING OUR SERVICES, YOU CONFIRM
            THAT YOU HAVE READ AND AGREE TO THE TERMS OF THIS POLICY.
          </p>
        </div>
        </>
      );
}

export default refundAndCancellation