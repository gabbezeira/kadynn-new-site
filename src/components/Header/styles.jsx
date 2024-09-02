import styled from 'styled-components'
import '@globalStyles/index.css'

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0rem 5rem;
  top: 0;
  position: fixed;
  z-index: 100;

  background-color: var(--black-color);

  .menu-left-content {
    display: flex;
    align-items: center;

    height: 100%;
    gap: 5rem;

    .link-image {
      display: block;
      text-decoration: none;
      width: auto;
      height: auto;
      user-select: none;
    }

    .menu-text-group {
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 2rem;
      user-select: none;

      li {
        .link {
          color: var(--white-color);
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            color: var(--secondary-color);
          }
        }
      }
    }
  }

  .menu-button {
    display: flex;
    align-items: center;

    height: 2.5rem;
    width: auto;

    padding: 0.5rem 0.875rem;
    border-radius: 0.25rem;
    border: none;

    background-color: var(--secondary-color);

    color: var(--black-color);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;

    .menu-left-content {
      justify-content: center;
      gap: none;

      .link-image {
        display: none;
      }
    }

    .menu-button {
      display: none;
    }
  }
`
