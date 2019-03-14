import React from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
//Component to show the sub price tag below the price tag, just takes quantity and price
const SubPriceTag = ({theme, price, quantity}) => {    
    //Assuming all the price data has some decimal part - backend must validate and store in this case.
    const price_string = `or ${quantity} x $ ${price}`;
    return (
        <Text
            text={price_string}
            color={theme.color.primary[4]}
            size={theme.font_size.s}/>
    )
}

export default withTheme(SubPriceTag);