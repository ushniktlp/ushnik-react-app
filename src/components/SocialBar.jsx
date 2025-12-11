import React from "react";
import SocialData from "../data/SocialData";

const SocialBar = () => {
  return (
    <div className="social-bar">
      {SocialData.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.icon} alt={link.alt} />
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
