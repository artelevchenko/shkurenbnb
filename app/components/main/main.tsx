import styles from './main.module.css'
import data from '../../../public/data/homes.json'
import ApartmentCard from '../mainCard/apartmentCard'

export default function Main() {
  return (
    <div className={styles.main}>
      {data.homes.map((home) => <ApartmentCard apartment={home} key={home.id}/>)}
    </div>
  )
}