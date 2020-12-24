import React, { useState } from "react";
import styled from "styled-components";
import StyledLargeFooter from "../styled/LargeFooter";
import StyledContentContainer from "../styled/ContentContainer";
import StyledInput from "../styled/Input";
import StyledLink from "../styled/Link";
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

const StyledInstruction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const FirstQuizComponent = () => (
  <StyledInstruction>
    <p>Der Weihnachtsmann schenkt Sally elf Kekse und sagt: </p>
    <p>
      „Es ist wichtig, dass Du sie nicht alle auf einmal isst. Warte mindestens
      sieben Minuten, bis Du einen weiteren Keks isst,{" "}
      <Strong>sonst platzt du.</Strong>“
    </p>
    <p>Nach wieviel Minuten hat Sally frühestens alle Kekse gegessen?</p>
  </StyledInstruction>
);

const SecondQuizComponent = () => (
  <StyledInstruction>
    <p>Es geht immer um den Baum herum und kann doch nicht hinein.</p>
    <Strong>Was ist gemeint?</Strong>
  </StyledInstruction>
);

const ThirdQuizComponent = () => (
  <StyledInstruction>
    <p>
      Es ist eine Gänseherde auf dem Feld. Eine Gans läuft vor zweien. Eine Gans
      läuft zwischen zweien. Eine Gans läuft hinter zweien.
    </p>
    <Strong>Wie viel Gänse sind das?</Strong>
  </StyledInstruction>
);

const questions = [
  <FirstQuizComponent />,
  <SecondQuizComponent />,
  <ThirdQuizComponent />,
];

const Question = (props) => {
  const [text, setText] = useState("");
  const { correctAnswer, linkTarget, image, questionIndex } = props;

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
          <StyledLink to={`/${linkTarget.toString()}`}>
            Zu schwer - so weiter
          </StyledLink>
        </div>
      </StyledLargeFooter>
    </StyledContentContainer>
  );
};

export default Question;
