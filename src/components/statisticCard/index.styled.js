import styled from "styled-components";
import { colors } from "../../utils/constants";

export const Container = styled.div`
  //   border: 1px solid black;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 1px 1px 5px 5px ${colors.lightGreenColor};
  background-color: ${colors.lightGreenColor};
  width: 290px;
  max-width: 290px;
  margin-bottom: 30px;
`;

export const Count = styled.div`
  font-size: 3em;
  font-weight: 600;
  color: ${colors.mainColor};
`;

export const Label = styled.p`
  font-size: 1.1em;
`;
