import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const StyledButton = styled(Button)`
  && {
    padding: 10px 13px;
    background: linear-gradient(45deg, #02022b 35%, #353548 90%);
    // box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 29%),
    // 	0px 0px 6px 2px rgb(57 6 64 / 47%);
    transition: all 0.2s linear;
    width: fit-content;
    display: flex;
    gap: 0.8rem;
    border-radius: 10px 0 0 10px;
  }

  // &&:hover {
  // background: rgb(36 36 62 / 81%);
  // box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 35%),
  // 	0px 0px 6px 2px rgb(57 6 64 / 55%);
  // }
`;

const StyledLink = styled.a`
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 9;
  overflow: hidden;
  width: 40px;
  transition: all 0.2s linear;
`;
const StarButton = () => {
  Cookies.remove("starred");

  return (
    <StyledLink
      as={motion.a}
      initial={{ width: "0px" }}
      animate={{ width: "40px" }}
      transition={{ duration: 0.2 }}
      whileHover={{ width: "95px" }}
      href="https://github.com/virat07"
      target="_blank"
      re="noreferrer"
    >
      <StyledButton
        // onClick={handleClick}
        variant="contained"
      >
        <span>⭐</span> <p> Star</p>
      </StyledButton>
    </StyledLink>
  );
};

export default StarButton;
