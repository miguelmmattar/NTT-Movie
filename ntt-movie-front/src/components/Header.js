import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <HeaderWrapper>NTT MOVIE</HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: #070E27;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    color: white;
    font-size: 40px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;