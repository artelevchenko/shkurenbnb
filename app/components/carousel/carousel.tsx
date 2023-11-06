"use client"

import { Slide } from '@/app/interfaces/slide'
import styles from './carousel.module.css'
import data from '../../../public/data/slides.json'
import Image from 'next/image'
import { JSX } from 'react';
import { useDispatch } from 'react-redux'


export default function Carousel() {
  const dispatch = useDispatch()

  const handleClick = (e: any, slide: Slide) => {
    e.preventDefault();
    dispatch({type:"ADD_FILTER", payload: slide.description})
  };

  const slides = data.slides.reduce((result: any[], slide) => {
    result.push(
      <div onClick={(e)=> handleClick(e, slide)} key={slide.id} className={styles.slides}>
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
      <div key={slide.id} className={styles.slide}>
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
      <div key={slide.id} className={styles.slide}>
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
      {slides}
      {/* {slidesbar} */}
      {/* {slidesMap} */}
    </div>
  )
}