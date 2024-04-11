import styled from "styled-components";
import "../../../styles/index.css";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 22.9375rem;
  width: 18.125rem;

  border: 0.0313rem solid var(--stroke-color);
  border-radius: 0.5rem;
  transition: all 0.2s;

  margin: 0;

  a {
    height: 100%;
    width: auto;

    text-decoration: none;
    list-style: none;

    margin: 0;
    border-radius: 0.5rem;

    img {
      height: 100%;
      width: 100%;
      max-width: max-content;
      border-radius: 0.5rem;
      pointer-events: none;
      user-select: none;
    }
  }

  &:hover {
    pointer-events: auto;
    transform: scale(1.04);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;
