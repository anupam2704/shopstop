import styled from 'styled-components';
import { theme } from '../../style/theme';

export const CircleBox = styled.div`    
    border-radius: 50%;
    background-color: ${({selected, theme}) => selected ? theme.color.primary[1] : theme.color.primary[4]};
    width: 40px;
    height: 40px;
    text-align: center;
    padding-top: 12px;
    cursor: pointer;
    &:hover {
        background-color: ${({theme}) => theme.color.primary[6]}
    }
`