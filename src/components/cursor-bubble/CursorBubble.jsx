import React, { useLayoutEffect, useState } from "react";
import "./cursor-bubble.scss";

const CursorBubble = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    document.onmousemove = (event) => {
      var e = event;
      setX(e.clientX);
      setY(e.clientY);
    };
  });

  return (
    <div id="cursor" className="cursor-bubble" style={{ left: x, top: y }} />
  );
};

export default CursorBubble;
