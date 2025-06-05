import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomPage from "./views/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomPage />
  </StrictMode>
);
