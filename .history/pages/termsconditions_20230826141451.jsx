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
        Our pickup and dropoff location is Tel Aviv Ben Gurion International
        Airport, Terminal 3. Our office is located a 15-minute drive from the
        airport.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">2. Age Requirements</h3>
      <span>
        <ul>
          <li>- Renters must be at least 21 years old to rent a car.</li>
          <li>- Drivers under 25 may be subject to a Young Driver Fee.</li>
          <li>
            - Drivers aged 70 and above may be subject to a Senior Driver Fee or
            restrictions.
          </li>
          <li>
            - Refer to the specific terms and conditions for each vehicle for
            age-related details.
          </li>
        </ul>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">3. Required Documents</h3>
      <span>
        <ul>
          <li>- An ID card/passport.</li>
          <li>- A valid driver’s license.</li>
          <li>- A credit or debit card for deposit or cash payment.</li>
          <li>- Your car registration number (reg). </li>
          <li>- A clean driving record.</li>
        </ul>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">4. Smoking Policy</h3>
      <p>
        Smoking is strictly prohibited in all Car LOFT vehicles. Violations will
        result in additional charges to cover cleaning expenses. We maintain a
        100% smoke-free fleet for your comfort.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">5. Additional Drivers</h3>
      <p>
      Car LOFT allows up to two additional drivers per rental. Additional drivers must meet our age and eligibility criteria.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">6. Early Returns</h3>
      <p>
      If you return the vehicle earlier than expected, no refund will be provided for the unused rental period.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">7. One-Way Rentals</h3>
      <p>
      One-way car rentals are available between most of our branch locations, subject to availability.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">8. Payment</h3>
<p>You can pay for your booking at the Car LOFT office. Please note that the "Payable at Desk" amount will be in the local currency of your destination.</p>
      <h3 className="text-2xl font-bold mb-3 mt-6">
      9. Rental Inclusions
      </h3>
      <span>
        <p>The rental price includes:</p>
        <ul>
          <li>- Unlimited kilometers.</li>
          <li>- 17% VAT.</li>
          <li>- Collision Damage Waiver (CDW).</li>
          <li>- Gravel Protection (GP).</li>
          <li>-Theft Protection (TP).</li>
          <li>- Super Collision Damage Waiver (SCDW).</li>
          <li>- One free additional driver.</li>
        </ul>
</span>
      <h3 className="text-2xl font-bold mb-3 mt-6">10. Deposit Refund</h3>
      <p>Upon the return of the car without damage, the deposit/guarantee amount will be released/refunded to your credit card. This process typically takes 7 to 21 working days to appear. Kindly check with your bank for confirmation.</p>
      
      
      
      
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
