import React from "react";
import styled from "styled-components";
import TapGrid from "../components/TapGrid";
import StyledContentContainer from "../styled/ContentContainer";
import StyledFooter from "../styled/Footer";
import ridingRainbow from "../assets/riding-rainbow.gif";

const StyledSearchContainer = styled.div`
  background-image: url(${ridingRainbow});
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
  return (
    <>
      <StyledContentContainer>
        <StyledSearchContainer>
          <TapGrid targets={[15, 16]} />
        </StyledSearchContainer>
        <StyledFooter>lol</StyledFooter>
      </StyledContentContainer>
    </>
  );
};

export default Search;
