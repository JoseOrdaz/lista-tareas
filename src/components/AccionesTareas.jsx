import React from 'react';
import { useState } from "react";
import logoPapelera from "../papelera-de-reciclaje.svg";
import logoJose from "../jose-ordaz.jpg";


export const AccionesTareas = ({item, onDelete, onUpdate}) => {

const [isEdit, setIsEdit] = useState(false);


 function FormEdit() {
        const [newValue, setNewValue] = useState(item.title);
      
        function handleSubmit(e) {
            e.preventDefault();
           
          }

          function handleChange(e){
            const value = e.target.value;
            setNewValue(value)
          }

          

          function handleClickUpdateTarea(){
            onUpdate(item.id, newValue)
            setIsEdit(false)
          }

        return (
            <tbody>
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src={logoJose}
                        className="mx-auto h-10 w-10 rounded-full object-cover "
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="whitespace-no-wrap text-gray-900">
                      Jose Ordaz
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Escriba tu tarea..."
                  value={newValue}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  
                />

        
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p
                  key={item.id}
                  className="whitespace-no-wrap text-gray-900"
                >
                  {item.date}
                </p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                  <span className="absolute inset-0 rounded-full bg-green-200 opacity-50"></span>
                  <span className="relative">active</span>
                </span>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <button
                onClick={handleClickUpdateTarea}
                className="flex-shrink-0 rounded-lg bg-black px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Actualizar
              </button>
                </a>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
               
              </td>
            </tr>
          </tbody>
        );
    }

function TareasElement(){

        return (
            <tbody>
            <tr>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">

             <span className="flex items-center">
                  <img src={item.person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate text-black">{item.person.name}</span>
                </span>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p className="whitespace-no-wrap uppercase text-gray-900">
                  <strong key={item.id}>{item.title}</strong>
                </p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p
                  key={item.id}
                  className="whitespace-no-wrap text-gray-900"
                >
                  {item.date}
                </p>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                  <span className="absolute inset-0 rounded-full bg-green-200 opacity-50"></span>
                  <span className="relative">active</span>
                </span>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <button onClick={() => setIsEdit(item.id)}>
                    Editar
                  </button>
                </a>
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <a
                  href="#"
                  className="text-red-600 hover:text-indigo-900"
                >
                  <button onClick={() => onDelete(item.id)}>
                    <img
                      src={logoPapelera}
                      className="animate-wave  w-5"
                      alt="papelera"
                    />
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        )
      }
    
   
  return (
    <>
    
    {isEdit ? <FormEdit/> : <TareasElement/>}
    </>
  )

  
  
}

export default AccionesTareas