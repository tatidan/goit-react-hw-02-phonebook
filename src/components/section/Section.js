import React from "react";
import "./Section.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </>
  );
};

export default Section;
