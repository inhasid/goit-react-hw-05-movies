import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrending } from '../../api/trending';
import Loader from '../Loader/Loader';

import styles from './trending.module.css';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const respMovies = await getTrending();
        const { results } = respMovies.data;
        setTrending(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  const elements = trending.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link className={styles.link} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <Loader />}
      {Boolean(elements.length) && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default Trending;
