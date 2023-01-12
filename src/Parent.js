import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#3F2");

  function changeBackgroundColor() {
    setColor(getRandomColor())
    setChildrenColor(getRandomColor())
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child bg={childrenColor} onChangeColor={changeBackgroundColor}/>
      <Child bg={childrenColor} onChangeColor={changeBackgroundColor}/>
    </div>
  );
}

export default Parent;
