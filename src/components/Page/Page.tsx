import { Container } from "@mui/material";
import { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <Container maxWidth="sm">{children}</Container>;
}
