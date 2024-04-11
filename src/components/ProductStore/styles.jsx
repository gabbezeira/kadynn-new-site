import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin: 8.125rem 0rem;

  .productGrid {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: max-content;

    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    gap: 2.5rem;
  }
`;
