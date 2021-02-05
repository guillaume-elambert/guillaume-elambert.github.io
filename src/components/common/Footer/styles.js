import styled from 'styled-components';

export const Wrapper = styled.div `
  padding: 0 0 2rem 0;

  @media (max-width: 1960px) {
    padding: 0 0 2rem;
  }
`;

export const Flex = styled.div `
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div `
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
      
      &:hover {
        filter: brightness(0.6); 
      }
    }

    

    &:first-child{
      margin-left : 0;
    }

    &:last-child {
      margin-right : 0;
    }
  }
`;

export const Details = styled.div `
  h2,
  a,
  span {
    color: #2c2c2c;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;