import styled from 'styled-components';
import { css } from 'styled-components'
export const ThemeText = css`
    color: ${props => props.color || props.theme.color.primary[3]};
    font-size: ${props => props.size ? props.size : props.theme.font_size.m};            
    font-family: ${props => props.family || props.theme.font.secondary};
    font-weight: ${props => props.weight || props.theme.weight.regular};
    line-height: ${props => props.lh || ''};
    ${({ ellipsis }) => {
        if(ellipsis) {
            return `                
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;      
            `
        }        
    }}
    word-break: break-word;
    display : ${({display})=> display || false };    

`
export const Head1 =  styled.h1`
    ${ThemeText};
    text-transform: uppercase;
    font-size: ${props => props.size ? props.size : props.theme.font_size.xxxl};        
`
export const Head2 =  styled.h2`
    ${ThemeText}
`
export const Head3 =  styled.h3`
    ${ThemeText}
`
export const Head4 =  styled.h4`
    ${ThemeText}
`
export const Para = styled.p`
    ${ThemeText}
`
export const SpanBlock = styled.span`
    ${ThemeText};
    display: block;
`
export const SpanLine = styled.span`
    ${ThemeText}
`
export const Div = styled.div`
    ${ThemeText}
`