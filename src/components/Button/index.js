import React from "react";

import './styles.css';

export const Button = ({ children }) => {
  return (
    <div className="my-button" role="button">
      {children}
    </div>
  );
};
