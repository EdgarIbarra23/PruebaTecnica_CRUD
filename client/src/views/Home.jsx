import React from 'react'
import Inputs from '../components/Inputs'

const Home = () => {
  return (
    <div className='flex justify-center items-start h-screen bg-gray-100'>
      <div className="flex flex-col justify-center items-center w-[70rem]">

        <div className="w-[450px] m-5">
          <h1 className='text-center text-[30px] mb-2 font-bold'>¡Lista de Tareas!</h1>

          <div className="flex justify-center items-center">
            <Inputs
              type="text"
              placeholder="Ingrese la Nueva Tarea!"
            />

            <button className='bg-green-500 w-[200px] py-[5px] text-[20px] rounded hover:bg-green-400 text-white font-bold'>Agregar</button>
          </div>
        </div>

        <div className="flex flex-col justify-center border-2 w-[900px]">
          <table className=''>
            <thead className='text-center'>
              <tr className='border-2 border-black'>
                <th>Id</th>
                <th>Nombre de Usuario</th>
                <th>Email</th>
                <th>Tarea</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr className='border-2 border-black'>
                <td>1</td>
                <td>Edgar</td>
                <td>edgarfercho2309@gmail.com</td>
                <td>Tarea 1</td>
                <td className='flex justify-around'>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home