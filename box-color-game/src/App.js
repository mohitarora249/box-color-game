import React, { useState } from "react";

import Board from "../src/components/Board/Board";
import BoardConfiguration from "../src/components/BoardConfiguration/BoardConfiguration";
import { AVAILABLE_SCREENS } from "../src/constants/constants";
import "./App.css";

const App = () => {
  const [displayScreen, setDisplayedScreen] = useState(
    AVAILABLE_SCREENS.BOARD_CONFIGURATION_SCREEN
  );

  const [configuration, setConfiguration] = useState();

  const getConfiguration = (config) => {
    setConfiguration({ ...config });
    setDisplayedScreen(AVAILABLE_SCREENS.HOME_SCREEN);
  };

  switch (displayScreen) {
    case AVAILABLE_SCREENS.HOME_SCREEN: {
      return (
        <Board rows={configuration["rows"]} cols={configuration["cols"]} />
      );
    }
    case AVAILABLE_SCREENS.BOARD_CONFIGURATION_SCREEN: {
      return <BoardConfiguration getConfiguration={getConfiguration} />;
    }
  }
};

export default App;
