import React from 'react';
import Text from '../text/text';
import { withTheme } from 'styled-components';
import { Wrapper } from './_free_tag'

//Component to show the free shipping tag
const FreeTag = ({theme, text}) => {    
    return (
        <Wrapper>            
            <Text text={text} size={theme.font_size.xxs} color={theme.color.primary[2]}/>            
        </Wrapper>
    )
}

export default withTheme(FreeTag);