import React from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
import { ImageDiv, TagHolder  } from './_item_view';
import Img from 'react-image';
import PriceTag from '../price_tag/price_tag';
import Separator from '../separator/separator';
import SubPriceTag from '../sub_price_tag/sub_price_tag';
import Button from '../button/button';
import FreeTag from '../free_tag/free_tag';
const ItemView = ({theme, price, name, image, sub_qty, sub_price, free_shipping}) => {    
    function notAvailable() {
        return (
            <div style={{height:300, textAlign: 'center', color: theme.color.primary[4]}}>
                Image Not <br/> Available
            </div>
        )        
    }

    return (
        <div style={{position: 'relative', minHeight: 400}}>
            <TagHolder>
                <FreeTag text="Free Shipping"/>
            </TagHolder>
            <ImageDiv>
                <Img     
                    unloader={notAvailable()}               
                    src={image}
                    height={300}
                    width={'100%'} />
            </ImageDiv>
            <div style={{ marginTop: 10, textAlign: 'center', height: 40, padding: '0px 10px 0px 10px'}}>
                <Text text={name} color={theme.color.primary[1]}/>
            </div>
            <div style={{textAlign: 'center', paddingLeft: 80}}>
                <div style={{width: 40}}>
                    <Separator height={6}/>
                </div>
            </div>
            <div style={{ marginTop: 7, textAlign: 'center'}}>
                <PriceTag price={price}/>
            </div>
            <div style={{ marginTop: 3, textAlign: 'center'}}>
                <SubPriceTag quantity={sub_qty} price={sub_price}/>
            </div>
            <div style={{ marginTop: 9, textAlign: 'center'}}>
                <Button text="Add To Cart" width={200}/>
             </div>
        </div>
    )
}

export default withTheme(ItemView);