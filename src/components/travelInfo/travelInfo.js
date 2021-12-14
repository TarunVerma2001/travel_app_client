import styles from './travelInfo.module.css';
import { Select } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';
const { Link } = require('react-router-dom');

const TravelInfo = () => {
  return (
      <div className={styles.infoSection}>
        <div className={styles.introText}>
          <p className={styles.subtitle}>About Us</p>
          <p className={styles.title}>
            The Perfect Travel Place for You and Your Family
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            aliquam recusandae impedit fugiat, commodi cum magni voluptatibus
            debitis, iusto illum qui tempore dolores, rem similique eos maxime
            sint sit ipsum alias inventore ratione suscipit unde provident.
            Fugit nisi nostrum ut.
          </p>
          <div className={styles.aboutUsCards}>
              <Cards title='10M+' subTitle='Viewers' />
              <Cards title='109' subTitle='Hotels' />
              <Cards title='29' subTitle='Food Places' />
              <Cards title='18' subTitle='Related Spots' />
          </div>
        </div>

        <div className={styles.images}>
          <img
            src="/static/img/tour-5-1.jpg"
            alt="image1"
            className={styles.image1}
          />
          <img
            src="/static/img/tour-5-2.jpg"
            alt="image2"
            className={styles.image2}
          />
        </div>
      </div>
  );
};

const Cards = ({ title, subTitle }) => {
  return (
    <div className={styles.cards}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardSubTitle}>{subTitle}</p>
    </div>
  );
};

export default TravelInfo;
