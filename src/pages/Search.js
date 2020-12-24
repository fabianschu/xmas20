import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import TapGrid from "../components/TapGrid";
import StyledContentContainer from "../styled/ContentContainer";
import StyledFooter from "../styled/Footer";
import StyledLink from "../styled/Link";

const StyledSearchContainer = styled.div`
  background-image: url(${({ image, animation, showAnimation }) => {
    if (animation && showAnimation) {
      return animation;
    }
    return image;
  }});
  background-position: center;
  background-size: cover;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  height: 100%;
  display: flex;
`;

const Search = (props) => {
  const history = useHistory();
  const [showAnimation, setShowAnimation] = useState(false);
  const { image, targets, linkTarget, animation, instruction } = props;

  const clickWithoutSuccessAnimation = (e) => {
    if (targets.includes(parseInt(e.target.id))) {
      history.push(linkTarget.toString());
    } else {
      console.log("nope");
    }
  };

  const clickWithSuccessAnimation = (e) => {
    if (targets.includes(parseInt(e.target.id))) {
      setShowAnimation(true);
      setTimeout(() => {
        history.push(linkTarget.toString());
      }, 4000);
    } else {
      console.log("nope");
    }
  };

  return (
    <>
      <StyledContentContainer>
        <StyledSearchContainer
          image={image}
          animation={animation}
          showAnimation={showAnimation}
        >
          <TapGrid
            targets={targets}
            linkTarget={linkTarget}
            handleClick={
              animation
                ? clickWithSuccessAnimation
                : clickWithoutSuccessAnimation
            }
          />
        </StyledSearchContainer>
        <StyledFooter>
          <div>
            <p>Tippe die richtige Stelle an!</p>
            <span>{instruction}</span>
          </div>
          <StyledLink to={`/${linkTarget.toString()}`}>
            Zu schwer - so weiter
          </StyledLink>
        </StyledFooter>
      </StyledContentContainer>
    </>
  );
};

export default Search;
