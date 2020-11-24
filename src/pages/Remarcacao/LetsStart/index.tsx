import React from 'react';
import translate from '../../../i18n/translate'

import { Container, Content, ButtonContent } from './styles';
import InputText from '../../../components/InputText';

const LetsStart: React.FC = () => {
    return (
        <Container>
            <Content>
                <h3>{translate({id:"LetsStart"})}</h3>
                <label>{translate({id:"UserInfoData"})}</label>
                <InputText placeHolder="CPF" />
                <InputText placeHolder="Localizador" />
                <InputText placeHolder="Código de reserva" />
                <ButtonContent disabled>{translate({id:"NextButton"})}</ButtonContent>
            </Content>
        </Container>
    );
}

export default LetsStart;