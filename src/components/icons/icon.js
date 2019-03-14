import React from 'react';

//Component to generate an icon. 
const Icon = props => {  
  return (
    <svg
      fill={props.color}
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox={props.view}
    >
      <path        
        d={props.path}
      ></path>
    </svg>
  );
};

export default Icon;