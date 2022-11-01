import React from "react";
import AccionesTareas from "./AccionesDeTareas";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import DataPicker from "./DataPicker";
import { format } from "date-fns";

const people = [
  {
    id: 1,
    name: "Jose",
    avatar: "./jose-ordaz.jpg",
  },
  {
    id: 2,
    name: "Elena",
    avatar: "./elena-martinez.jpg",
  },
  {
    id: 3,
    name: "Elena y Jose",
    avatar: "./pareja.png",
  },
];

const status = [
  {
    id: 1,
    title: "Pendiente",
    name: (
      <span class="relative inline-block rounded-full bg-red-300 p-[2px] font-semibold leading-tight  text-red-800">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    ),
  },
  {
    id: 2,
    title: "Realizada",
    name: (
      <span className="relative inline-block rounded-full bg-green-300 p-1 font-semibold leading-tight text-green-800">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </span>
      </span>
    ),
  },
  {
    id: 3,
    title: "En curso",
    name: (
      <span className="relative inline-block rounded-full bg-orange-300 p-1 font-semibold leading-tight text-orange-800">
        <span className="absolute inset-0 rounded-full opacity-50"></span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </span>
      </span>
    ),
  },
];

export const ListaTareas = () => {
  const [title, setTitle] = useState([]);
  const [tareas, setTareas] = useState([]);
  const [selectedUser, setSelected] = useState(people[0]);
  const [estado, setSelectStatus] = useState(status[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleSubmit(e) {
    if (e.target.value === "") {
    } else {
      e.preventDefault();
      const current = new Date();
      const generateDate = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      const newTareas = {
        id: crypto.randomUUID(),
        title: title,
        person: selectedUser,
        state: estado,
        date: format(selectedDate, "yyyy-MM-dd"),
      };
      const temp = [...tareas];
      temp.unshift(newTareas);
      setTareas(temp);
      setTitle("");
    }
  }
  function handleDelete(id) {
    const temp = tareas.filter((item) => item.id !== id);
    setTareas(temp);
  }
  function handleUpdateTarea(id, value) {
    const temp = [...tareas];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTareas(temp);
    setOpen(false);
  }
  function AssignedTo() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
    return (
      <Listbox key={tareas.id} value={selectedUser} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative">
              <label className="mb-3 block text-left text-sm font-bold text-gray-600">
                Asginar la tarea a:{" "}
              </label>
              <Listbox.Button
                className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800 sm:text-sm"
                placeholder="asignar tarea"
              >
                <span className="flex items-center">
                  <img
                    src={selectedUser.avatar}
                    alt=""
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate text-black">
                    {selectedUser.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full cursor-pointer overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? " cursor-pointer bg-slate-300 text-white"
                            : "text-gray-900",
                          "relative cursor-pointer select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selectedUser, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selectedUser ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selectedUser ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-blue-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
  }
  function SelectStatus() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
    return (
  

      <Listbox key={status.id} value={estado} onChange={setSelectStatus}>
      {({ open }) => (
        <>
          <div className="relative">
            <label className="mb-3 block text-left text-sm font-bold text-gray-600">
              Estado:{" "}
            </label>
            <Listbox.Button
              className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800 sm:text-sm"
              placeholder="asignar tarea"
            >
              <span className="flex items-center">
              {estado.name}
                <span className="ml-3 block truncate text-black">
                  {estado.title}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full cursor-pointer overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {status.map((state) => (
                  <Listbox.Option
                    key={state.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? " cursor-pointer bg-slate-300 text-white"
                          : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={state}
                  >
                    {({ setSelectStatus, active }) => (
                      <>
                        <div className="flex items-center">
                        {state.name}
                          <span
                            className={classNames(
                              setSelectStatus ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {state.title}
                          </span>
                        </div>

                        {setSelectStatus ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-blue-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>


    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-8">
      <div className="py-8">
        <div className="mb-1 justify-center">
          <div className="text-end">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center space-y-3 md:w-full md:flex-row md:space-x-3 md:space-y-0"
            >
              <div className=" relative ">
                <label className="mb-3 block text-left text-sm font-bold text-gray-600">
                  Tu nueva tarea:{" "}
                </label>
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" w-full flex-1 appearance-none rounded-lg bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Escribe tu tarea..."
                  value={title}
                  onChange={handleChange}
                  required
                />
              </div>
              <AssignedTo key={tareas.person}></AssignedTo>{" "}
              <div className=" relative ">
              <SelectStatus></SelectStatus>

              </div>
              {/* <label className="mb-3 block text-left text-sm font-bold text-gray-600">Seleccionar estado: 
              <div className="cursor-pointer w-auto rounded-md bg-white p-2 shadow-sm focus:border-blue-800 focus:ring-1 focus:ring-blue-800 sm:text-sm">
              <SelectStatus></SelectStatus></div>
              </label> */}
              <div className=" relative ">
                <label className="mb-3 block text-left text-sm font-bold text-gray-600">
                  Seleccionar día:{" "}
                </label>

                <DataPicker
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                  key={tareas.date}
                ></DataPicker>
              </div>
              <div className="relative mt-4 flex flex-col justify-end">
                <button
                  onClick={handleSubmit}
                  className=" rounded-lg bg-black px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Añadir tarea
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" m-auto flex max-w-3xl items-center p-2">
          <div className="inline-block min-w-full overflow-hidden rounded-lg bg-white shadow">
            {tareas.map((item) => (
              <>
                <AccionesTareas
                  item={item}
                  onDelete={handleDelete}
                  onUpdate={handleUpdateTarea}
                  setSelectStatus={setSelectStatus}
                  estado={estado}
                  status={status}
                  key={item.state}
                ></AccionesTareas>

              </>
            ))}

            {/* Consulta mas info */}
            <div className=" w-full py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="min-h-[auto] rounded-lg border-4 border-dashed border-gray-200 px-4 py-6">
                  <div className="rounded-lg bg-gray-50">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-blue-600">
                          Añade tus tareas o consulta más información.
                        </span>
                      </h2>
                      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                          >
                            + Info
                          </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
                          >
                            Politica de Privacidad
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaTareas;
