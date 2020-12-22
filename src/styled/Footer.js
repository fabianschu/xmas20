import styled from "styled-components";

const StyledFooter = styled.div`
  height: 20%;
  max-height: 300px;
  width: 100%;
  max-width: 375px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Century Gothic";
  font-size: 16px;
  color: #f8768b;
  p,
  span {
    text-align: center;
    margin: 10px 0;
    display: block;
  }
  span {
    font-weight: bold;
  }
`;

export default StyledFooter;
