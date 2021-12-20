import styles from './intro.module.css';
import { Select } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';
const { Link } = require('react-router-dom');

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.infoSection}>
        <div className={styles.images}>
          <img
            src="/static/img/tour-4-1.jpg"
            alt="image1"
            className={styles.image1}
          />
          <img
            src="/static/img/tour-9-1.jpg"
            alt="image2"
            className={styles.image2}
          />
        </div>
        <div className={styles.introText}>
          <div className="a">
            <p className={styles.subtitle}>Book Now</p>
            <p className={styles.title}>Let's Enjoy Your Trip with TripGoal</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aliquam recusandae impedit fugiat, commodi cum magni
              voluptatibus debitis, iusto illum qui tempore dolores, rem
              similique eos maxime sint sit ipsum alias inventore ratione
              suscipit unde provident. Fugit nisi nostrum ut.
            </p>
            <div className={styles.book}>
              <Link>Book Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tourTypeSection}>
        <div className={styles.tourType}>
          <div className={styles.tourTypeSectionCard}>
            <p>Location</p>
            <Select icon="none" variant="unstyled" placeholder="Select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className={styles.tourTypeSectionCard}>
            <p>Category</p>
            <Select icon="none" variant="unstyled" placeholder="Select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className={styles.tourTypeSectionCard}>
            <p>Total Person</p>
            <Select icon="none" variant="unstyled" placeholder="Select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className={` ${styles.bookNow}`}>
            <div className={styles.icon}>
              <FaCalendarAlt size={30} />
            </div>
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
