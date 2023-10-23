import styled from 'styled-components';

export const ListItem = styled.li`
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: start;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;

export const Section = styled.section`
  padding: 15px 10;
`;

export const List = styled.ul`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
