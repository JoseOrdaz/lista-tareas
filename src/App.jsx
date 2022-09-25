import { useState } from "react";
import logo from "./tarea-completada.png";
import ListaTareas from "./components/listaTareas";

function App() {


  return (
    <header className="justify-top flex min-h-screen flex-col items-center bg-[#f4f4f4] text-white">
      <div className="container mx-auto py-16 text-center sm:px-4 sm:py-16">
        <div className="flex items-center justify-center text-white">
          <img src={logo} className="animate-wave mb-10 h-16 w-16" alt="logo" />
        </div>

        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
          <span className="block">Lista de Tareas</span>{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-5xl text-transparent lg:text-7xl">
            ¡Para organizar tu vida!
          </span>
        </h1>
        <h1 className="relative text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"></h1>
      </div>
      {/* <nav class="fixed bottom-0 z-50 flex w-full justify-center gap-6 bg-gray-100 p-2 dark:bg-gray-900 sm:static sm:w-auto sm:bg-transparent sm:p-0">
        <button
          class="pointer-events-none flex w-1/4 flex-col items-center gap-1 rounded-lg p-2 text-xs text-gray-900 ring-gray-900 transition hover:text-gray-900 dark:text-yellow-300 dark:ring-yellow-300 dark:hover:text-yellow-300 sm:w-auto sm:flex-row sm:text-base sm:hover:ring-2"
          onClick={setOtrasTareas}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Tareas de Jose
        </button>
        <button
          class="flex w-1/4 flex-col items-center gap-1 rounded-lg p-2 text-xs text-gray-500 ring-gray-900 transition hover:text-gray-900 dark:text-gray-100 dark:ring-yellow-300 dark:hover:text-yellow-300 sm:w-auto sm:flex-row sm:text-base sm:hover:ring-2"
          onClick={setOtrasTareas}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Tareas de Elena
        </button>
      </nav> */}
      <ListaTareas />

      <p className="text-center font-semibold italic text-black">
        Desarrollado por{" "}
        <a
          target="_blank"
          className="font-bold underline"
          href="https://portfolio.joseordaz.com"
        >
          Jose Ordaz
        </a>{" "}
        con mucho{" "}
        <svg
          className="inline-block h-12 w-12"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EA5A47"
            d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"
          ></path>
        </svg>
      </p>
    </header>
  );
}

export default App;
