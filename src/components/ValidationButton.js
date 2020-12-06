import React from "react";
import { useHistory } from "react-router-dom";
import StyledButton from "../styled/Button";

const ValidationButton = (props) => {
  const history = useHistory();

  const { text, correctAnswer, linkTarget } = props;

  const handleClick = () => {
    if (text.includes(correctAnswer)) {
      history.push(linkTarget.toString());
    }
  };

  return <StyledButton onClick={handleClick}>That's right!</StyledButton>;
};

export default ValidationButton;
