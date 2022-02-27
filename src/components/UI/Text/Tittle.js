import styled from 'styled-components';

export const MovieTittle = styled.h1`
    font-size: 30px;
    line-height: 32px;
    color: ${props => props.color ? props.color : '#fff'};
    margin: 0;
    margin-bottom: 4px;
    font-weight: 400;
`;
