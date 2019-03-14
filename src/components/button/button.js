import React from 'react';
import { PlainButton } from './_button';

/**
 * Customizable button. 
 * Give it the props you want to change, otherwise it will have some default props.
 */
const Button = ({text, width, color, disabled, onClick, padding, border, bg}) => {
    function click() {
        if(onClick) {
            return onClick();
        }
    }
    return (
        <PlainButton 
            width={width} 
            color={color} 
            bg={bg}
            disabled={disabled} 
            onClick={() => click()} 
            padding={padding} 
            border={border} >
            {text}
        </PlainButton>
    );        
}

export default Button;