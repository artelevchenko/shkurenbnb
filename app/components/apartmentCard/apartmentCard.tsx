import { Apartment } from '@/app/interfaces/apartment'
import styles from './apartmentCard.module.css'
import Image from 'next/image'

type ApartmentProps = {
  apartment: Apartment
}

export default function ApartmentCard({apartment}: ApartmentProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
          src={apartment.img || "/assets/images/main/defaultHome.jpg"}
          width={260}
          height={260}
          alt={apartment.name}
        />
      <div className={styles.inscription}>
        <div><b>{apartment.name}</b></div>
        <div>
          <Image className={styles.image}
            src='/assets/images/star.png'
            width={15}
            height={15}
            alt="star"
          />
          <div className={styles.score}>{apartment.score}</div>
        </div>
      </div>
      <div className={styles.description}>{apartment.description} kilometers away.</div>
      <div><b>${apartment.price}</b> night</div>
    </div>
  )
}