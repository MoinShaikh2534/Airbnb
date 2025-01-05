import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary || "#007BFF"};
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.secondary || "#0056b3"};
  }
`;

const TextButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default TextButton;
