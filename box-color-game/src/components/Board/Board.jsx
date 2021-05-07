import React, { useState, useEffect } from "react";

import Box from "../Box/Box";
import { randomColorGenerator } from "../../utils/util";
const Board = ({ rows, cols }) => {
  const [board, setBoard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBoard(createBoardData());
    setIsLoading(false);
  }, [cols, rows]);

  const createBoardData = () => {
    let eachRow = [],
      boardData = [];
    [...Array(rows).keys()].map((r) => {
      [...Array(cols).keys()].map((c) => {
        eachRow.push({ rowId: r, colId: c, color: randomColorGenerator() });
      });
      boardData.push(eachRow);
      eachRow = [];
    });
    return boardData;
  };

  const changeColorHandler = (selectedRowId, selectedColId) => {
    let copyOfBoard = [...board];
    copyOfBoard[selectedRowId][selectedColId]["color"] = randomColorGenerator();

    // randomly choosing adjacent element
    if (Math.random() * 10 > 5) {
      let adjacentRowId = getAdjacentId(selectedRowId, rows);
      copyOfBoard[adjacentRowId][selectedColId][
        "color"
      ] = randomColorGenerator();
    } else {
      let adjacentColId = getAdjacentId(selectedColId, cols);
      copyOfBoard[selectedRowId][adjacentColId][
        "color"
      ] = randomColorGenerator();
    }
    setBoard(copyOfBoard);
  };

  const getAdjacentId = (selectedId, rowOrColsNumber) =>
    selectedId === rowOrColsNumber - 1 ? selectedId - 1 : selectedId + 1;

  if (isLoading)
    return (
      <div className="center_loader">
        <div className="loader" />
      </div>
    );

  return (
    <>
      {board.map((row, idx) => {
        return (
          <div
            key={`row-${idx}`}
            style={{ display: "flex", height: `${100 / rows}vh` }}
          >
            {row.map((r) => (
              <Box
                cols={cols}
                key={`${r["rowId"]}-${r["colId"]}`}
                rowId={r["rowId"]}
                colId={r["colId"]}
                backgroundColor={r["color"]}
                changeColorHandler={changeColorHandler}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Board;

// {[...Array(rows).keys()].map((r) => {
//     return (
//       <div key={`row-key-${r}`} style={{ display: "flex" }}>
//         {[...Array(cols).keys()].map((c) => {
//           return <Box key={`col-key-${c}`} rowId={r} colId={c} />;
//         })}
//       </div>
//     );
//   })}
