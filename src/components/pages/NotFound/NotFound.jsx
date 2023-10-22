import { ListItem, Link, Wrapper } from './NotFound.styled';
const NotFound = () => {
  return (
    <Wrapper>
      <h1>{'Oops... Seems like something went wrong.'}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>

        <ListItem>
          <Link to="/movies">Movies</Link>{' '}
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default NotFound;
