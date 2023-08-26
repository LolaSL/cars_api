"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title">Privacy Policy</h1>
      <p className="mb-3 mt-6">Effective Date: 08.26.2023</p>
      <p className=" mb-3 mt-6">
        At Car Loft, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your personal information when
        you use our car rental services. By accessing or using our services, you
        agree to the terms of this Privacy Policy
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">
        1. Information We Collect
      </h3>
      <span className=" mb-3 mt-6">
        <p>We may collect the following types of information from you:</p>
        <ul>
          <li>
            Personal Information: This includes your name, contact details, car
            registration number (reg), ID card/passport, and driver's license
            information.
          </li>
          <li>
            Payment Information: We may collect credit or debit card details for
            deposit purposes or accept cash payments.
          </li>
          <li>
            Driving Record: We require a clean driving record and may check your
            driving history to ensure you meet our requirements.
          </li>
        </ul>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">3. Data Sharing</h3>
      <span className=" mb-3 mt-6">
        <p>We may share your information with the following parties:</p>
        <ul>
          <li>
            Rental Locations: Your information may be shared with our branch
            locations to fulfill your rental request.
          </li>
          <li>
            Legal Compliance: We may disclose your information to comply with
            legal obligations or respond to legal requests.
          </li>
        </ul>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">4. Data Security</h3>
      <p className="mb-3 mt-6">
        We implement security measures to protect your information from
        unauthorized access, alteration, or disclosure. However, no method of
        transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>
      <h3 className="text-2xl font-bold mb-3 mt-6">5. Your Choices</h3>
      <span className=" mb-3 mt-6">
        <ul>
          <li>
          Smoking Policy: Our vehicles are smoke-free. Smoking is prohibited, and fees may apply for violation of this policy.
          </li>
          <li>
          Additional Drivers: You can add up to two additional drivers per rental.
          </li>
          <li>Cancellation: You have the option to cancel your booking. Free cancellation is available until 48 hours before the rental start date.</li>
        </ul>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">6. Deposit and Refund</h3>
      <span className=" mb-3 mt-6">
      <p>Deposit Release: After returning the car without damage, your deposit/guarantee amount will be refunded to your credit card within 7 to 21 working days.</p>
      </span>
      <h3 className="text-2xl font-bold mb-3 mt-6">7. Questions and Contact</h3>
      <span className=" mb-3 mt-6">
      <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, you can contact us by email or phone.</p>
      <p></p>
      </span>
 
      <p className="mb-3 mt-6">
        By using our website, you consent to the terms of this Privacy Policy.
      </p>
      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
