import React from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
import Icon from '../icons/icon';
import {ICONS} from '../icons/index';
import { Wrapper, OptionsToRight, CartDiv, OptionsDiv } from './_header_bar';

//Component that contains the header i.e shopping cart, filter by price
class HeaderBar extends React.Component {

    render() {
        const { theme } = this.props;
        return (
            <Wrapper>
                <OptionsToRight>
                    <CartDiv>
                        <Icon
                            width="45"
                            height="45"
                            color={theme.color.primary[2]}
                            view={ICONS.CART.view}
                            path={ICONS.CART.path}/>
                    </CartDiv>
                    <OptionsDiv>
                        <select>
                            <option>Price</option>
                            <option value="volvo">Low to High</option>
                            <option value="saab">High to Low</option>                            
                        </select>
                    </OptionsDiv>
                </OptionsToRight>
                <div style={{padding: '35px 0px 0px 10px'}}>
                    <Text text={`${'10'} products found`} color={theme.color.primary[1]}/>
                </div>
            </Wrapper>
        )
    }
}

export default withTheme(HeaderBar);