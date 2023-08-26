"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
        <h1 className="text-3xl font-bold mb-3 mt-16">
          Privacy Policy for CarLOFT
        </h1>
        <p className="text-2xl">Effective Date: [08.11.2023]</p>
        <h3 className="text-2xl font-bold mb-3 mt-6">
          At CarLOFT, we value your privacy and are committed to protecting your
          personal information. This Privacy Policy outlines how we collect,
          use, and safeguard your personal information when you interact with
          our website and services.
        </h3>
        <h3 className="text-2xl font-bold mb-3 mt-6">Information We Collect</h3>
        <span>
          We may collect the following types of personal information when you
          visit or use our website: - Name - Email address - Phone number -
          Location data - IP address - Device information
        </span>
        <h3>How We Use Your Information</h3>
        <span>
          We use your personal information to:{" "}
          <p className="text-2xl">- Provide and improve our services </p>
          <p className="text-2xl">-{" "}Respond to your inquiries and provide customer support</p> 
          <p className="text-2xl">
            -Send you updates, newsletters, and promotional content (with your
            consent)
          </p>{" "}
          <p className="text-2xl">- Analyze website traffic and usage patterns</p>
          <p> -{" "}Ensure compliance with legal and regulatory requirements</p>
        </span>
        <h3>Data Security</h3>
        <p className="text-2xl">
          We employ security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. However,
          please note that no method of transmission over the internet or
          electronic storage is completely secure.
        </p>
        <h3>Cookies and Tracking Technologies</h3>
        <p className="text-2xl">
          We use cookies and similar tracking technologies to enhance your
          experience on our website. You can adjust your browser settings to
          disable or limit the use of cookies.
        </p>
        <h3>Third-Party Links</h3>
        <p className="text-2xl">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these websites.
          Please review the privacy policies of third-party sites before
          providing any personal information.
        </p>
        <h3>Your Choices</h3>
        <span>
          You can: - Update or correct your personal information by contacting
          us - Opt-out of receiving promotional emails by following the
          unsubscribe instructions - Disable cookies in your browser settings
        </span>
        <h3>Children's Privacy</h3>
        <p className="text-2xl">
          Our services are not directed to individuals under the age of 13. We
          do not knowingly collect personal information from children. If you
          believe we have inadvertently collected personal information from a
          child, please contact us to have it removed.
        </p>
        <p className="text-2xl">
          Changes to this Privacy Policy We may update this Privacy Policy from
          time to time. The most current version will be posted on our website
          with the effective date. Contact Us If you have any questions or
          concerns about this Privacy Policy, please contact us at [insert
          contact information].
        </p>
        <p className="text-2xl">
          By using our website, you consent to the terms of this Privacy Policy.
        </p>
        <div className="link text-xl font-bold  mb-3 mt-6">
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
