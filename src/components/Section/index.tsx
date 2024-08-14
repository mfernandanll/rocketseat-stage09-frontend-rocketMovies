import { ReactNode } from "react";
import { Container } from "./styles";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
