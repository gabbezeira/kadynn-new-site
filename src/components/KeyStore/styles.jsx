import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  margin: 0rem;

  .keysGroup {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    gap: 2.5rem;

    padding: 2.375rem;
    border-radius: 0.5rem;
    background-color: var(--black-color);

    .keysFooter {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 100%;
      height: auto;

      .aspects {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        width: 100%;
        color: var(--white-color);

        font-size: 0.75rem;

        .first {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 300;

          .icon {
            width: 1.125rem;
            height: auto;

            margin-right: 0.375rem;
            color: var(--secondary-color);
          }

          strong {
            font-size: 0.875rem;
            margin-right: 0.375rem;
          }
        }

        .second {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 300;

          .icon {
            width: 1.125rem;
            height: auto;

            margin-right: 0.375rem;
            color: var(--secondary-color);
          }

          strong {
            font-size: 0.875rem;
            margin-right: 0.375rem;
          }

          a {
            color: var(--white-color);
            text-decoration: none;
            font-weight: 500;

            margin: 0rem 0.25rem;
          }
        }
      }

      .keysFooterButton {
        width: auto;
        height: auto;
        padding: 0.5rem 2rem;

        border: 0.0625rem solid var(--secondary-color);
        border-radius: 0.375rem;

        font-size: 1rem;
        color: var(--secondary-color);
        background-color: transparent;

        margin-top: 1.5rem;
        transition: 0.2s all;
        cursor: pointer;

        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 640px) {
    .keysGroup {
      flex-direction: column;
      flex-wrap: wrap;
      gap: 2.5rem;

      .keysFooter {
        flex-direction: column;

        .aspects {
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.625rem;

          .first,
          .second {
            display: inline-block;

            .icon {
              width: 0.75rem;
            }

            strong {
              font-size: 0.75rem;
            }
          }
        }

        .keysFooterButton {
          width: 100%;
          padding: 0.5rem;
          font-size: 0.75rem;
        }
      }
    }
  }

  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 641px) and (max-width: 1024px) {
    .keysGroup {
      .keysFooter {
        flex-direction: column;

        .aspects {
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;

          .first,
          .second {
            display: inline-block;

            .icon {
              width: 0.875rem;
            }

            strong {
              font-size: 0.875rem;
            }
          }
        }

        .keysFooterButton {
          font-size: 1rem;
        }
      }
    }
  }
`
