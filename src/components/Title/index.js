import React from 'react'
import styles from "./styles.module.css"
const Title = ({titleIs}) => {
  return (
    <h2 className={styles.title}>{titleIs}</h2>
  )
}

export default Title