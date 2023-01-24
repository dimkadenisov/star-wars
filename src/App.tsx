import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";
import { theme } from "./constants/theme";
import { Router } from "./Router";

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Layout>
          <Suspense>
            <Router />
          </Suspense>
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
