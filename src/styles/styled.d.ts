import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;
        background:{
            image:string;
            primary:string;
        },
        colors: {
            primary:  string;
            secondary: string;
            success:string;
            error: string;
            warning: string;
            hover:{
                secondary:string;
            }
        },
        fonts:{
            name:string;
        },
        buttons:{
            linkButton:{
                primary:string;
                hover:string;
                 
            },
            disabled: string;
    
        }
    }
}