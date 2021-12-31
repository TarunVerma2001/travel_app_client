import styles from './tourCards.module.css';
import { Link } from 'react-router-dom';
import { getAllTours, sortAllTours } from './../../util/api';
import { useState, useEffect } from 'react';
import { HiArrowDown } from 'react-icons/hi';

const TourCards = () => {
  const [tours, setTours] = useState(null);
  const [dropVis, setDropVis] = useState(false);
  const [sortType, setSortType] = useState();

  const getData = async () => {
    const res = await getAllTours();
    console.log(res);
    if (res.status === 'success') {
      setTours(res.data.tours);
    }
  };
  const sortAllData = async () => {
    const res = await sortAllTours(sortType);
    console.log(res);
    if (res.status === 'success') {
      setTours(res.data.tours);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    sortAllData();
  }, [sortType]);

  return (
    <div className={styles.tours}>
      <div className={styles.sorting}>
        <div className={styles.sortDropdown}>
          <button
            className={styles.dropButton}
            onClick={() => setDropVis(!dropVis)}
          >
            <p>Sort</p>
            <HiArrowDown />
          </button>
          {dropVis && (
            <div className={styles.sort}>
              <button onClick={() => setSortType('+')}>Low to High</button>
              <button onClick={() => setSortType('-')}>High to Low</button>
            </div>
          )}
        </div>
        {/* {tours && (
          <Select icon="none" placeholder="Sort" className={styles.sort}>
            <option value="option1">Ascending</option>
            <option value="option2">Descending</option>
          </Select>
        )} */}
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
