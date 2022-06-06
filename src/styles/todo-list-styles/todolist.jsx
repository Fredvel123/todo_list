import styled from "styled-components";
import { dark, light } from "../tools/colors.js";

export const TodoListStyles = styled.div`
  background: ${({ mode }) =>
    mode ? light.VeryLightGray : dark.VeryDarkDesaturatedBlue};
  border-radius: 5px;
  color: ${({ mode }) =>
    mode ? light.DarkGrayishBlue : dark.LightGrayishBlue};
  margin-top: 3.5vh;
  padding: 1vh 5%;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;
