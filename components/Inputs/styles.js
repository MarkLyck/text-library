import React from "react";
import styled from "react-emotion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: none;
  font-size: 1.1rem;

  &:focus {
    background: white;
  }
`;

export const Button = styled.button`
  display: ${props => (props.isVisible ? "flex" : "none")};
  background: ${props => props.theme.colors.blue};
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
`;
