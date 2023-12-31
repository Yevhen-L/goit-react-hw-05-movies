import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  font-weight: 500;
   background-color: #4d5ae5;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #404bbf;
`;
