import React from 'react';
import { IntlProvider } from 'react-intl';
import MESSAGES from './messages';



interface ProviderProps{
    locale:string;
    children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({locale, children} :ProviderProps) => {
    return (
        <IntlProvider
            locale={locale}
            messages={MESSAGES[locale]}
        >
        {children}
        </IntlProvider>
    )
}

export default Provider;