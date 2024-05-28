import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  height: auto;
  width: 100%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 100%;

    .games-group {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2.5rem;
      flex: 1;
      width: 100%;
      height: 22.9375rem;
    }
  }

  a {
    margin-top: 0.75rem;
    text-decoration: none;
    list-style: none;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      width: max-content;
      padding: 0.5rem 2rem;

      margin-top: 1.75rem;

      border-radius: 0.25rem;
      border: 0.0313rem solid var(--stroke-color);

      color: var(--alt-black-color);
      font-size: 1rem;
      font-weight: 600;
      background-color: var(--secondary-color);

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
