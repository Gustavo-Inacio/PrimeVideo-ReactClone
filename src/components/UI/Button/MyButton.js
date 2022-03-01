import styled from 'styled-components';
import soundIcon from '../../../assets/img/sound-icon.svg';
import muteIcon from '../../../assets/img/mute-icon.svg';
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
    display: flex;
    align-items: center;
    cursor: pointer;
    
    font-family: 'Amazon Ember','Amazon Arabic Ember','Arial','sans-serif';
    font-size: 14px;
    
    padding: ${props => props.theme.space.spacePad * 3 * 0.6}px ${props => props.theme.space.spacePad * 4 * 0.6}px;
    @media (min-width: 750px) {
        font-size: 14px;
        padding: ${props => props.theme.space.spacePad * 3 * 0.8}px ${props => props.theme.space.spacePad * 4  * 0.8}px;
    }
    @media (min-width: 1040px) {
        font-size: 17px;
        padding: ${props => props.theme.space.spacePad * 3}px ${props => props.theme.space.spacePad * 4}px;
    }

`;

export const SoundToggler = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    background: ${props => props.muted ? `url(${muteIcon})` : `url(${soundIcon})`} ;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: rgba(0,0,0,.8);
    border-radius: 50%;
`;
