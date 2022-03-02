import React from 'react'
import styled from 'styled-components';

const Container = styled.span`
    border: 1px solid #f2f4f6;
    font-size: 13px;
    color: #f2f4f6;
    padding: 3px;
    border-radius: 3px;

    background-color: ${props => (
        props.age < 10 || props.age == 'L' ? '#7db75b' :
        props.age < 12 ? '#1e90ff' :
        props.age < 14 ? '#ffca00' :
        props.age < 16 ? '#ff8c00' :
        props.age < 18 ? 'red' :
        props.age >= 18 ? '#000' : 'tranparent'
    )};
`;


function AgeRateIcon({age, ...props}) {
  return (
    <Container age={age}>
        <span>{(age < 10 ? 'L' : age)}</span>
    </Container>
  )
}

export default AgeRateIcon