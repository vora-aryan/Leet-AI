import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";

console.log("content.jsx has been injected!");

const container = document.createElement("div");
container.innerHTML = `<h1>Hello from React</h1>`;
container.id = "react-extension-root";
document.body.appendChild(container);

// Render the React App
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
