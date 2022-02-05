import styled from "styled-components";

const MyContainer = styled.div`
   ${props => props.display ? 
        props.display == 'flex' ? 
            `display: flex;
             flex-direction ${props => props.direction ? props.direction : 'row'};
            `
        : 
        `display: ${props.display};`
    : `display:block;`
    };

    gap: ${props => props.gap ? props.gap : '0'};

`;

export default MyContainer;