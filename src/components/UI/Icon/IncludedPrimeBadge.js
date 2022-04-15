import styled from "@emotion/styled";
import React from 'react'
import MyCostumToolTip from "../MyCostumToolTip/MyCostumToolTip";

const Badge = styled.div`
    background-color: ${props => props.includedWithPrime ? '#00a8e1' : '#ffa724'};
    padding: 3px 8px;
    height: fit-content;
    border-radius: 0 40px 40px 0;
    color: #0f171e;
    display: flex;

    cursor: default;

    ${props => props.forTitle ? 
        `font-size: 8px;
        padding: 2px 4px;`
    : 
        `outline: 4px solid #0f171e;
        font-size: 12px
        padding: 3px 8px;`
    }


    color: #0f171e !important;
    font-weight: 900;
    font-size: 70px;
    

    font-size: ${props => props.fontSize ? props.fontSize+'px' : '12px'};

`;


function IncludedPrimeBadge(props) {
    const badge = (
        <Badge {...props}>
            {props.includedWithPrime ? 'prime' : '$$'}
        </Badge>
    );

    const badgeFortitle = (
        <Badge forTitle={true} {...props}>
            {props.includedWithPrime ? 'prime' : '$$'}
        </Badge>
    )

    let toolTipTitle = (
    <span>
        Videos with <span style={{width: 'fit-content', display:'inline-flex'}}>{badgeFortitle}</span> are included with prime membership
    </span>);
    if(!props.includedWithPrime) toolTipTitle = (
        <span>
            Videos with <span style={{width: 'fit-content', display:'inline-flex'}}>{badgeFortitle}</span> are available to rent, buy, or included with Channels subscriptions
        </span>
    );

  return (
      <>
        {props.tooltip ? 
            <MyCostumToolTip title={toolTipTitle} options={{arrow:true, placement:'top'}}>
                {badge}
            </MyCostumToolTip>
        :
            badge
        }
      </>
  )
}

export default IncludedPrimeBadge