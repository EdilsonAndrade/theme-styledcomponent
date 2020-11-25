import React from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import translate from '../../../i18n/translate'
import { Container, Content, ButtonContent } from './styles';
import InputText from '../../../components/InputText';

interface Props{
    intl:IntlShape
}
const LetsStart: React.FC<Props> = ({intl}) => {
    return (
        <Container>
            <Content>
                <h3>{translate({id:"LetsStart"})}</h3>
                <label>{translate({id:"UserInfoData"})}</label>
                <InputText placeHolder={intl.formatMessage({id:"Id"})} />
                <InputText placeHolder={intl.formatMessage({id:"LocCode"})}/>
                <InputText placeHolder={intl.formatMessage({id:"BookCode"})} />
                <ButtonContent disabled>{translate({id:"NextButton"})}</ButtonContent>
            </Content>
        </Container>
    );
}

export default injectIntl(LetsStart);