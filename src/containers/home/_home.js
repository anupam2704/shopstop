import styled from 'styled-components';
import { theme } from '../../style/theme';

export const SizeAreaDiv = styled.div`        
    //background-color: cyan;
    width: 300px;
    float: left;
    height: inherit;  
    padding-top: 60px;  
`
export const ChartAreaDiv = styled.div`
    margin-left: 300px;
    //background-color: yellow;
    height: inherit;  
`
export const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;    
    overflow-y: scroll;
    overflow-x: hidden;
`