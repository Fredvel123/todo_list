import styled from "styled-components";
import Image from "next/image";

export const Header_Tasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 37px;
    letter-spacing: 10px;
    font-family: "Plus Jakarta Sans", sans-serif;
  }
  @media screen and (max-width: 850px) {
    h2 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 650px) {
    h2 {
      font-size: 25px;
    }
  }
`;

export const Image_icon = styled(Image)`
  cursor: pointer;
`;
