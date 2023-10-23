import { NavLink, ListItem, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrapper>
      <h1>{'Oops... Seems like something went wrong.'}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/movies">Movies</NavLink>
        </ListItem>
      </ul>
    </Wrapper>
  );
};
export default NotFound;
