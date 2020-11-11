import React from 'react';
import Gol from '../../../assets/img/gol.png';
import Azul from '../../../assets/img/azul.png';
import Latam from '../../../assets/img/Latam.png';
import { Container, Content, MainTitleContent, ButtonContent, CardsCiaContent, Card } from './styles';

const DontLoseYuorDream: React.FC = () => {
    return (
        <Container>
            <Content>
                <MainTitleContent>
                    Não perca seu sonho
          </MainTitleContent>
                <h3>Remarque hoje com passos simples. Confirme seus dados, descubra uma nova data e pague com facilidade e segurança</h3>
                <ButtonContent>
                    Veja como funciona remarcar
          </ButtonContent>
                <caption>
                    Disponível para*
          </caption>
                <CardsCiaContent>
                    <Card>
                        <img src={Gol} alt="Gol" />
                        <span>Gol</span>
                    </Card>
                    <Card>
                        <img src={Azul} alt="Azul" />
                        <span>Azul</span>
                    </Card>
                    <Card>
                        <img src={Latam} alt="Latam" />
                        <span>Latam</span>
                    </Card>
                </CardsCiaContent>
                <caption>*Novas companhias aéreas serão adicionadas em breve </caption>
            </Content>
        </Container>
    )
}

export default DontLoseYuorDream;