import React from "react";
import App from "./App";
import { ResetCSS } from "./ResetCss/styled";
import GithubProvider from "./Providers";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;