import React from 'react'
import { useState } from 'react'


const ToggleButton = () => {
    
    const [isActive, setIsActive] = useState(false)

  return (
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Inactivo ⛔' : 'Activo ✅'}
    </button>
  )
}

export default ToggleButton