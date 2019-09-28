import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }

    div {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      align-items: center;

      button.cancelar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        margin-left: 10px;
        height: 44px;
        padding: 5px;
        background: #f94d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }
      }

      button.editar {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        margin: 5px 0 0;
        height: 44px;
        padding: 5px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#4DBAF9')};
        }
      }
    }

    svg {
      align-self: flex-start;
      margin-right: 5px;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  strong {
    color: #fff;
    width: 100%;
    font-size: 20px;
    margin-bottom: 30px;
  }
  div {
    display: flex;
    width: 100%;
    color: #fff7;
    span {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      align-items: center;
      margin-left: 5px;
    }
  }
`;

export const Img = styled.picture`
  background-image: url(${({ src }) => src || ''});
  width: 100%;
  border-radius: 5px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 15px;
`;
