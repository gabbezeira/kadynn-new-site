import styled from "styled-components";
import "../../../styles/index.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 22.9375rem;
  width: 18.125rem;

  background-color: var(--black-color);
  border: 0.0625rem solid var(--stroke-color);
  border-radius: 0.5rem;

  .productImage {
    height: 100%;
    max-height: max-content;
    width: 100%;

    background-size: cover;
    background-position: center;

    border-radius: 0.4rem 0.4rem 0rem 0rem;
  }

  .productFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: auto;
    width: 100%;

    background-color: var(--black-color);
    padding: 1.125rem 0.875rem;

    border-radius: 0rem 0rem 0.5rem 0.5rem;

    .productTitle {
      color: var(--white-color);
      font-size: 1rem;
      font-weight: normal;
    }

    .productPrice {
      height: auto;
      width: auto;
      text-decoration: none;
      user-select: none;

      .priceButton {
        height: auto;
        width: auto;

        padding: 0.3125rem 0.625rem;
        border-radius: 0.25rem;
        border: none;

        background-color: var(--secondary-color);
        color: var(--black-color);

        font-family: var(--poppins);
        font-size: 14px;
        font-weight: 700;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
