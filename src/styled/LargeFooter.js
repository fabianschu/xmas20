import styled from "styled-components";

const StyledFooter = styled.div`
  flex: 1;
  width: 100%;
  max-width: 375px;
  font-family: "Century Gothic";
  font-size: 20px;
  color: #f8768b;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0;
  p {
    margin: 0 20px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export default StyledFooter;
