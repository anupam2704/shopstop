import styled from 'styled-components';

export const PlainButton = styled.button`    
    background: ${({bg, theme}) => bg || theme.color.primary[1]};
    padding: ${({padding}) => padding || '7px 0px 7px 0px'};
    border: ${(border) => border || false };    
    width: ${props => props.width+'px'};
    outline: none;
    color: ${({ disabled, color, theme}) => {
        if(disabled) {
            return theme.color.primary[5]
        }
        else {
            if(color) {
                return color;
            }
            return theme.color.primary[2]
        }
    }};
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.font_size.m};
    text-transform: none;
    cursor: pointer;
`