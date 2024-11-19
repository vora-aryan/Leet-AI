import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  background-color: ${(props) => props.bgColor || "#22177A"};
  padding: 8px;
  border-color: transparent;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 22px;
  transition: all 0.1s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   chrome.runtime.sendMessage({ action: "activate" });
  // }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
        cursor: "move", // Adding move cursor for the inner div
      }}
    >
      <h1>Leet AI Extension</h1>
      <h2 style={{ marginTop: "40px" }}>Count: {count}</h2>
      <div>
        <Button onClick={handleClick}>Increment</Button>
        <Button bgColor="#133E87" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default App;
