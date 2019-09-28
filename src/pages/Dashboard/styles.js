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

    button {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      align-items: center;
      margin: 5px 0 0;
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

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 62px;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);

  opacity: ${props => (props.past ? 0.2 : 1)};

  strong {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: ${props => (props.available ? '#999' : '#666')};
    }

    svg {
      margin-left: 5px;
    }
  }
`;
