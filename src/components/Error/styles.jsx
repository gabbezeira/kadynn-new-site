import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 100%;
  height: auto;

  .notfound-image {
    width: auto;
    height: 13rem;
    user-select: none;
  }

  .notfound-text {
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto;
    height: 3.125rem;

    padding: 0rem 1.5rem;

    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--secondary-color);

    border: 0.0625rem solid var(--secondary-color);
    border-radius: 0.3125rem;
  }
`
