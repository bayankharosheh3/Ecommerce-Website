import React from 'react'
import Title from '../Title'
import styles from "./styles.module.css"

const Seen = () => {
  const title = "as seen on"
     const src ="./assets/images/10.png"
  return (
    <section className={styles.seenSec}>
      <Title titleIs={title}/>
        <img src={src}/>
    </section>
  )
}

export default Seen