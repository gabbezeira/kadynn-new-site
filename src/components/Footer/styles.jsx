import styled from 'styled-components'
import '@globalStyles/index.css'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 6.25rem 5rem;

  background-color: var(--black-color);

  .footer-left-content {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1.75rem;

    .link-image {
      display: block;
      text-decoration: none;
      width: auto;
      height: auto;
      user-select: none;

      img {
        height: 3.75rem;
        width: auto;
      }
    }

    .footer-left-texts {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      flex-direction: column;

      .footer-text-group {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
        user-select: none;

        li {
          .link {
            color: var(--gray-color);
            font-weight: 300;
            font-size: 1rem;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              color: var(--secondary-color);
            }
          }
        }
      }

      .footer-copy-text {
        color: var(--gray-color);
        font-size: 1rem;

        .my-credits {
          color: var(--white-color);
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
  }

  .footer-right-content {
    display: flex;
    justify-content: center;

    .footer-social {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      width: 100%;

      li {
        text-decoration: none;
        list-style: none;

        .social-icon {
          color: var(--white-color);
          height: 2.375rem;
          width: auto;
          width: auto;
        }
      }
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem;

    .footer-left-content {
      justify-content: center;
      gap: none;

      .footer-left-texts {
        align-items: center;
      }

      .link-image {
        display: none;
      }
    }

    .footer-right-content {
      display: none;
    }
  }
`
