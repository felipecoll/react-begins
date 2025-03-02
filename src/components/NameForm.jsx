import React from 'react'
import { useState } from 'react'


const NameForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <input type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>
            Hola {name || 'desconocido'}, tu email es {email || 'sin aclarar'} y tu contraseña es {password || 'sin datos'}
        </p>
    </div>
  )
}

export default NameForm