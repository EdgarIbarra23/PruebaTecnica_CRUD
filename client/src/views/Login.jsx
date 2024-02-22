import React, {useState} from 'react'
import Inputs from '../components/Inputs'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
      <div className="rounded p-5 bg-slate-300 w-[350px]">
        <h1 className='text-center text-[3rem] font-bold'>Inicia Sesion</h1>

        <div className="flex flex-col items-center">
          
          <Inputs
            type="text"
            placeholder="Email"
            onChangeValue={(e) => setEmail(e.target.value)}
          />

          <Inputs
            type="password"
            placeholder="Contraseña"
            onChangeValue={(e) => setPassword(e.target.value)}
          />

          <NavLink to="/home" className='text-center bg-green-500 w-[200px] px-3 text-[25px] mt-2 rounded hover:bg-green-400'>Ingresar</NavLink>
          <NavLink to="/registro" className='mt-3 hover:underline hover:decoration-solid'>¡Crear cuenta nueva!</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login