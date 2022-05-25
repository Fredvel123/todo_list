import styled from "styled-components";

export const TasksStyled = styled.div`
  color: white;
  z-index: 1000;
  background: #00000000;
  width: 50%;
  margin: 0 25%;
  margin-top: -15%;
  position: relative;
  border: white;
  @media screen and (max-width: 650px) {
    width: 60%;
    margin: 0 20%;
    margin-top: -17%;
    width: 60%;
  }
  @media screen and (max-width: 450px) {
    width: 86%;
    margin: 0 7%;
    margin-top: -30%;
  }
`;
