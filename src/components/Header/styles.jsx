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
    gap: 2.5rem;

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

    .menu-text-group {
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: 2rem;
      user-select: none;

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

  .menu-buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    gap: 1rem;

    .menu-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      height: 2.5rem;
      width: auto;

      padding: 0.5rem;
      border-radius: 0.25rem;
      border: none;

      background-color: var(--secondary-color);

      text-transform: capitalize;

      color: var(--black-color);
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 600;

      text-decoration: none;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 640px) {
    padding: 0px 2rem;
    justify-content: space-between;

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
