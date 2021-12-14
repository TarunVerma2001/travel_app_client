import styles from './suggestedLocation.module.css';

const Suggested = () => {
  return (
    <div className={styles.suggested}>
      <p className={styles.title}>SuggestedLocation</p>
      <p className={styles.subtitle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ratione,
        saepe beatae pariatur maxime esse? Aut voluptate officia facilis!
        Dignissimos, placeat laborum? A, ea sint excepturi harum consequuntur
        sapiente consequatur!
      </p>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <img src="/static/img/tour-2-1.jpg" alt="card1" />
          {/* <p className={styles.img1description}>Beach</p> */}
          <p></p>
        </div>
        <div className={styles.card2}>
          <img src="/static/img/tour-2-2.jpg" alt="card2" />
          {/* <p className={styles.img2description}>Ocean</p> */}
        </div>
        <div className={styles.card3}>
          <img src="/static/img/tour-2-3.jpg" alt="card3" />
          {/* <p className={styles.img3description}>Palm Trees</p> */}
        </div>
      </div>
    </div>
  );
};

export default Suggested;
