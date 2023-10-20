import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Movies from './movies/movies';
import css from './app.module.css';

export const App = () => {
  return (
    <div>
      <header>
        <ul className={css.navHeader}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
