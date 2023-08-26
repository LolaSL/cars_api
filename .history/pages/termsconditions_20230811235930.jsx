"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className={`${globals}`}>
      <div
        className="bg-image responsive"
        style={{
          width: "100%",
          height: "150vh",
          opacity: 0.8,
          backgroundImage: `url("/background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          fontFamily: "sans-serif",
          backgroundRepeat: "no-repeat",
          margin: "0",
          padding: "0",
        }}
      ></div>
      <div
        className="text-overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "-50%",
          padding: "25px",
          transform: "translate(-50%, -50%)",
          textAlign: "justify",
          color: "white",
          zIndex: 10,
          fontSize: "14px",
          fontFamily: "Roboto",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 className="text-3xl font-bold mb-3 mt-6">Terms & Conditions</h1>

        <h1>Terms & Conditions for CarLOFT</h1>

  <p><em>Effective Date: 08.11.2023</em></p>

  <p>Please read these Terms and Conditions ("Terms") carefully before using the CarLOFT website ("Website") operated by CarLOFT ("we," "us," or "our"). Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.</p>

  <h2>1. User Conduct</h2>
  <p>You agree to use the Website in a lawful and responsible manner. You must not:</p>
  <ul>
    <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
    <li>Post or transmit any content that is offensive, harmful, or violates the rights of others</li>
    <li>Attempt to gain unauthorized access to our systems or interfere with the Website's functionality</li>
    <li>Engage in any activity that disrupts or negatively impacts the Website's performance</li>
  </ul>

  <h2>2. Intellectual Property</h2>
  <p>The content, design, and other materials on the Website are protected by intellectual property laws. You may not copy, reproduce, distribute, modify, or create derivative works based on the Website's content without our explicit permission.</p>
<h3>3.Third-Party Links</h3>

<p>The Website may contain links to third-party websites. We do not endorse or control the content of these websites and are not responsible for their practices. Your use of third-party sites is subject to their terms and conditions.</p>

<h3>4. Limitation of Liability</h3>

<p>To the fullest extent permitted by law, we disclaim all liability for any damages, losses, or claims arising out of your use of the Website. We are not liable for any indirect, incidental, or consequential damages.</p>

<h3>5. Indemnification</h3>

<p>You agree to indemnify and hold us harmless from any claims, damages, or losses arising out of your use of the Website or any violation of these Terms.</p>

<h3>6. Governing Law</h3>

<p>These Terms are governed by and construed in accordance with the laws of [Insert Your Jurisdiction]. Any disputes will be subject to the exclusive jurisdiction of the courts in [Insert Your Jurisdiction].</p>

<h3>7. Changes to Terms</h3>

<p>We may update these Terms from time to time. The most current version will be posted on the Website with the effective date.
</p>
<h3>8. Contact Us</h3>

<h3>If you have any questions or concerns about these Terms, please contact us at [car.loft.re.n.t@gmail.com].</h3>

<p>By using our Website, you agree to these Terms and Conditions.</p>
        <div className="link text-md font-bold  mb-3 mt-6">
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;