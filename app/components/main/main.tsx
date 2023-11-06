"use client"

import { useEffect, useState } from 'react'
import styles from './main.module.css'
import data from '../../../public/data/homes.json'
import ApartmentCard from '../apartmentCard/apartmentCard'
import { Apartment } from '@/app/interfaces/apartment'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/interfaces/rootState'

export default function Main() {
  const [homes, setHomes] = useState(data.homes);
  const filterWord = useSelector((state: RootState) => state.filterWord.word);
  const [homesFiltered, setHomesFiltered] = useState<Apartment[]>([]);

  useEffect(() => {
    if (filterWord !== "") {
      const filter = homes.filter((el) => el.options.includes(filterWord))
      setHomesFiltered(filter)
    } else {
      setHomesFiltered(homes)
    }
  }, [filterWord, homes]);
  
  return (
    <div className={styles.main}>
      {homesFiltered.map((home) => <ApartmentCard apartment={home} key={home.id}/>)}
    </div>
  )
}