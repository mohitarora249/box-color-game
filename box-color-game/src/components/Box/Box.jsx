import React, { useEffect } from "react";

const Box = ({ rowId, colId, changeColorHandler, backgroundColor, cols }) => {
  useEffect(() => {}, [backgroundColor]);

  const boxClickHandler = () => {
    changeColorHandler(rowId, colId);
  };

  return (
    <div
      key={`${rowId}-${colId}`}
      style={{
        width: `${100 / cols}%`,
        backgroundColor,
        cursor: "pointer",
        border: "1px solid black",
      }}
      onClick={boxClickHandler}
    />
  );
};

export default Box;
