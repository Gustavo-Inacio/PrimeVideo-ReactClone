import { Tooltip } from '@mui/material';
import React from 'react'

function MyCostumToolTip({children, ...props}) {
    const formatToolTips = (text) => (
        <span style={{
            display: 'flex',
            fontSize: '15px',
            fontWeight: '700',
            padding: '10px 2px'
        }}>
            {text}
        </span>
    );

  return (
    <Tooltip title={formatToolTips(props.title)} {...props.options}>
        {children}
    </Tooltip>
  )
}

export default MyCostumToolTip