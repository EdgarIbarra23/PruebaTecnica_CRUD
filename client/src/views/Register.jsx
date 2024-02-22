import React, { useState } from 'react'
import Inputs from '../components/Inputs'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  // Funcion para la Creacion de Usuarios
  const handleAddUser = (e) => {
    if (nameUser === "" || email === "" || password === "") {
      e.preventDefault();
      setMessageError("¡Por Favor, llenar todos los campos!")
    } else {
      Axios.post("http://localhost:3001/createUser", {
        nameUser: nameUser,
        email: email,
        password: password
      }).then(() => {
        alert("¡Usuario Registrado Exitosamente!")
      });
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
      <div className="rounded p-5 bg-slate-300 w-[350px]">
        <h1 className='text-center text-[3rem] font-bold'>Registro de Usuarios</h1>

        <div className="flex flex-col items-center">

          <form onSubmit={handleAddUser} className='flex flex-col items-center w-full'>
            <Inputs
              type="text"
              placeholder="Nombre de Usuario"
              onChangeValue={(e) => setNameUser(e.target.value)}
            />

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

            <p className='text-red-600 font-bold'>{messageError}</p>

            <button className='bg-green-500 w-[200px] px-3 text-[25px] mt-2 rounded hover:bg-green-400'>Registrar</button>
          </form>
          <NavLink to="/" className='mt-3 hover:underline hover:decoration-solid'>Ya tengo Cuenta</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register