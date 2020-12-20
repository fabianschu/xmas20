import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import TapGrid from "../components/TapGrid";
import StyledContentContainer from "../styled/ContentContainer";
import StyledFooter from "../styled/Footer";

const StyledSearchContainer = styled.div`
  background-image: url(${({ image, animation, showAnimation }) => {
    console.log(image);
    console.log(animation);
    if (animation && showAnimation) {
      return animation;
    }
    return image;
  }});
  background-attachment: fixed;
  background-position-x: center;
  background-repeat: no-repeat;
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
  const { image, targets, linkTarget, animation } = props;
  console.log(image);
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
      }, 3000);
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
        <StyledFooter>Wo ist Sally?</StyledFooter>
      </StyledContentContainer>
    </>
  );
};

export default Search;
