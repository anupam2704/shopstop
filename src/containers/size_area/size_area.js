import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Wrapper, SizeAreaDiv, ChartAreaDiv, SizeBoxWrap } from './_size_area';
import SizeBox from '../../components/size_box/size_box';
import Text from '../../components/text/text';
import { withTheme } from 'styled-components';
import { SIZE_ARR } from '../../utils/definitions/sizes';

//The left pan which contains the sizes - circular boxes
class SizeArea extends Component {
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

    renderSizeBoxes() {
        return SIZE_ARR.map((size)=> {
            return (
                <SizeBoxWrap>
                    <SizeBox size_text={size}/>
                </SizeBoxWrap>
            )
        })
    }

    render () { 
        const { theme } = this.props;
        return (
            <div style={{ padding: '0px 15px 0px 35px'}}>    
                <div style={{marginBottom:15}}>
                    <Text text={'Sizes:'} weight={theme.weight.bold}/>
                </div>   
                {this.renderSizeBoxes()}         
            </div>
        )   
    }
}

function mapStateToProps(state) {
    return {
        hey: 'man'
    };
}
  

export default connect(mapStateToProps)(withTheme(SizeArea));