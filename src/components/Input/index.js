import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/constants";

export default function Input({ type, onChange, placeholder }) {
  return (
    <TextInput type={type} placeholder={placeholder} onChange={onChange} />
  );
}

const TextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 52px 10px 16px;
  margin: 0;
  border-radius: 4px;
  border: 2px solid ${colors.lightMainColor};
  font-size: 16px;
  line-height: 28px;
  border-color: ${colors.greenColor};
  ::placeholder {
    color: ${colors.lightMainColor};
  }
  &:focus {
    outline: 0;
    border-color: ${colors.greenColor};
  }
`;
