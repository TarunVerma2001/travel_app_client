import { useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './tourView.module.css';
import { FcRating } from 'react-icons/fc';
import { getTour, postReview } from '../../util/api';

const TourView = () => {
  let match = useRouteMatch();
  const tourId = match.url.substring(6);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(null);
  const [tour, setTour] = useState(null);
  const [rating, setRating] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await getTour(tourId);
      setTour(res.data.tour);
      setReviews(res.data.tour.reviews);
    };
    getData();
  }, []);

  const onPost = async () => {
    const res = await getTour(tourId);
    setReviews(res.data.tour.reviews);
  };

  const onClick = async () => {
    console.log('inside onClick');
    const data = {
      review: review,
      rating: rating,
    };

    postReview(tourId, data, onPost);
  };

  return (
    <div>
      {tour && (
        <div className={styles.tour}>
          <div className={styles.topSection}>
            <div className={styles.titleAndBooking}>
              <h2 className={styles.tourTitle}>{tour.name}</h2>
              <p className={styles.book}>Book Now</p>
            </div>
            <img
              src={`/static/img/${tour.imageCover}`}
              alt=""
              className={styles.tourImg}
            />
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.tourDetails}>
              <p>{tour.duration} day Tour</p>
              <p>Difficulty {tour.difficulty}</p>
              <p>{tour.price} $</p>
              <p>{tour.rating} star Tour</p>
            </div>
            <h2 className={styles.tourSummaryTitle}>Summary</h2>
            <p className={styles.summary}>{tour.summary}</p>
            <h2 className={styles.tourDesTitle}>About Tour</h2>
            <p className={styles.description}>{tour.description}</p>
            <h2 className={styles.tourImagesTitle}>Images</h2>
            <div className={styles.tourImages}>
              {tour.images.map((image) => (
                <img
                  src={`/static/img/${image}`}
                  alt="TourImage"
                  className={styles.tourPreviewImages}
                />
              ))}
            </div>
            <div className={styles.reviews}>
              <p className={styles.reviewTitle}>Reviews</p>
              {reviews &&
                reviews.map((review) => (
                  <div className={styles.reviewCard} key={tour._id}>
                    <div className={styles.reviewBody}>
                      <div className={styles.reviewAuthor}>
                        <img
                          src={`/static/img/${review.user.photo}`}
                          alt="autherImage"
                        />
                        <div>
                          <p className={styles.reviewRating}>
                            {review.user.name}
                          </p>
                          <p className={styles.reviewDescription}>
                            {review.review}
                          </p>
                        </div>
                      </div>
                      <p className={styles.rating}>
                        {review.rating}
                        <FcRating />
                      </p>
                    </div>
                  </div>
                ))}
              <div className={styles.writeReview}>
                <input
                  type="text"
                  placeholder="Review"
                  onChange={(e) => setReview(e.target.value)}
                  clasname={styles.input}
                />
                <input
                  type="text"
                  placeholder="Rating"
                  onChange={(e) => setRating(e.target.value)}
                  clasname={styles.input}
                />

                <button className={styles.reviewButton} onClick={onClick}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourView;
