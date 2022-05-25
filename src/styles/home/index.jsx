import styled from "styled-components";
import { dark, light } from "../tools/colors";
import wallpaper from "../../assets/images/bg-desktop-light.jpg";
import theme from "../../redux/slices/theme";

export const HomePage = styled.div`
  min-height: 100vh;
  color: white;
  background: ${({ mode }) =>
    mode ? light.VeryLightGrayishBlue : dark.VeryDarkBlue};
`;
