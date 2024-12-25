import React, { useEffect } from "react";

const Certifications = () => {
  useEffect(() => {
    // Dynamically load the Credly embed script for the badge
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section Title */}
      <h2 className="my-20 text-center text-4xl">Certifications</h2>

      {/* Badge Container */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="1a75d970-fcb6-45a8-a643-2c21a26e8e89"
            data-share-badge-host="https://www.credly.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
