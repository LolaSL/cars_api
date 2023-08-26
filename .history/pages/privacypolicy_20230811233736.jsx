"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className={`${globals}`}>
      <div
        className="bg-image responsive"
        style={{
          width: "100%",
          height: "120vh",
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
        <h1 className="text-3xl font-bold mb-3 mt-6">Privacy Policy</h1>

        <p>
        Privacy Policy for CarLOFT

Effective Date: [08.11.2023]]

At CarLOFT, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website and services.

Information We Collect

We may collect the following types of personal information when you visit or use our website:
- Name
- Email address
- Phone number
- Location data
- IP address
- Device information

How We Use Your Information

We use your personal information to:
- Provide and improve our services
- Respond to your inquiries and provide customer support
- Send you updates, newsletters, and promotional content (with your consent)
- Analyze website traffic and usage patterns
- Ensure compliance with legal and regulatory requirements

Data Security

We employ security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure.

Cookies and Tracking Technologies

We use cookies and similar tracking technologies to enhance your experience on our website. You can adjust your browser settings to disable or limit the use of cookies.

Third-Party Links

Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of third-party sites before providing any personal information.

Your Choices

You can:
- Update or correct your personal information by contacting us
- Opt-out of receiving promotional emails by following the unsubscribe instructions
- Disable cookies in your browser settings

Children's Privacy

Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected personal information from a child, please contact us to have it removed.

Changes to this Privacy Policy

We may update this Privacy Policy from time to time. The most current version will be posted on our website with the effective date.

Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at [insert contact information].


        </p>
        <p>
By using our website, you consent to the terms of this Privacy Policy.
        </p>
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

export default PrivacyPolicy;
