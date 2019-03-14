import styled from 'styled-components';

export const HrLine = styled.div`    
    height: ${({height}) => height ? height+'px' : '1px'};
    background-color: ${({color, theme}) => color ? color : theme.color.primary[5] };
    width: 100%;
    border-radius: ${({radius}) => radius ? radius+'px' : false };
`
export const HrLine2 = styled.hr`    
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
`