import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "../components/LinkButton";
import StyledFooter from "../styled/Footer";
import StyledContentContainer from "../styled/ContentContainer";
import welcome from "../assets/welcome.gif";

const StyledWelcomeTextContainer = styled.div`
  background-image: url(${({ image }) => image});
  flex: 1;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position-x: center;
  background-repeat: no-repeat;
  border-color: red;
`;

const Strong = styled.span`
  font-weight: bold;
`;

const WelcomeBye = (props) => {
  const { linkTarget, image } = props;
  console.log(image);

  return (
    <StyledContentContainer>
      <StyledWelcomeTextContainer image={image} />
      <StyledFooter>
        {linkTarget ? (
          <>
            <p>Bereit für Weihnachstfun?</p>
            <LinkButton linkTarget={linkTarget} buttonText={"LOS GEHT'S"} />
          </>
        ) : (
          <>
            <p>
              Wir wünschen dir feine, fette und famose Weihnachten. Und weil das
              ganze rumdistanziere haptisch hart nervt: Fühl dich gedrückt
            </p>
            <span>Sally, Fabi & Lena</span>
          </>
        )}
      </StyledFooter>
    </StyledContentContainer>
  );
};

export default WelcomeBye;
