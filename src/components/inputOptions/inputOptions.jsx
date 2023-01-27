import React from "react";
import "./inputOptions.css";
const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      {Icon && <Icon className="inputOption_icon" style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
