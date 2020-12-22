import React from "react";
import styled from "styled-components";

const StyledClickArea = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid
    ${({ targets, id }) => {
      console.log(targets);
      console.log(id);
      console.log(targets.includes(toString(id)));
      if (targets.includes(id)) {
        return "red";
      } else {
        return "green";
      }
    }};
`;

const StyledClickRow = styled.div`
  display: flex;
  width: 100%;
  height: 12.5%;
`;

const TapGrid = (props) => {
  const { handleClick, targets } = props;

  return (
    <>
      <StyledClickRow>
        <StyledClickArea id={1} onClick={handleClick} targets={targets} />
        <StyledClickArea id={2} onClick={handleClick} targets={targets} />
        <StyledClickArea id={3} onClick={handleClick} targets={targets} />
        <StyledClickArea id={4} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={5} onClick={handleClick} targets={targets} />
        <StyledClickArea id={6} onClick={handleClick} targets={targets} />
        <StyledClickArea id={7} onClick={handleClick} targets={targets} />
        <StyledClickArea id={8} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={9} onClick={handleClick} targets={targets} />
        <StyledClickArea id={10} onClick={handleClick} targets={targets} />
        <StyledClickArea id={11} onClick={handleClick} targets={targets} />
        <StyledClickArea id={12} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={13} onClick={handleClick} targets={targets} />
        <StyledClickArea id={14} onClick={handleClick} targets={targets} />
        <StyledClickArea id={15} onClick={handleClick} targets={targets} />
        <StyledClickArea id={16} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={17} onClick={handleClick} targets={targets} />
        <StyledClickArea id={18} onClick={handleClick} targets={targets} />
        <StyledClickArea id={19} onClick={handleClick} targets={targets} />
        <StyledClickArea id={20} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={21} onClick={handleClick} targets={targets} />
        <StyledClickArea id={22} onClick={handleClick} targets={targets} />
        <StyledClickArea id={23} onClick={handleClick} targets={targets} />
        <StyledClickArea id={24} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={25} onClick={handleClick} targets={targets} />
        <StyledClickArea id={26} onClick={handleClick} targets={targets} />
        <StyledClickArea id={27} onClick={handleClick} targets={targets} />
        <StyledClickArea id={28} onClick={handleClick} targets={targets} />
      </StyledClickRow>
      <StyledClickRow>
        <StyledClickArea id={29} onClick={handleClick} targets={targets} />
        <StyledClickArea id={30} onClick={handleClick} targets={targets} />
        <StyledClickArea id={31} onClick={handleClick} targets={targets} />
        <StyledClickArea id={32} onClick={handleClick} targets={targets} />
      </StyledClickRow>
    </>
  );
};

export default TapGrid;
