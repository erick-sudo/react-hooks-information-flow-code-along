import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, bg }) {
  return <div className="child" onClick={onChangeColor} style={{ backgroundColor: bg }} />;
}

export default Child;
