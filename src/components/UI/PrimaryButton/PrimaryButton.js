import styled from 'styled-components';

const PrimaryButton = styled.button`
    ${props => props.outlined ? `
    border: 2px solid #0f79af;
    background: trasparent;
    ` : `
    border: none;
    background: #0f79af;
    `};

    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : '#ffff'};
    padding: 14px 20px;
    display: flex;
    cursor: pointer;
    
    font-family: 'Amazon Ember','Amazon Arabic Ember','Arial','sans-serif';
    font-size: 17px;
    line-height: 20px;

`;

export default PrimaryButton;