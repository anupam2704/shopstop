import React from 'react';
import { HrLine } from './_separator';
//For the yellow line below name, however can be used for other purposes also.
const Separator = ({theme, height, color, radius}) => {
    return (
        <HrLine
            height={height}
            color={color} 
            radius={radius}/>
    )
}

export default Separator;