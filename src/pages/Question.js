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

const Strong = styled.span`
  font-weight: bold;
`;

const FirstQuizComponent = () => (
  <div>
    <p>Der Weihnachtsmann schenkt Sally elf Kekse und sagt: </p>
    <br />
    <p>
      „Es ist wichtig, dass Du sie nicht alle auf einmal isst. Warte mindestens
      sieben Minuten, bis Du einen weiteren Keks isst,{" "}
      <Strong>sonst platzt du.</Strong>“
    </p>
    <br />
    <p>Nach wieviel Minuten hat Sally frühestens alle Kekse gegessen?</p>
  </div>
);

const SecondQuizComponent = () => (
  <div>
    <p>
      Es geht immer um den Baum herum und kann doch nicht hinein. Was meinen
      wir?
    </p>
    <br />
    <p>Was ist gemeint?</p>
  </div>
);

const questions = [<FirstQuizComponent />, <SecondQuizComponent />];

const Question = (props) => {
  const [text, setText] = useState("");
  const { correctAnswer, linkTarget, image, questionIndex } = props;
  console.log(questionIndex);
  console.log(questions);
  return (
    <StyledContentContainer>
      <StyledQuestionContainer image={image} />
      <StyledLargeFooter>
        {questions[questionIndex]}
        <div>
          <StyledInput
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></StyledInput>
          <ValidationButton
            text={text}
            correctAnswer={correctAnswer}
            linkTarget={linkTarget}
          />
        </div>
      </StyledLargeFooter>
    </StyledContentContainer>
  );
};

export default Question;