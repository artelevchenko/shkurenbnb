"use client"

import React from 'react';
import styles from './header.module.css'
import Image from 'next/image'
import Modal from 'react-modal';

export default function Header(){
  const [listIsOpen, setIsOpen] = React.useState({display: 'none'});

  function openList() {
    setIsOpen({display: 'block'});
  }

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <Image
          src='/assets/images/airbnb.png'
          width={50}
          height={50}
          alt="ShkurenBnB"
        />
        <div className={styles.logo}>shkurenBnB</div>
        <button onClick={openList} className={styles.button}>
          <Image
            src='/assets/images/align.png'
            width={30}
            height={30}
            alt='align'
          />
          <Image
            className={styles.img}
            src='/assets/images/avatar.png'
            width={30}
            height={30}
            alt='avatar'
          />
        </button>
        <ul className={styles.list} style={listIsOpen}>
          <li>Sign in</li>
          <li>Log in</li>
          <hr />
          <li>ShkurenBnB your home</li>
          <li>Help centre</li>
        </ul>
      </div>
    </div>
  )
}