import React from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
//Component to show the price tag, just takes the price as integer
const PriceTag = ({theme, price}) => {
    price = price+''; //Converting price to string
    //Assuming all the price data has some decimal part - backend must validate and store in this case.
    const price_arr = price.split('.');
    const dollar = price_arr[0];
    const cents = price_arr[1];
    const color = theme.color.primary[1]
    return (
        <div>
            <span style={{marginRight: 5}}><Text text="$" type="span" size={theme.font_size.s} color={color}/></span>
            <Text text={dollar} type="span" size={theme.font_size.xl} color={color} weight={theme.weight.bold}/>.
            <Text text={cents} type="span" size={theme.font_size.s} color={color}/>            
        </div>
    )
}

export default withTheme(PriceTag);