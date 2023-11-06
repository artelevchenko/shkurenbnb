"use client"

import Header from './components/header/header'
import Carousel from './components/carousel/carousel'
import Main from './components/main/main'
import { Provider } from 'react-redux'
import { store } from './store'

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Carousel />
      <Main />
    </Provider>
  )
}
