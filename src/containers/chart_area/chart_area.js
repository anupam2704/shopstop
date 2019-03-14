import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HeaderBox, ListArea, ItemHolder } from './_chart_area';
import Button from '../../components/button/button';
import Separator from '../../components/separator/separator';
import PriceTag from '../../components/price_tag/price_tag';
import SubPriceTag from '../../components/sub_price_tag/sub_price_tag';
import SizeBox from '../../components/size_box/size_box';
import { withTheme } from 'styled-components';
import HeaderBar from '../../components/header_bar/header_bar';
import ItemView from '../../components/item_view/item_view';
import {TSHIRT_DATA} from '../../utils/dummy_data';

//The area which contains the listing of the products i.e thsirts
class ChartArea extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            show: false,            
        }             
    }

    componentDidMount() {        
        
    }    

    componentDidUpdate(prev_props) {        
        
    }

    renderList() {
        return TSHIRT_DATA.map((data)=> {
            return (
                <ItemHolder>
                    <ItemView
                        name={data.name}
                        price={data.price}
                        free_shipping={data.free_shipping}
                        image={data.image}
                        sub_qty={data.sub_price.quantity}
                        sub_price={data.sub_price.price}/>
                </ItemHolder>
            )
        })
    }

    render () { 
        return (
            <div>
                <HeaderBox>
                    <HeaderBar/>
                </HeaderBox>
                <ListArea>
                    {this.renderList()}                    
                </ListArea>
            </div>
        )   
    }
}

function mapStateToProps(state) {
    return {
        hey: 'man'
    };
}
  

export default connect(mapStateToProps)(withTheme(ChartArea));