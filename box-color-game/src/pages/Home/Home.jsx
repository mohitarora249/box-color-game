import React from "react";

import Board from "../../components/Board/Board";

const Home = () => {
  const NUMBER_OF_ROWS = 8;
  const NUMBER_OF_COLS = 8;

  return <Board rows={NUMBER_OF_ROWS} cols={NUMBER_OF_COLS} />;
};

export default Home;
