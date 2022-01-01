import styles from '../styles/MainComp.module.css'
import Carousel from '../components/carousel/carousel'

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function MainComp() {
  return (
    <>
      <div className={styles.main}>
          {/*Slider*/}
          <Carousel slides={slides}/>
          {/*Text*/}
          <div className={styles.textSection}>
            <h1 className={styles.subtitle}>Føniks</h1>
            <p className={styles.subtitleText}>Føniks is a dog with black curly hair. He is a Spanish Water Dog
            and as such should love water. However, when put into any kind of water he runs back on land.
            The water in spain is not as cold as in Norway, and I think thats why he doesn't like swimming.
            If only he was a Norwegian Water Dog instead.
            </p>
          </div>
      </div>
    </>
)}