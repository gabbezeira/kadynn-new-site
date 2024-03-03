import styled from "styled-components"

export const MyStore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;

    margin: 8.125rem 0rem;
    gap: 2.5rem;
    height: auto;
    width: 100%;

    .top-section {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;

        .title {
            font-family: "Helvetica", sans-serif;
            font-weight: 600;
            font-size: 1.875rem;
            color: var(--white-color);
        }

    }


`