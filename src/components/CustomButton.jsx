import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  href,
  onClick,
  children,
  bg = "#FDAE06",
  color = "#143264",
  width = "210px",
  className = "",
}) => {
  return (
    <Button
      href={href}
      onClick={onClick}
      className={`custom-btn ${className}`}
      style={{
        backgroundColor: bg,
        color: color,
        border: "none",
        width: width,
        fontWeight: "700",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
