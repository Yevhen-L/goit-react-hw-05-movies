import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  export const MovieList = styled(Link);
  text-decoration: none;
  &:hover {
    color: #404bbf;
  }
`;

export const Section = styled.section`
  padding: 15px 10;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
