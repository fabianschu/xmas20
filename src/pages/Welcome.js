import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import StyledFooter from "../styled/Footer";
import StyledContentContainer from "../styled/ContentContainer";
import ridingRainbow from "../assets/riding-rainbow.gif";

const StyledWelcomeTextContainer = styled.div`
  background-image: url(${ridingRainbow});
  flex: 1;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position-x: center;
  background-repeat: no-repeat;
`;

const Welcome = () => {
  return (
    <StyledContentContainer>
      <StyledWelcomeTextContainer />
      <StyledFooter>
        <p>Bereit für Weihnachstfun?</p>
        <Button linkTarget={1} buttonText={"LOS GEHT'S"} />
      </StyledFooter>
    </StyledContentContainer>
  );
};

export default Welcome;
