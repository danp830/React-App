import React from "react";
import { MainContainer, Container, InputContainer } from "./index.styled";
import Input from "../../components/Input";

export default function Login() {
  return (
    <MainContainer>
      <Container>
        <h1>Login</h1>
        <InputContainer>
          <Input type="text" placeholder="Username" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Password" />
        </InputContainer>
      </Container>
    </MainContainer>
  );
}
