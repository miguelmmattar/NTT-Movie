import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <FooterWrapper></FooterWrapper>
  );
}

const FooterWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    border-top: 1px solid #bababa;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;