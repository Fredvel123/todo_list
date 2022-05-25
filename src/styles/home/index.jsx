import styled from "styled-components";
import { dark, light } from "../tools/colors";

export const HomePage = styled.div`
  min-height: 100vh;
  min-width: 320px;
  color: white;
  background: ${({ mode }) =>
    mode ? light.VeryLightGrayishBlue : dark.VeryDarkBlue};
`;
