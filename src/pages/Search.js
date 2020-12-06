import React from "react";
import styled from "styled-components";
import TapGrid from "../components/TapGrid";
import StyledContentContainer from "../styled/ContentContainer";
import StyledFooter from "../styled/Footer";

const StyledSearchContainer = styled.div`
  background-image: url(${({ image }) => image});
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
  const { image, targets, linkTarget } = props;

  return (
    <>
      <StyledContentContainer>
        <StyledSearchContainer image={image}>
          <TapGrid targets={targets} linkTarget={linkTarget} />
        </StyledSearchContainer>
        <StyledFooter>Wo ist Sally?</StyledFooter>
      </StyledContentContainer>
    </>
  );
};

export default Search;
