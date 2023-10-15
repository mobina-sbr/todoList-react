import React from 'react';
import Logo from "../assest/download.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  > div {
    flex: 1;
  }
`;

const Header = styled.header`
  padding: 1rem 0;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default function AppLayout(props) {
    return (
        <Wrapper>
            <Header>
                <img src={Logo} alt="logo" width={44} height={44} />
                UpTodo
            </Header>

            <div>{props.children}</div>
        </Wrapper>
    )
}
