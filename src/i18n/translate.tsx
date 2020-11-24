import React from 'react';
import { FormattedMessage } from 'react-intl';

interface TranslateProps{
    id:string;
    value?:{},
};

const translate:React.FC<TranslateProps> = ({id, value}) =>(
    <FormattedMessage id={id} values={{...value}} defaultMessage="" />
)
export default translate;