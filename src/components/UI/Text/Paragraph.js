import styled from "styled-components";

export const MovieDescription = styled.p`
    color: ${props => props.color ? props.color : '#FFF'};
    font-size: 15px;
    margin-bottom: 12px;

    @media(min-width: 1040px){
        font-size: 17px
    }
`;