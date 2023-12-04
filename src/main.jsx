import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import "../i18n.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<div>Loading ...</div>}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>
);
