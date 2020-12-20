import React, { useState } from "react";
import styled from "styled-components";
import StyledLargeFooter from "../styled/LargeFooter";
import StyledContentContainer from "../styled/ContentContainer";
import StyledInput from "../styled/Input";
import ValidationButton from "../components/ValidationButton";

const StyledQuestionContainer = styled.div`
  background-image: url(${({ image }) => image});
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
  const { correctAnswer, linkTarget, image, question } = props;
  console.log(question);
  return (
    <StyledContentContainer>
      <StyledQuestionContainer image={image} />
      <StyledLargeFooter>
        {question.map((text) => (
          <>
            <p>{text}</p>
            <br />
          </>
        ))}
        <StyledInput
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></StyledInput>
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
