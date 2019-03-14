import React, {Component} from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
import { CircleBox } from './_size_box';
/**
 * Props are
 * {size}
 * {text}
 */
//The box which shows the sizes available and allows user to select.
class SizeBox extends Component {
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
        const { theme } = this.props;
        return (
            <CircleBox> 
                <Text text={this.props.size_text} size={theme.font_size.xs}/>
            </CircleBox>
        )   
    }
}


export default withTheme(SizeBox);