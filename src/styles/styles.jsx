import styled from 'styled-components'
import './index.css'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 7.25rem;
  padding: 5rem;

  @media (max-width: 640px) {
    gap: 6rem;
    padding: 2.875rem 2rem;
  }
`
