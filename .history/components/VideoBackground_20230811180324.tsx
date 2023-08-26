

jsx
Copy code
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import "../public/styles.css"; // Import the styles.css file

const VideoBackground = () => {
  return (
    <div className={`min-h-screen m-4 py-6 ${globals}`}>
      <div className="video-container">
        <video autoPlay muted loop className="video">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <h1 className="text-3xl font-bold mb-3 mt-6">Contact Us</h1>
          <p>Please fill in the form below</p>
        </div>
      </div>

      {/* Rest of your content */}
    </div>
  );
};

export default VideoBackground;