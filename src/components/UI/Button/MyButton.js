import styled from 'styled-components';
let color = '#0f79af';

export const MyButton = styled.button`
    ${props => {color = props.theme.color[props.colorIndex] || '#0f79af'}}

    ${props => props.outlined ? `
    border: 2px solid ${color};
    background: transparent;
    ` : `
    border: none;
    background: ${color};
    `};

    &:hover{
        ${props => props.outlined ? `
            background: ${color}33;
        ` : ''}
        filter: brightness(130.1%);
    }

    filter: brightness(100%);
    transition: all ease 0.3s;

    color: ${props => props.color ? props.color : '#ffff'};
    padding: 12px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    font-family: 'Amazon Ember','Amazon Arabic Ember','Arial','sans-serif';
    font-size: 17px;
    line-height: 20px;

`;
