import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: auto;

  margin-top: 5rem;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    width: auto;
    height: auto;
  }
`
