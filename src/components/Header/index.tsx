import React from 'react';

import { Container } from './styles';
import Brazil from '../../assets/img/brazil.png';
import Argentina from '../../assets/img/argentina.png';
interface Props{
    event:any
}
const Header: React.FC<Props> = ({event}) => {
  return (
      <Container>
          <div>
              <img src={Brazil} alt="BRA" className="bra" onClick={()=>event("bra")} />
              <img src={Argentina} alt="AR"  onClick={()=>event("ar")}/>
          </div>
      </Container>
  )
}

export default Header;