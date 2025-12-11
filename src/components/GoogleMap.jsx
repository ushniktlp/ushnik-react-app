import React from "react";
import MapData from "../data/MapData";

const GoogleMap = ({
  id = "map",
  className = "full-screen-map",
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.6814626598455!2d78.36647191485975!3d17.434990945386292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ee5d484f05%3A0xe35aa79fdd2ec38f!2sJyothi%20Imperial%20%7C%20Vamsiram%20Builders!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
  title = "Map Location",
  height = "600px",
  width = "100%",
}) => {
  if (!src) {
    console.warn("GoogleMap: Missing 'src' value");
    return <p>Map source missing.</p>;
  }

  return (
    <div
      id={MapData.id}
      className={MapData.className}
      style={{ width: width, height: height }}
    >
      <iframe
        src={MapData.src}
        title={MapData.title}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: "100%", border: 0 }}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
