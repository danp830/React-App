import styled from "styled-components";
import { colors } from "../../utils/constants";

export const Container = styled.div`
  padding: 10px;
`;

export const HeadingWithIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h2`
  color: ${colors.greenColor};
  margin-right: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;
