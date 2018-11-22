import React from "react";
import styled from "react-emotion";

export const Container = styled.div`
  margin-bottom: ${props => props.expanded ? '48px' : '24px'};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.blue};
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  color: inherit;
`;
