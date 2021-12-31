import styles from '../styles/MainComp.module.css'
import Image from 'next/image'

export default function MainComp() {
  return (
    <>
      <div className={styles.main}>
          {/*Slider*/}
          <Image
          src="/images/profile.jpg"
          alt="A picture of something"
          width="488px"
          height="366px"
          />
          {/*Text*/}
          <div className={styles.textSection}>
            <h1>Subtitle ftw</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer dui mauris, porta nec felis non, commodo fermentum velit.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget suscipit magna, at commodo dui.
              Maecenas a finibus risus. In interdum elementum ante, a pretium elit pellentesque at. Suspendisse id rhoncus tortor, pellentesque molestie nisl.
              Pellentesque posuere ornare lacus, et ultricies est ultricies in.
              Nullam luctus, sapien a luctus tristique, est leo pellentesque nulla, vitae viverra nibh augue vel sapien.
              Nulla elit lorem, luctus a malesuada in, tempus sit amet turpis.
              Mauris lobortis mollis pharetra. Vivamus scelerisque ipsum nec neque mattis aliquet.
            </p>
          </div>
      </div>
    </>
)}