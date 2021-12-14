import styles from './tripInfo.module.css';
import { HiChat, HiCalendar, HiStar } from 'react-icons/hi';
const TripInfo = () => {
  return (
    <div className={styles.trip}>
      <div className={styles.intro}>
        <p className={styles.subtitle}>3 steps for the perfect trip</p>
        <p className={styles.title}>Find Travel Perfection</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quaerat laboriosam aperiam ipsa cum laborum sapiente totam, non est
          quibusdam.
        </p>
      </div>
      <div className={styles.introCards}>
        <Cards
          icon={<HiChat size="100" color="#3685fb" />}
          title="Tell us what do you want"
          subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, at.'
        />
        <Cards
          icon={<HiCalendar size="100" color="#3685fb" />}
          title="Share your travel preferemce"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, at."
        />
        <Cards
          icon={<HiStar size="100" color="#3685fb" />}
          title="We'll give you recommendations"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, at."
        />
      </div>
    </div>
  );
};

const Cards = ({ icon, title, subTitle }) => {
  return (
    <div className={styles.cards}>
      {icon}
      <p className={styles.cardsTitle}>{title}</p>
      <p className={styles.cardsSubTitle}>{subTitle}</p>
    </div>
  );
};

export default TripInfo;
