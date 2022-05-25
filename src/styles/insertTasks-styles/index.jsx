import styled from "styled-components";
import { dark, light } from "../tools/colors.js";

export const InsertTasksStyles = styled.form`
  margin-top: 5vh;
  input {
    background: ${({ mode }) =>
      mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
    color: ${({ mode }) => (mode ? "black" : "white")};
    border-radius: 5px;
    padding: 4vh 10%;
    outline: none;
    font-size: 15px;
    width: 80%;
    border: none;
  }
  @media screen and (max-width: 650px) {
    input {
      padding: 3vh 10%;
    }
  }
  @media screen and (max-width: 450px) {
    input {
      padding: 2.5vh 10%;
      font-size: 12px;
    }
  }
`;
