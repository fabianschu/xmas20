import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledClickArea = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid red;
`;

const StyledClickRow = styled.div`
  display: flex;
  width: 100%;
  height: 12.5%;
`;

const TapGrid = (props) => {
  const history = useHistory();

  const { targets, linkTarget, handleClick } = props;

  return (
    <>
      <StyledClickRow>
        <StyledClickArea id={1} onClick={handleClick} />
        <StyledClickArea id={2} onClick={handleClick} />
        <StyledClickArea id={3} onClick={handleClick} />
        <StyledClickArea id={4} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={5} onClick={handleClick} />
        <StyledClickArea id={6} onClick={handleClick} />
        <StyledClickArea id={7} onClick={handleClick} />
        <StyledClickArea id={8} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={9} onClick={handleClick} />
        <StyledClickArea id={10} onClick={handleClick} />
        <StyledClickArea id={11} onClick={handleClick} />
        <StyledClickArea id={12} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={13} onClick={handleClick} />
        <StyledClickArea id={14} onClick={handleClick} />
        <StyledClickArea id={15} onClick={handleClick} />
        <StyledClickArea id={16} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={17} onClick={handleClick} />
        <StyledClickArea id={18} onClick={handleClick} />
        <StyledClickArea id={19} onClick={handleClick} />
        <StyledClickArea id={20} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={21} onClick={handleClick} />
        <StyledClickArea id={22} onClick={handleClick} />
        <StyledClickArea id={23} onClick={handleClick} />
        <StyledClickArea id={24} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={25} onClick={handleClick} />
        <StyledClickArea id={26} onClick={handleClick} />
        <StyledClickArea id={27} onClick={handleClick} />
        <StyledClickArea id={28} onClick={handleClick} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={29} onClick={handleClick} />
        <StyledClickArea id={30} onClick={handleClick} />
        <StyledClickArea id={31} onClick={handleClick} />
        <StyledClickArea id={32} onClick={handleClick} />
      </StyledClickRow>
    </>
  );
};

export default TapGrid;
