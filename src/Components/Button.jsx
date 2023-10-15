import React from 'react'
import styled, { css } from "styled-components";

const Btn = styled.button`
  background: #8e7cff;
  border-radius: 3px;
  border: 1px solid #8e7cff;
  display: inline-block;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-top: 5rem;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  ${(props) =>
        props.outlined &&
        css`
      background: transparent;
      color: #8e7cff;
    `}
`;

export default function Button({outlined , onClick , children}) {
    return (
        <Btn outlined={outlined} onClick={onClick}>
            {children}
        </Btn>
    )
}
