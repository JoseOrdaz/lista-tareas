import React from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const SelectStatus = ({ estado, setSelectStatus, status }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Listbox value={estado} onChange={setSelectStatus}>
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
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
};
