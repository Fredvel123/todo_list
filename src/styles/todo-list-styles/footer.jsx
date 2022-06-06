import styled from "styled-components";

export const FoorterStyles = styled.footer`
  margin-top: 3vh;
  .up {
    display: flex;
    justify-content: space-between;
  }
  .down {
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
  }
  p {
    color: ${({ mode }) => (mode ? "black" : "white")};
  }
`;
