import React from "react";
import { Fragment, useRef, useState } from "react";
import { Listbox, Dialog, Transition } from "@headlessui/react";

export const SelectStatus = ({estado, setSelectStatus, status}) => {


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Listbox value={estado} key={status.id} onChange={setSelectStatus}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className="relative w-full cursor-pointer text-left focus:outline-none sm:text-sm"
              placeholder="asignar tarea"
            >
              <span className="flex items-center">
                <span className="relative inline-block font-semibold leading-tight">
                  <span className="rounded-ful absolute inset-0"></span>
                  {estado.name}
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-[-6px] z-10 mt-1 max-h-56 rounded-lg bg-white p-2 text-base shadow sm:text-sm">
                {status.map((state) => (
                  <Listbox.Option
                    key={state.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white" : "text-gray-900",
                        "relative cursor-pointer select-none"
                      )
                    }
                    value={state}
                  >
                    {({ estado, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              estado ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {state.name}
                          </span>
                        </div>

                        {estado ? (
                          <span
                            className={classNames(
                              active ? " text-gray-900" : "text-blue-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            {/* <CheckIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            /> */}
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