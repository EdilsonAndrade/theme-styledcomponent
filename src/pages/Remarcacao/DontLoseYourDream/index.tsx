import React from 'react';
import Gol from '../../../assets/img/gol.png';
import Azul from '../../../assets/img/azul.png';
import Latam from '../../../assets/img/Latam.png';
import { Container, Content, MainTitleContent, ButtonContent, CardsCiaContent, Card } from './styles';
import translate from '../../../i18n/translate'

const DontLoseYuorDream: React.FC = () => {
    return (
        <Container>
            <Content>
                <MainTitleContent>
                    {translate({id:"DontLooseYourDream"})}
          </MainTitleContent>
                <h3>{translate({id:"MarkdownHere"})}</h3>
                <ButtonContent>
                {translate({id:"SeeHow"})}
          </ButtonContent>
                <caption>
                {translate({id:"Available"})}
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
                <caption>{translate({id:"NewCompanies"})}</caption>
            </Content>
        </Container>
    )
}

export default DontLoseYuorDream;