import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InlineApp from "./components/InlineApp";
const root=createRoot(document.getElementById("demo"));
root.render(
    <StrictMode>
     <InlineApp />
    </StrictMode>
)