import styled from 'styled-components'
import '../../styles/index.css'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin-bottom: 1.75rem;

  width: 100%;

  .title {
    font-family: 'Helvetica', sans-serif;
    font-weight: 600;
    font-size: 1.875rem;
    color: var(--white-color);
  }

  .platform-buttons {
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    height: 100%;
    width: auto;

    li {
      display: flex;
      align-items: center;
      height: 2.25rem;
      width: max-content;

      padding: 0rem 1.125rem;
      border: 0.0313rem solid var(--stroke-color);
      border-radius: 1.125rem;

      font-family: 'Poppins', sans-serif;
      font-size: auto;
      font-weight: 500;

      color: var(--white-color);
      background-color: var(--secondary-gray-color);

      cursor: pointer;
      user-select: none;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  /* Media Query for Mobile Devices */
  @media (max-width: 640px) {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 2rem;

    .platform-buttons {
      justify-content: center;
      flex: 1;
      width: 100%;
    }
  }

  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 641px) and (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`
