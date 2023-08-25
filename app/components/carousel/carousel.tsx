import styles from './carousel.module.css'
import data from '../../../public/data/slides.json'
import Image from 'next/image'
import { JSX } from 'react';


export default function Carousel() {

  const slides = data.slides.reduce((result: any[], slide) => {
    result.push(
      <div className={styles.slide}>
        <Image className={styles.image}
          src={slide.img}
          width={30}
          height={30}
          alt={slide.name}
        />
        <div className={styles.inscription}>{slide.name}</div>
      </div>
    )
    return result
  }, []);

  const slidesMap = data.slides.map((slide, i) => {
    return (
      <div key={i} className={styles.slide}>
        <Image className={styles.image}
          src={slide.img}
          width={30}
          height={30}
          alt={slide.name}
        />
        <div className={styles.inscription}>{slide.name}</div>
      </div>
    )
  });

  const slidesbar: JSX.Element[] = [];
  const slidesForEach = data.slides.forEach((slide) => {
    slidesbar.push(
      <div className={styles.slide}>
        <Image className={styles.image}
          src={slide.img}
          width={30}
          height={30}
          alt={slide.name}
        />
        <div className={styles.inscription}>{slide.name}</div>
      </div>
    )
  })



  return (
    <div className={styles.carousel}>
      {/* {slides} */}
      {/* {slidesbar} */}
      {slidesMap}
    </div>
  )
}



// import apple from '../../images/carousel/apple.png'
// import avocado from '../../images/carousel/avocado.png'
// import banana from '../../images/carousel/banana.png'
// import carrot from '../../images/carousel/carrot.png'
// import cherry from '../../images/carousel/cherry.png'
// import grape from '../../images/carousel/grape.png'
// import guava from '../../images/carousel/guava.png'
// import kiwi from '../../images/carousel/kiwi.png'
// import lemon from '../../images/carousel/lemon.png'
// import mango from '../../images/carousel/mango.png'
// import maracuja from '../../images/carousel/maracuja.png'
// import orange from '../../images/carousel/orange.png'
// import peach from '../../images/carousel/peach.png'
// import pear from '../../images/carousel/pear.png'
// import pineapple from '../../images/carousel/pineapple.png'
// import strawberry from '../../images/carousel/strawberry.png'
// import watermelon from '../../images/carousel/watermelon.png'
{/* <div className={styles.slide}>
        <Image className={styles.image}
          src={apple}
          width={30}
          height={30}
          alt='apple'
        />
        <div className={styles.inscription}>Apple</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={avocado}
          width={30}
          height={30}
          alt='avocado'
        />
        <div className={styles.inscription}>Avocado</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={banana}
          width={30}
          height={30}
          alt='banana'
        />
        <div className={styles.inscription}>Banana</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={carrot}
          width={30}
          height={30}
          alt='carrot'
        />
        <div className={styles.inscription}>Carrot</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={cherry}
          width={30}
          height={30}
          alt='cherry'
        />
        <div className={styles.inscription}>Cherry</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={grape}
          width={30}
          height={30}
          alt='grape'
        />
        <div className={styles.inscription}>Grape</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={guava}
          width={30}
          height={30}
          alt='guava'
        />
        <div className={styles.inscription}>Guava</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={kiwi}
          width={30}
          height={30}
          alt='kiwi'
        />
        <div className={styles.inscription}>Kiwi</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={lemon}
          width={30}
          height={30}
          alt='lemon'
        />
        <div className={styles.inscription}>Lemon</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={mango}
          width={30}
          height={30}
          alt='mango'
        />
        <div className={styles.inscription}>Mango</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={maracuja}
          width={30}
          height={30}
          alt='maracuja'
        />
        <div className={styles.inscription}>Maracuja</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={orange}
          width={30}
          height={30}
          alt='orange'
        />
        <div className={styles.inscription}>Orange</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={peach}
          width={30}
          height={30}
          alt='peach'
        />
        <div className={styles.inscription}>Peach</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={pear}
          width={30}
          height={30}
          alt='pear'
        />
        <div className={styles.inscription}>Pear</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={pineapple}
          width={30}
          height={30}
          alt='pineapple'
        />
        <div className={styles.inscription}>Pineapple</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={strawberry}
          width={30}
          height={30}
          alt='strawberry'
        />
        <div className={styles.inscription}>Strawberry</div>
      </div>
      <div className={styles.slide}>
        <Image className={styles.image}
          src={watermelon}
          width={30}
          height={30}
          alt='watermelon'
        />
        <div className={styles.inscription}>Watermelon</div>
      </div> */}