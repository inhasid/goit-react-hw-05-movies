import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '../Button/Button';

import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';

import { searchMovies } from '../../api/movie';

import styles from './movies-search.module.css';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, page);
        // const { results } = respMovies.data;
        setMovies(prevMovies =>
          data.results?.length ? [...prevMovies, ...data.results] : prevMovies
        );
        console.log(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  };

  const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });

  const isMovies = Boolean(movies.length);
  const isMoreMovies = Boolean(movies.length % 20 === 0);

  return (
    <>
      <MoviesSearchForm onSubmit={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isMovies && <MoviesSearchList items={movies} />}
      {isMovies && isMoreMovies && (
        <div className={styles.loadMoreWrapper}>
          <Button className={styles.button} onClick={loadMore} type="button">
            Load more
          </Button>
        </div>
      )}
    </>
  );
};

export default MoviesSearch;
