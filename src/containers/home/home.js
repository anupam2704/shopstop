import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Wrapper, SizeAreaDiv, ChartAreaDiv } from './_home';
import Button from '../../components/button/button';
import Separator from '../../components/separator/separator';
import PriceTag from '../../components/price_tag/price_tag';
import SubPriceTag from '../../components/sub_price_tag/sub_price_tag';
import SizeBox from '../../components/size_box/size_box';
import SizeArea from '../size_area/size_area';
import ChartArea  from '../chart_area/chart_area';

//Wrapper component for all
class Home extends Component {
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

    render () { 
        return (
            <Wrapper>
                <SizeAreaDiv>
                    <SizeArea/>    
                </SizeAreaDiv>
                <ChartAreaDiv>
                    <ChartArea/>
                </ChartAreaDiv>
                
            </Wrapper>
        )   
    }
}

function mapStateToProps(state) {
    return {
        hey: 'man'
    };
}
  

export default connect(mapStateToProps)(Home);