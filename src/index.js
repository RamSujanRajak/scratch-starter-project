import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "tailwindcss/tailwind.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

console.log("hi");

const root = createRoot(document.getElementById("root"));

root.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
);
