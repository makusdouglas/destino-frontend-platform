import React, { Suspense } from "react";
import { GlobalStyles } from "../global/global-styles";
import { AuthProvider } from "../presentation/context";
import { Routes } from "./routes";

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Suspense>
  );
};
