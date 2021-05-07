import React from "react";

import Board from "../../components/Board/Board";

const Home = ({ rows, cols }) => {
  return <Board rows={rows} cols={cols} />;
};

export default Home;
