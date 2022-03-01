import styled from "styled-components";

export const MovieDescription = styled.p`
    color: ${props => props.color ? props.color : '#FFF'};
    font-size: 14px;
    margin-bottom: 12px;
    margin-top: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3; 
    -webkit-box-orient: vertical;

    @media (min-width: 750px) {
        font-size: 14px;
    }

    @media(min-width: 1040px){
        font-size: 17px;
        -webkit-line-clamp: 4;
        line-clamp: 4; 
    }

    @media(min-width: 1200px){
        font-size: 17px;
        -webkit-line-clamp: 5;
        line-clamp: 5; 
    }
`;