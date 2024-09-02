import styled from 'styled-components'
import '@globalStyles/index.css'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.375rem;
  gap: 2.375rem;
  height: 100%;
  width: 100%;
  justify-content: start;
  background-color: var(--black-color);
  box-sizing: border-box; /* Garante que o padding e a borda são incluídos nas dimensões totais do elemento */

  .imageArea {
    height: 22.9375rem;
    width: auto;
    flex-shrink: 0; /* Impede que a área da imagem encolha, garantindo que ela mantenha seu tamanho */
    min-width: 20rem; /* Define uma largura mínima para a área da imagem */
    max-width: 30rem; /* Define uma largura máxima para a área da imagem */

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1; /* Permite que o conteúdo ocupe o espaço restante */
    overflow: hidden;
    gap: 1.5rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .texts {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .title {
          color: var(--white-color);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .platforms {
          color: var(--secondary-color);
          font-weight: 700;
          font-size: 1rem;
        }
      }

      .priceButton {
        height: 2.5rem;
        padding: 0.3125rem 0.625rem;
        border-radius: 0.25rem;
        border: none;
        background-color: var(--secondary-color);
        color: var(--black-color);
        font-family: var(--poppins);
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .descriptionContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .descriptionText {
      font-size: 1rem;
      font-weight: 600;
      color: var(--white-color);
    }

    .infoArea {
      height: auto;
      width: 100%;
      padding: 1.5rem;
      background-color: var(--alt-black-color);
      color: var(--gray-color);
      border-radius: 0.5rem;
      overflow-y: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      line-height: 1.5;
    }
  }
`
