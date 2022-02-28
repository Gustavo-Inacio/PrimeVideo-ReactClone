import styled from "styled-components";

export const MovieDescription = styled.p`
    color: ${props => props.color ? props.color : '#FFF'};
    font-size: 15px;
    margin-bottom: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5; 
    -webkit-box-orient: vertical;

    @media(min-width: 1040px){
        font-size: 17px
    }
`;