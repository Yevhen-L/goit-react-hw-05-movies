import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'components/Services/api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList trending={trendingMovies} loading={isLoading} />
    </main>
  );
};

export default Home;
