import styled from "styled-components";
import { colors } from "../../utils/constants";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: ${colors.lightGreenColor};
  width: 30%;
  border-radius: 15px;
  padding: 20px 50px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;
