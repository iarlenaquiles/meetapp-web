import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;
  max-height: 200px;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;
    width: 100%;
    display: flex;

    img {
      border-radius: 4px;
      height: 200px;
    }

    input {
      display: none;
    }

    svg {
      opacity: 0.8;
      align-self: center;
    }
  }
`;

export const DefaulImg = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  width: 100%;
  border-radius: 5px;
`;

export const DefaulImgContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  width: 100%;
  justify-content: center;

  > span {
    color: #fff !important;
    align-self: auto !important;
  }
`;

export const Img = styled.picture`
  background-image: url(${({ src }) => src || ''});
  width: 100%;
  border-radius: 5px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
