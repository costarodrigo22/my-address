import { Container } from './styles';

import MyAddress from '../../assets/images/MyAddress.svg';

export function Header(){
  return(
    <Container>
      <img src={MyAddress} alt='Mycontacts' width={201} />
    </Container>
  );
}
