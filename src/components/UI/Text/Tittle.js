import styled from 'styled-components';

export const MovieTittle = styled.h1`
    font-size: 25px;
    
    color: ${props => props.color ? props.color : '#fff'};
    margin: 0;
    margin-bottom: 4px;
    font-weight: 400;

    @media (min-width: 1000px){
        font-size: 32px;
    }
`;
