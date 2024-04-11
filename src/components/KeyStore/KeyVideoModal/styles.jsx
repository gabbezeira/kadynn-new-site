import styled from "styled-components";
import "../../../styles/index.css";

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black-opacity);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.875rem;

    width: auto;
    height: auto;
    padding: 0.875rem 0.875rem;

    background-color: var(--black-color);
    border-radius: 0.375rem;
    border: 0.5px solid var(--stroke-color);

    .modalTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .modalTitle {
        font-size: 1.125rem;
        color: var(--white-color);
      }

      .closeIcon {
        width: 1.5rem;
        height: auto;
        color: var(--white-color);
        cursor: pointer;
        transition: 0.2s all;

        &:hover {
          transform: scale(1.13);
        }
      }
    }

    .modalVideo {
      width: 35rem;
      height: 19.6875rem;
      border-radius: 0.375rem;
    }

    .modalButtons {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      gap: 0.875rem;

      width: 100%;
      height: auto;

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 0.5rem;

        width: auto;
        height: auto;
        padding: 0.5rem 1.125rem;

        font-size: 0.875rem;
        border-radius: 0.375rem;
        background-color: var(--secondary-color);
        color: var(--white-color);
        text-decoration: none;

        transition: 0.2s all;

        &:hover {
          transform: scale(1.02);
        }
      }

      .outlineButton {
        background-color: transparent;
        border: 1px solid var(--white-color);
      }
    }
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 640px) {
    .modal {
      .modalTop {
        .modalTitle {
          font-size: 0.875rem;
        }
      }

      .modalVideo {
        width: 21.25rem;
        height: 12.25rem;
        border-radius: 0.375rem;
      }

      .modalButtons {
        justify-content: center;
      }
    }
  }
`;
