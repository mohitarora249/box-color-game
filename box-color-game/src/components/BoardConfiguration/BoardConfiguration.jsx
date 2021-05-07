import React, { useState } from "react";

const BoardConfiguration = ({ getConfiguration }) => {
  const [configuration, setConfiguration] = useState({
    rows: "",
    cols: "",
  });

  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    let copyOfConfiguration = { ...configuration };
    const val = parseInt(e.target.value);
    copyOfConfiguration[e.target.name] = Number.isInteger(val) ? val : "";
    setConfiguration(copyOfConfiguration);
  };

  const sendConfiguration = () => {
    if (isConfigurationValid()) {
      getConfiguration(configuration);
      return;
    }
    setError(true);
  };

  const isConfigurationValid = () => {
    return (
      configuration.rows !== "" &&
      Number.isInteger(configuration.rows) &&
      configuration.cols !== "" &&
      Number.isInteger(configuration.cols)
    );
  };

  return (
    <>
      <header className="header">
        <h1>Welcome to Board Game</h1>
      </header>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Select Configuration</h2>

        <label># of rows</label>
        <input
          type="text"
          id="rows"
          name="rows"
          value={configuration.rows}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <label># of columns</label>
        <input
          type="text"
          id="cols"
          name="cols"
          value={configuration.cols}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <button type="button" onClick={sendConfiguration}>
          SET
        </button>
        {error && (
          <div style={{ color: "red" }}>Please enter both the numbers.</div>
        )}
      </div>
    </>
  );
};

export default BoardConfiguration;
