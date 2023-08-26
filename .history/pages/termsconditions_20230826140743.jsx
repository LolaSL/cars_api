"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div
      className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title">Terms & Conditions</h1>
      <p>
        These Terms and Conditions govern the use of Car LOFT's car rental
        services. By using our services, you agree to abide by these terms.
        Please read them carefully before making a reservation.
      </p>

      <h3 className="text-2xl font-bold mb-3 mt-6">1. Rental Locations</h3>
      <p>
      Our pickup and dropoff location is Tel Aviv Ben Gurion International Airport, Terminal 3. Our office is located a 15-minute drive from the airport.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">2. Age Requirements</h3>
      <span>
        <ul>
          <li>- Renters must be at least 21 years old to rent a car.</li>
          <li>- Drivers under 25 may be subject to a Young Driver Fee.</li>
          <li>- Drivers aged 70 and above may be subject to a Senior Driver Fee or restrictions.</li>
        <li>- Refer to the specific terms and conditions for each vehicle for age-related details.</li>
        </ul>
 </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">3. Required Documents</h3>

      <span>
        <ul>
          <li>- An ID card/passport.</li>
          <li>- A valid driver’s license.</li>
          <li>- A credit or debit card for deposit or cash payment.</li>
          <li>- Your carregistration number (reg) </li>
          <li></li>
        </ul>
</span>

      <h3 className="text-2xl font-bold mb-3 mt-6">
        4. Limitation of Liability
      </h3>

      <p>
        To the fullest extent permitted by law, we disclaim all liability for
        any damages, losses, or claims arising out of your use of the Website.
        We are not liable for any indirect, incidental, or consequential
        damages.
      </p>

      <h3 className="text-2xl font-bold mb-3 mt-6">5. Indemnification</h3>

      <p>
        You agree to indemnify and hold us harmless from any claims, damages, or
        losses arising out of your use of the Website or any violation of these
        Terms.
      </p>

      <h3 className="text-2xl font-bold mb-3 mt-6">6. Governing Law</h3>

      <p>
        These Terms are governed by and construed in accordance with the laws of
        [Insert Your Jurisdiction]. Any disputes will be subject to the
        exclusive jurisdiction of the courts in [Insert Your Jurisdiction].
      </p>

      <h3 className="text-2xl font-bold mb-3 mt-6">7. Changes to Terms</h3>

      <p>
        We may update these Terms from time to time. The most current version
        will be posted on the Website with the effective date.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">8. Contact Us</h3>

      <h3 className="text-2xl font-bold mb-3 mt-6">
        If you have any questions or concerns about these Terms, please contact
        us at [car.loft.re.n.t@gmail.com].
      </h3>

      <p>By using our Website, you agree to these Terms and Conditions.</p>
      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
