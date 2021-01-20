import React from "react";
import { Container, Count, Label } from "./index.styled";

export default function StatisticCard({ label, number }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Count>{number}</Count>
    </Container>
  );
}
