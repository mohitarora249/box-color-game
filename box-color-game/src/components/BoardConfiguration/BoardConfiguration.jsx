import React, { useState } from "react";

const BoardConfiguration = () => {
  const [configuration, setConfiguration] = useState({
    rows: 0,
    cols: 0,
  });

  const handleInputChange = (e) => {
    let copyOfConfiguration = { ...configuration };
    copyOfConfiguration[e.target.name] = parseInt(e.target.value);
    setConfiguration(copyOfConfiguration);
  };

  return (
    <div>
      <input
        type="text"
        id="rows"
        placeholder="# of rows"
        name="rows"
        value={configuration.rows}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <br />
      <input
        type="text"
        id="cols"
        placeholder="# of columns"
        name="cols"
        value={configuration.cols}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BoardConfiguration;
