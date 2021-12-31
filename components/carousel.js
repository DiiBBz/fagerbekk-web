import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/Embla.module.css'
import React, { useEffect } from 'react'

export default function Carousel({ children }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
        // Embla API is ready
        }
    }, [emblaApi])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>Slide 1</div>
                <div className={styles.embla__slide}>Slide 2</div>
                <div className={styles.embla__slide}>Slide 3</div>
            </div>
        </div>
    )
}