import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.375rem;
  gap: 2.375rem;
  height: 100%;
  width: 100%;
  justify-content: start;
  background-color: var(--black-color);
  box-sizing: border-box;

  .imageArea {
    height: 22.9375rem;
    width: auto;
    flex-shrink: 0;
    min-width: 20rem;
    max-width: 30rem;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    gap: 1.5rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      width: 100%;
      gap: 1.125rem;

      .texts {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: auto;

        .title {
          color: var(--white-color);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .games {
          display: flex;
          justify-content: start;
          width: 100%;
          color: var(--secondary-color);
          font-family: var(--poppins);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          text-align: center;
          white-space: nowrap;
        }

        .platforms {
          color: var(--secondary-color);
          font-weight: 700;
          font-size: 1rem;
        }
      }

      .priceButton {
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 3.5rem;
        width: auto;

        padding: 0.3125rem 0.625rem;
        border-radius: 0.25rem;
        border: none;

        background-color: var(--secondary-color);

        color: var(--black-color);
        font-family: var(--poppins);
        font-size: 0.875rem;
        font-weight: 700;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .descriptionContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .descriptionText {
      font-size: 1rem;
      font-weight: 600;
      color: var(--white-color);
    }

    .infoArea {
      height: auto;
      width: 100%;
      padding: 1.5rem;
      background-color: var(--alt-black-color);
      color: var(--gray-color);
      border-radius: 0.5rem;
      overflow-y: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      line-height: 1.5;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 1.5rem;

    .imageArea {
      height: 100%;
      width: 100%;
      flex-shrink: none;
      min-width: auto;
      max-width: auto;
    }

    .content {
      .header {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  }
`
