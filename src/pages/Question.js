import React, { useState } from "react";
import styled from "styled-components";
import StyledLargeFooter from "../styled/LargeFooter";
import StyledContentContainer from "../styled/ContentContainer";
import hypnoSally from "../assets/hypno-sally.gif";
import ValidationButton from "../components/ValidationButton";

const StyledQuestionContainer = styled.div`
  background-image: url(${hypnoSally});
  background-attachment: fixed;
  background-position-x: center;
  background-repeat: no-repeat;
  flex-direction: column;
  height: 270px;
  width: 100%;
  max-width: 375px;
  display: flex;
`;

const Question = (props) => {
  const [text, setText] = useState("");
  const { correctAnswer, linkTarget } = props;

  return (
    <StyledContentContainer>
      <StyledQuestionContainer />
      <StyledLargeFooter>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <ValidationButton
          text={text}
          correctAnswer={correctAnswer}
          linkTarget={linkTarget}
        />
      </StyledLargeFooter>
    </StyledContentContainer>
  );
};

export default Question;
