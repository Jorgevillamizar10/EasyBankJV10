import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
    body{
        margin: 0;
        //centrando el body
        max-width: 1600px;
        /* height: 100vh; */
        //evita que haga rebotes la app con el scroll
        overscroll-behavior: none;
        overflow-x: hidden;
        width: 100%; 
    }
    
    html{
        font-family: 'Public Sans',sans-serif;
    }
    
    #app{
        /* overflow: hidden; */
    }
`;
