import React from 'react'

const StaticComponent = () => {

    const items = ['Manzana', 'Pera', 'Uva', 'Mango']


  return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</
            li>
        ))}
    </ul>
  )
}

export default StaticComponent