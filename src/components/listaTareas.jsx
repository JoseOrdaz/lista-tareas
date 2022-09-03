import React from "react";
import { useState } from "react";
import logoPapelera from "../papelera-de-reciclaje.svg";
import logoJose from "../jose-ordaz.jpg";
import AccionesTareas from "./AccionesTareas";

export const ListaTareas = ({ onDelete }) => {
  const [title, setTitle] = useState([]);
  const [tareas, setTareas] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const current = new Date();
    const generateDate = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()} - ${current.getHours()}:${current.getMinutes()}`;
    const newTareas = {
      id: crypto.randomUUID(),
      title: title,
      complete: false,
      date: generateDate,
    };
    const temp = [...tareas];
    temp.unshift(newTareas);

    setTareas(temp);
    setTitle("")
  }
  function handleDelete(id){
    const temp = tareas.filter(item => item.id !== id);
    setTareas(temp)
 }

 function handleUpdateTarea(id, value){
  const temp = [...tareas]
  const item = temp.find(item => item.id === id);
  item.title = value;
  setTareas(temp)
 }
 

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-8">
      <div className="py-8">
        <div className="mb-1 flex w-full flex-row justify-between sm:mb-0">
          <div className="text-end">
            <form
              onSubmit={handleSubmit}
              className="flex w-3/4 max-w-sm flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0"
            >
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Escribe tu tarea..."
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="flex-shrink-0 rounded-lg bg-black px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Añadir
              </button>
            </form>
          </div>
          <div className="text-end">
            <form className="flex w-3/4 max-w-sm flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Buscar tarea..."
                />
              </div>
              <button
                className="flex-shrink-0 rounded-lg bg-black px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    >
                      Usuario
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    >
                      Tarea
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    ></th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                    ></th>
                  </tr>
                </thead>
                {tareas.map((item) => (
              <AccionesTareas key={item.id} item={item}  value={title}
                   onDelete={handleDelete} onUpdate={handleUpdateTarea}></AccionesTareas>
                ))}
              </>
            </table>

            {/*Paginador*/}
            {/* <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                        <div className="flex items-center">
                            <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </button>
                            <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                1
                            </button>
                            <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                2
                            </button>
                            <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                3
                            </button>
                            <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                4
                            </button>
                            <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaTareas;
