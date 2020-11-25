import React from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';
import {injectIntl} from 'react-intl';
interface TranslateProps{
    id:string;
    value?:{},
    intl: IntlShape
};

const translate:React.FC<TranslateProps> = ({id, value, intl}) =>(
    <FormattedMessage id={id} values={{...value}} defaultMessage="" />
)
export default injectIntl(translate);