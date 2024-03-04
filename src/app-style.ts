import styled from "styled-components";

export const AppStyle  = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-top: 20px;

    input {
        margin-right: 5px;
    }
    
    .item-task {
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;
        background-color: #f4f4f4;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);

        &:hover {
            background-color: #e9e9e9;
        }

        span{
            margin-left: 5px;
        }
        
    }
`