import styled from "styled-components";
import "../../styles/index.css"

export const Container = styled.div`
    height: auto;
    width: 100%;
    margin-bottom: 8.125rem;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        width: 100%;
        gap: 1.75rem;
        
        .top-section {
            display: flex;
            align-items: center;
            flex: 1;
            flex-wrap: wrap;
            gap: 2.5rem;
            justify-content: space-between;
            width: 100%;

            .left {
                font-family: "Helvetica", sans-serif;
                font-weight: 600;
                font-size: 1.875rem;
                color: var(--white-color);
            }

            .right {
                display: flex;
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
        }

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