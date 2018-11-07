import styled from 'styled-components';

const Card = styled.div`
  border-radius: 6px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
  padding: 5rem 4rem;
  margin: 1rem;
  max-width: 50%;
`;

const CTAPrimary = styled.button`
  border-radius: 4px;
  border: 0;
  background-color: rgba(110, 198, 255, 0.38);
  padding: 10px 20px 10px 20px;
  color: #fff;
  font-weight: 600;
  transition: 0.4s ease-in-out all;
  margin: 0.5rem 1rem;
  &:hover {
    background: rgba(34, 34, 34, 0.3);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const CTAPrimaryRed = styled(CTAPrimary)`
  background: #ff6978;
  &:hover {
    background: #c7354c;
  }
`;

const CTAPrimaryBlue = styled(CTAPrimary)`
  background: #058ed9;
  &:hover {
    background: #0061a7;
  }
`;

export { Card, CTAPrimary, CTAPrimaryRed, CTAPrimaryBlue };
