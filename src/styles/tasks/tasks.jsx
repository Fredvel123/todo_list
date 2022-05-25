import styled from "styled-components";

export const TasksStyled = styled.div`
  color: white;
  z-index: 1000;
  background: #00000000;
  width: 40%;
  margin: 0 30%;
  margin-top: -15%;
  // top: 20%;
  position: relative;
  border: white;
  @media screen and (max-width: 650px) {
    margin: 0 20%;
    margin-top: -17%;
    width: 60%;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 0 10%;
    margin-top: -40%;
  }
`;
