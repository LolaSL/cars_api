"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
<div className={`min-h-screen m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
        <h1 className="article__title">Terms & Conditions</h1>

  

  <h3 className="text-2xl font-bold mb-3 mt-6">1. User Conduct</h3>
  <p>You agree to use the Website in a lawful and responsible manner. You must not:</p>
  <ul className="mb-3 mt-6" >
    <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
    <li>Post or transmit any content that is offensive, harmful, or violates the rights of others</li>
    <li>Attempt to gain unauthorized access to our systems or interfere with the Website's functionality</li>
    <li>Engage in any activity that disrupts or negatively impacts the Website's performance</li>
  </ul>

  <h3 className="text-2xl font-bold mb-3 mt-6">2. Intellectual Property</h3>
  <p>The content, design, and other materials on the Website are protected by intellectual property laws. You may not copy, reproduce, distribute, modify, or create derivative works based on the Website's content without our explicit permission.</p>
  <h3 className="text-2xl font-bold mb-3 mt-6">3.Third-Party Links</h3>

<p >The Website may contain links to third-party websites. We do not endorse or control the content of these websites and are not responsible for their practices. Your use of third-party sites is subject to their terms and conditions.</p>

<h3 className="text-2xl font-bold mb-3 mt-6">4. Limitation of Liability</h3>

<p >To the fullest extent permitted by law, we disclaim all liability for any damages, losses, or claims arising out of your use of the Website. We are not liable for any indirect, incidental, or consequential damages.</p>

<h3 className="text-2xl font-bold mb-3 mt-6">5. Indemnification</h3>

<p>You agree to indemnify and hold us harmless from any claims, damages, or losses arising out of your use of the Website or any violation of these Terms.</p>

<h3 className="text-2xl font-bold mb-3 mt-6">6. Governing Law</h3>

<p  >These Terms are governed by and construed in accordance with the laws of [Insert Your Jurisdiction]. Any disputes will be subject to the exclusive jurisdiction of the courts in [Insert Your Jurisdiction].</p>

<h3 className="text-2xl font-bold mb-3 mt-6">7. Changes to Terms</h3>

<p >We may update these Terms from time to time. The most current version will be posted on the Website with the effective date.
</p>
<h3 className="text-2xl font-bold mb-3 mt-6">8. Contact Us</h3>

<h3 className="text-2xl font-bold mb-3 mt-6">If you have any questions or concerns about these Terms, please contact us at [car.loft.re.n.t@gmail.com].</h3>

<p >By using our Website, you agree to these Terms and Conditions.</p>
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