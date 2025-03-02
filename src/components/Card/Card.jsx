import React from 'react'
//import './Card.css'
// import styles from './Card.module.css'
import styles from './Card.module.scss'

const Card = () => {


  return (
    // <div className='card'>Soy una tarjeta</div>
    <div className={styles.card}>Soy una tarjeta</div>
  )
}

export default Card