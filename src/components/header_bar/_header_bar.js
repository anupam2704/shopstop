import styled from 'styled-components';

export const Wrapper = styled.div`    
    position: relative;
    overflow: hidden;
`
export const OptionsToRight = styled.div`
    float: right;
`
export const OptionsDiv = styled.div`
    float: right;
    margin-right: 20px;
    padding-top: 27px;
    select {
        outline: none;
        height: 25px;
        padding: 1px 5px 1px 5px;
    }
`
export const CartDiv = styled.div`
    float: right;
    height: 60px;
    width: 60px;
    padding-top: 7px;
    text-align: center;
    background-color: ${({theme})=> theme.color.primary[1]}
`