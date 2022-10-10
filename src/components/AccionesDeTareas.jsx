import React from "react";
import logoPapelera from "../papelera-de-reciclaje.svg";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ModalComponent from "./ModalComponent";

export const AccionesTareas = ({ item, onDelete, onUpdate }) => {
  const status = [
    {
      id: 1,
      name: (
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-500">
          <span className="absolute inset-0 rounded-full opacity-50"></span>
          <span className="relative">Pendiente</span>
        </span>
      ),
    },
    {
      id: 2,
      name: (
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-500">
          <span className="absolute inset-0 rounded-full opacity-50"></span>
          <span className="relative">Realizado</span>
        </span>
      ),
    },
    {
      id: 3,
      name: (
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-500">
          <span className="absolute inset-0 rounded-full opacity-50"></span>
          <span className="relative">En proceso</span>
        </span>
      ),
    },
  ];

  const [pulsado, setPulsado] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelectStatus] = useState(status[0]);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }

    function SelectStatus() {
      return (
        <Listbox value={selected} onChange={setSelectStatus}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button
                  className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  placeholder="asignar tarea"
                >
                  <span className="flex items-center">
                    <span className="relative inline-block font-semibold leading-tight">
                      <span className="rounded-ful absolute inset-0"></span>
                      {selected.name}
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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {status.map((state) => (
                      <Listbox.Option
                        key={state.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-slate-300 text-white"
                              : "text-gray-900",
                            "relative cursor-pointer select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={state}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {state.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? " text-gray-900" : "text-blue-600",
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

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTarea() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <tbody>
        <tr>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span className="flex items-center">
              <img
                src={item.person.avatar}
                alt=""
                className="h-6 w-6 flex-shrink-0 rounded-full"
              />
              <span className="ml-3 block truncate text-black">
                {item.person.name}
              </span>
            </span>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <input
              type="text"
              id='"form-subscribe-Filter'
              className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Escribe tu tarea..."
              value={newValue}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p key={item.id} className="whitespace-no-wrap text-gray-900">
              {item.date}
            </p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <SelectStatus></SelectStatus>
          </td>

          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              <button
                onClick={handleClickUpdateTarea}
                className="flex-shrink-0 rounded-lg bg-black px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Actualizar
              </button>
            </a>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-center text-sm">
            <a href="#" className="text-red-600 hover:text-indigo-900">
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
    );
  }

  function TareasElement() {
    return (
      <tbody>
        <tr>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span className="flex items-center">
              <img
                src={item.person.avatar}
                alt=""
                className="h-6 w-6 flex-shrink-0 rounded-full"
              />
              <span className="ml-3 block truncate text-black">
                {item.person.name}
              </span>
            </span>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p className="whitespace-no-wrap uppercase text-gray-900">
              <strong key={item.id}>{item.title}</strong>
            </p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p key={item.id} className="whitespace-no-wrap text-gray-900">
              {item.date}
            </p>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span className="relative">{selected.name}</span>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              <button
                class="flex-shrink-0 rounded-lg px-4 py-2 text-base font-semibold text-black shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                onClick={() => setIsEdit(item.id)}
              >
                Editar
              </button>
            </a>
          </td>
          <td className="border-b border-gray-200 bg-white px-5 py-5 text-center text-sm">
            <a href="#" className="text-red-600 hover:text-indigo-900">
              <button onClick={() => setPulsado(!pulsado)}>
                {pulsado ? <ModalComponent 
                      key={item.id}
                      item={item}
                      onDelete={onDelete}
                /> : null}
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
    );
  }

  return <>{isEdit ? <FormEdit /> : <TareasElement />}</>;
};

export default AccionesTareas;
