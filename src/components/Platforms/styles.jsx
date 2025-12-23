import styled from "styled-components";
import "@globalStyles/index.css";

export const Container = styled.div`
  height: auto;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;

    .games-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: no-wrap;
      flex: 1;
      width: 100%;
      height: 22.9375rem;

      a {
        text-decoration: none;
        list-style: none;

        li {
          height: 22.9375rem;
          width: 18.125rem;
          border: 0.0313rem solid var(--stroke-color);
          border-radius: 0.5rem;
          transition: all 0.2s;

          img {
            pointer-events: none;
            user-select: none;
          }

          &:hover {
            transform: scale(1.04);
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

@media (max-width: 768px) {
    .content {
      .games-group {
        flex-wrap: wrap;
        justify-content: center;
        gap: 2.5rem;
      }
    }
  }
`;
