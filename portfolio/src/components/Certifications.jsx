
import React, { useEffect } from "react";

const Certifications = () => {
  useEffect(() => {
    // Dynamically load the Credly embed script for the badges
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Badge data
  const badges = [
    {
      id: "1a75d970-fcb6-45a8-a643-2c21a26e8e89",
      link: "https://www.credly.com/badges/1a75d970-fcb6-45a8-a643-2c21a26e8e89/public_url",
    },
    {
      id: "60cc26f1-2735-46d2-98fe-9c666c3a3772",
      link: "https://www.credly.com/badges/60cc26f1-2735-46d2-98fe-9c666c3a3772/public_url",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section Title */}
      <h2 className="my-20 text-center text-4xl">Certifications</h2>

      {/* Badge Container */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {badges.map((badge, index) => (
          <a
            key={index}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id={badge.id}
              data-share-badge-host="https://www.credly.com"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
