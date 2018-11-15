import React from "react";
import styled from "react-emotion";

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 16px;
  background: white;
  border-radius: 6px;
  box-shadow: rgba(111, 120, 156, 0.08) 0px 4px 14px 0px;
`;

export const MessageText = styled.p`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Succeses = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text};
`;

export const VoteButton = styled.button`
  background: white;
  color: ${props => props.theme.colors[props.positive ? "green" : "red"]};
  margin: 8px;
  height: 32px;
  width: 32px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 6px;
  box-shadow: rgba(111, 120, 156, 0.08) 0px 4px 14px 0px;
  transform: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
