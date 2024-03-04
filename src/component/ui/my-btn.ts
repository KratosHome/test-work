import styled from 'styled-components'

export const MyBtn = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f0f0f0; /* Сірий колір фону */
    color: #333; /* Темно-сірий колір тексту */
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
 
 
    &:hover {
        background-color: #007bff;
        color: #fff;
        border-color: #0056b3;
    }
`
