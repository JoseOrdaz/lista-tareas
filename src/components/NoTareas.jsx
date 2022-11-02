import React from 'react'

export const NoTareas = () => {
  return (
    <div className="bg-gray-50">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">No hay ninguna tarea pendiente...</span>

      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex w-auto rounded-md shadow">

        <img className="max-w-[295px]" src='./notareas.png'></img>
        </div>
    
      </div>
    </div>
  </div>
  )
}
