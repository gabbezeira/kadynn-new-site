import styled from "styled-components";
import "@globalStyles/index.css";

export const Container = styled.div`
  width: 100%;
  height: 40.625rem;
  margin-top: 5rem;
  pointer-events: none;
  user-select: none;
  background-size: cover;
  background-position: top;

  @media (max-width: 640px) {
    height: 31.25rem;
    background-position: center;
    background-size: cover;
  }
`;
