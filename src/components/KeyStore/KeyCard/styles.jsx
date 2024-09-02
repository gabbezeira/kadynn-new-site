import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: max-content;
  width: auto;
  max-width: 21.875rem;

  background-color: var(--black-color);
  border: 0.0625rem solid var(--stroke-color);
  border-radius: 0.5rem;

  .keyImage {
    height: 100%;
    width: 100%;
    max-height: max-content;

    border-radius: 0.4rem 0.4rem 0rem 0rem;

    pointer-events: none;
    user-select: none;
  }

  .keyDetails {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0.875rem;

    .keyHeader {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;

      .keyTitle {
        color: var(--white-color);
        font-size: 0.875rem;
        font-weight: normal;
      }
    }

    .keyLocate {
      color: var(--secondary-color);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .keyFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: auto;
      width: 100%;

      background-color: var(--black-color);
      border-radius: 0rem 0rem 0.5rem 0.5rem;

      .priceText {
        color: var(--gray-color);
        font-size: 0.75rem;
        font-weight: normal;
      }

      .keyPrice {
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
  }
`
