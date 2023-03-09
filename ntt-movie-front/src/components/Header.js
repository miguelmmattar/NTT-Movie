import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <AiOutlineLeft onClick={() => navigate(-1)}/>
      <h1>NTT MOVIE</h1>
      <AiFillHeart onClick={() => navigate("/favorites")} />
    </HeaderWrapper>
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
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    svg {
      cursor: pointer;
      margin: 0 20px;
      width: 30px;
      height: 30px;
    }
`;