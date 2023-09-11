import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/header'
import Carousel from './components/carousel/carousel'
import Main from './components/main/main'

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Main />
    </div>
  )
}
