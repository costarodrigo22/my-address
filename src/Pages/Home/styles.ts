import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0px 16px;

    &::placeholder{
      color: #bcbcbc
    }
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  strong{
    color: #222;
    font-size: 24px;
  }

  a{
    color: #5061fc;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #5061fc;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover{
      background: #3346f8;
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ErrorBoxContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  span{
    color: #BCBCBC;
    font-weight: bold;
    margin-top: 12px;
    font-size: 15px;
    margin-left: 15px;
  }
`;

export const EmptyBoxContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span{
    text-align: center;
    color: #BCBCBC;
    font-weight: bold;
    margin-top: 12px;
    font-size: 15px;
  }

  strong{
    color: #3346f8
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info{
    .cep-name{
      display: flex;
      align-items: center;

      small{
        background: #E0E3FF;
        color: #3346f8;
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span{
      display: block;
      font-size: 14px;
      color: #BCBCBC;
    }
  }

  .actions{
    display: flex;
    align-items: center;

    button{
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

