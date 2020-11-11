import React from 'react';

import { Container, Content, ButtonContent } from './styles';
import InputText from '../../../components/InputText';

const LetsStart: React.FC = () => {
    return (
        <Container>
            <Content>
                <h3>Vamos começar?</h3>
                <label>Digite para gente os seguintes dados de quem
                realizou a reserva da passagem original </label>
                <InputText placeHolder="CPF" />
                <InputText placeHolder="Localizador" />
                <InputText placeHolder="Código de reserva" />
                <ButtonContent disabled>Prosseguir</ButtonContent>
            </Content>
        </Container>
    );
}

export default LetsStart;