import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";


export default function ModalComponent({ onDelete, item, onUpdate }) {
  const cancelButtonRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [newValue, setNewValue] = useState(item.title);
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }


    function handleClickUpdateTarea(e) {
      onUpdate(item.id, newValue);
      useRef(null);

    }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>{" "}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Editar la tarea
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Edita los campos que quieras modificar y dale actualizar para guardar los cambios.
                        </p>
                      </div>
                      <div className="mt-4">
                     <p className="text-left border-b mb-2 text-xs font-medium leading-6 text-gray-600">Actualizar texto de la tarea:</p> 
                      <textarea
              type="text"
              id='"form-subscribe-Filter'
              className=" w-full flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Escribe tu tarea..."
              value={newValue}
              onChange={handleChange}
              onSubmit={handleSubmit}
            /></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                onClick={() => handleClickUpdateTarea()}
                className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
               
              >
                Actualizar Tarea
              </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => onDelete(item.id)}
                  >
                    Borrar Tarea
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );

  
}
