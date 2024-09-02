import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  width: 100%;
  height: 40.625rem;
  margin: 5rem 0rem 0rem 0rem;
  pointer-events: none;
  user-select: none;

  background-position: center;

  @media (max-width: 640px) {
    height: 31.25rem;
    background-position: center;
    background-size: cover;
  }
`
