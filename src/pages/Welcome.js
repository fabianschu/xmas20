import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "../components/LinkButton";
import StyledFooter from "../styled/Footer";
import StyledContentContainer from "../styled/ContentContainer";
import welcome from "../assets/welcome.gif";

const StyledWelcomeTextContainer = styled.div`
  background-image: url(${welcome});
  flex: 1;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position-x: center;
  background-repeat: no-repeat;
  border-color: red;
`;

const Welcome = () => {
  return (
    <StyledContentContainer>
      <StyledWelcomeTextContainer />
      <StyledFooter>
        <p>Bereit für Weihnachstfun?</p>
        <LinkButton linkTarget={1} buttonText={"LOS GEHT'S"} />
      </StyledFooter>
    </StyledContentContainer>
  );
};

export default Welcome;
