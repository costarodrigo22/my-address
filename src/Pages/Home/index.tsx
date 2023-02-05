import { useRef, useState } from 'react';
import { Container, ListContainer, Card, InputSearchContainer, EmptyBoxContainer, ErrorBoxContainer } from './styles';

import emptyBoxIcon from '../../assets/images/emptybox.svg';
import errorIcon from '../../assets/images/magnifier-question.svg';

import axios from 'axios';

interface TypeObjectRequest {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

export default function Home(){
  const [cep, setCep] = useState<TypeObjectRequest>();
  const [error, setError] = useState(false);
  const [emptyBox] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSearchCep(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.key === 'Enter'){
      await axios.get(`https://viacep.com.br/ws/${inputRef.current?.value}/json/`)
        .then(res => {
          setError(false);
          setCep({
            cep: res.data.cep,
            logradouro: res.data.logradouro,
            complemento: res.data.complemento,
            bairro: res.data.bairro,
            localidade: res.data.localidade,
            uf: res.data.uf,
            ibge: res.data.ibge,
            gia: res.data.gia,
            ddd: res.data.ddd,
            siafi: res.data.siafi
          });
        })
        .catch(error => {
          setError(true);
        });
    }
  }

  return(
    <Container>
      <InputSearchContainer>
        <input
          type='number'
          placeholder='Infome o CEP...'
          ref={inputRef}
          onKeyDown={(event) => handleSearchCep(event)}
        />
      </InputSearchContainer>

      <ListContainer>
        {
          !cep && emptyBox && !error && (
            <EmptyBoxContainer>
              <img src={emptyBoxIcon} alt='empty box'/>

              <span>
                Para localizar um endereço digite o <strong>CEP</strong> no <br />
                campo acima e tecle enter!
              </span>
            </EmptyBoxContainer>
          )
        }

        {
          error && (
            <ErrorBoxContainer>
              <img src={errorIcon} alt='error'/>
              <span>
                Nenhum resultado foi encontrado
              </span>
            </ErrorBoxContainer>
          )
        }

        {
          cep && !error && (
            <Card>
              <div className="info">
                <div className="cep-name">
                  <strong>{cep?.logradouro}</strong>
                  <small>{cep?.cep}</small>
                </div>

                <span>Complemento: {cep?.complemento}</span>
                <span>Bairro: {cep?.bairro}</span>
                <span>Localidade: {cep?.localidade}</span>
                <span>UF: {cep?.uf}</span>
                <span>IBGE: {cep?.ibge}</span>
                <span>Gia: {cep?.gia}</span>
                <span>DDD: {cep?.ddd}</span>
                <span>Siafi: {cep?.siafi}</span>
              </div>
            </Card>
          )
        }
      </ListContainer>
    </Container>
  );
}
