/**
 * This file contains the global css settings for the project
 */
import { injectGlobal } from 'styled-components';
 
injectGlobal`
    html, body {   
        margin: 0;
        padding: 0;              
        height: 100%;                    
        overflow-y: auto !important;
        overflow-x: hidden !important;            
        position: relative;         
        font-family: Arial;         
    }

    /* Adding box-sizing to every element */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    div, h1, h2, h3, a, p, h4, h5, h6, ul, li {
        margin: 0;  
        padding: 0;      
        -webkit-margin-before:0;
        -webkit-margin-after:0;  
    }
    
`;
