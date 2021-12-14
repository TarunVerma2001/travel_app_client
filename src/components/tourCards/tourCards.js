import useGetTours from '../customHooks/useGetTours';
import styles from './tourCards.module.css';

const TourCards = () => {
  const { tours, isLoading, error } = useGetTours(
    'http://localhost:8000/api/v1/tours'
  );

  console.log(tours);

  return (
    <div className={styles.tours}>
      {error && <div> {error} </div>}
      {isLoading && <div>isLoading...</div>}
      <div className={styles.tourCards}>
        {tours &&
          tours.map((tour) => (
            <div className={styles.card} key={tours._id}>
              <img src={`/static/img/${tour.imageCover}`} alt="" className={styles.tourImg}/>
               {/* <h2 className={styles.tourTitle}>{tour.name}</h2> */}
              {/*<h3 className="duration">{tour.duration} days</h3>
              <p className="blog-description">{tour.description}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TourCards;
