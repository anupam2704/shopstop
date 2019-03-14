import React from 'react';
import {    Head1, 
            Head2,
            Head3,
            Head4,
            Para,
            SpanBlock,
            SpanLine,
            Div } from './_text';

/**
 * A simple text component that is responsible for rendering text.
 * Also has default properties, but can be changed through props.
 * By default, it generates a div.
 */
const Text = ({type, text, size, color, weight, family, lh, ellipsis, id, cust_class}) => {    
    let Element;
    switch(type) {
        case 'h1':   
            Element = Head1;
            break;            
        case 'h2':   
            Element = Head2;
            break;
        case 'h3':   
            Element = Head3;
            break;
        case 'h4':   
            Element = Head4;
            break;
        case 'para':   
            Element = Para;
            break;            
        case 'span_b':   
            Element = SpanBlock;
            break;            
        case 'span':   
            Element = SpanLine;
            break;        
        default:
            Element = Div;
            break;
    }
    return <Element
                color={color}
                size={size}
                weight={weight}
                family={family}
                lh={lh}
                id={id}
                ellipsis={ellipsis}
                className={cust_class}
                >
                
                {text}
            </Element>
}

export default Text;