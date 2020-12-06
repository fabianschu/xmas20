import React from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../styled/Button";

const LinkButton = (props) => {
  const history = useHistory();

  const { linkTarget, buttonText } = props;

  const handleClick = () => {
    history.push(linkTarget.toString());
  };

  return <StyledButton onClick={handleClick}>{buttonText}</StyledButton>;
};

export default LinkButton;
