import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledButton = styled.button`
  height: 77px;
  width: 307px;
  border-radius: 37px;
  border: none;
  background-image: linear-gradient(#e01c8f, #fca16a);
  box-shadow: 0px 3px 6px 0px#c6c6c6e6;
  font-family: "Century Gothic";
  font-weight: bold;
  font-size: 25px;
  color: white;
`;

const Button = (props) => {
  const history = useHistory();

  const { linkTarget, buttonText } = props;

  const handleClick = () => {
    history.push(linkTarget.toString());
  };

  return <StyledButton onClick={handleClick}>{buttonText}</StyledButton>;
};

export default Button;
