import { useState } from "react";
import logo from "./organiza-tuvida.svg";
import ListaTareas from "./components/ListaDeTareas";
function App() {
  return (
    <header className="justify-top flex min-h-screen flex-col items-center bg-[#f4f4f4] text-white">
      <div className="container mx-auto mt-8 py-4 text-center sm:px-4 sm:py-4">
        <h1 className="text-2xl font-extrabold leading-10 tracking-tight text-black sm:leading-none">
          <span className="block">Lista de Tareas</span>{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text  text-3xl text-transparent">
            ¡Para organizar tu vida!
          </span>
        </h1>
      </div>
      <ListaTareas></ListaTareas>
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
