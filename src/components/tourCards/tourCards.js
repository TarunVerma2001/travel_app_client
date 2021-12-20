import styles from './tourCards.module.css';
import { Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getAllTours } from './../../util/api';
import { useState, useEffect } from 'react';

const TourCards = () => {
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await getAllTours();
      console.log(res);
      if (res.status === 'success') {
        setTours(res.data.tours);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.tours}>
      <div className={styles.sorting}>
        {tours && (
          <Select icon="none" placeholder="Sort" className={styles.sort}>
            <option value="option1">Ascending</option>
            <option value="option2">Descending</option>
          </Select>
        )}
      </div>
      <div className={styles.tourCards}>
        {tours &&
          tours.map((tour) => (
            <Link to={`/tour/${tour._id}`}>
              <div className={styles.card} key={tours._id}>
                <img
                  src={`/static/img/${tour.imageCover}`}
                  alt=""
                  className={styles.tourImg}
                />
                <h2 className={styles.tourTitle}>{tour.name}</h2>
                <div className={styles.tourDetails}>
                  <p>
                    <span>Duration:</span> {tour.duration}
                  </p>
                  <p>
                    <span>Difficulty:</span> {tour.difficulty}{' '}
                  </p>
                  <p>
                    <span>Price:</span> {tour.price}$
                  </p>
                  <p>
                    <span>Rating:</span> {tour.rating}
                  </p>
                </div>
                <p className={styles.summary}>{tour.summary}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TourCards;
