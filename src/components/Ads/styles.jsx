import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: nowrap;
  flex: 1;
  gap: 2.5rem;

  height: auto;
  width: 100%;
  padding: 0rem 2.375rem;
  border-radius: 0.5rem;

  background-size: cover;

  .text-container {
    display: flex;
    height: 100%;
    width: auto;
    max-width: max-content;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;

    .text-content {
      max-width: max-content;
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        text-transform: uppercase;
        font-size: 2.25rem;
        font-weight: 700;
      }

      h2 {
        color: var(--white-color);
        font-size: 1.5rem;
        font-weight: 500;

        b {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }
      }
    }

    a {
      text-decoration: none;
      height: auto;
      width: auto;

      .ad-button {
        height: auto;
        width: auto;

        background-color: transparent;
        border-radius: 0.25rem;
        border: 0.0625rem solid var(--white-color);
        padding: 0.75rem 2rem;

        color: var(--white-color);
        font-size: 1.25rem;
        font-weight: 600;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.04);
          border: 0.0625rem solid var(--secondary-color);
          color: var(--secondary-color);
        }
      }
    }
  }

  .image-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: none;

    height: auto;
    width: auto;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .image {
      display: flex;
      position: relative;
      height: 21.375rem;
      width: auto;

      transform: scale(1.105);
      bottom: 1.875rem;
    }
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 640px) {
    flex-direction: column-reverse !important;
    gap: 1.75rem;
    padding: 1.5rem;

    .text-container {
      width: 100%;
      align-items: center;
      gap: 1.25rem;

      .text-content {
        gap: 0.5rem;

        h1 {
          text-align: left;
          font-size: 1.5rem;
          line-height: 1.3;
        }

        h2 {
          text-align: left;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.3;
        }
      }

      a {
        width: 100%;
        max-width: fit-content;

        .ad-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }

    .image-container {
      width: 100%;
      height: 100%;

      .image {
        width: 100%;
        height: auto;

        transform: none;
        bottom: 0rem;
      }
    }
  }

  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 641px) and (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.75rem;
    padding: 1.5rem;

    .text-container {
      width: 100%;
      align-items: flex-start;
      gap: 1.25rem;

      .text-content {
        gap: 0.5rem;

        h1 {
          font-size: 22px;
          line-height: 1.3;
        }

        h2 {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.3;
        }
      }

      a {
        .ad-button {
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }

    .image-container {
      width: auto;
      height: 100%;

      .image {
        width: 100%;
        height: auto;

        transform: none;
        bottom: 0rem;
      }
    }
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.75rem;
    padding: 1.5rem;

    .text-container {
      width: 100%;
      align-items: flex-start;
      gap: 1.25rem;

      .text-content {
        gap: 0.5rem;

        h1 {
          font-size: 22px;
          line-height: 1.3;
        }

        h2 {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.3;
        }
      }

      a {
        .ad-button {
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }

    .image-container {
      width: auto;
      height: 100%;

      .image {
        width: 100%;
        height: auto;

        transform: none;
        bottom: 0rem;
      }
    }
  }
`
