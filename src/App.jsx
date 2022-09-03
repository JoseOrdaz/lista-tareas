import { useEffect, useState } from "react";
import logo from "./tarea-completada.png";
import ListaTareas from "./components/listaTareas"


function App() {
  const [title, setTitle] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
  const value = event.target.value
    setTitle(value)
    
  }

  function handleSubmit(e){
    e.preventDefault();
    const current = new Date();
    const generateDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} - ${current.getHours()}:${current.getMinutes()}`;
    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        complete: false,
        date: generateDate
        
    }
    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);

  }


  return (
   
      <header className="flex min-h-screen flex-col items-center justify-top bg-[#f4f4f4] text-white">
   
  <div className="container py-16 mx-auto text-center sm:px-4 sm:py-16">
    
<div className="flex items-center justify-center text-white">
     <img
          src={logo}
          className="w-16 h-16 mb-10 animate-wave"
          alt="logo"
        />
        </div>

        <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Lista de Tareas</span> <span class="text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">¡Para organizar tu vida!</span></h1>
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 relative sm:text-5xl">
	
		</h1>
        </div>
        <ListaTareas></ListaTareas>  
    <p class="italic font-semibold text-center text-black">Desarrollado por <a target="_blank" className="underline font-bold" href="https://portfolio.joseordaz.com">Jose Ordaz</a> con mucho <svg class="inline-block w-12 h-12" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path fill="#EA5A47" d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"></path><path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M59.5 25c0-6.9036-5.5964-12.5-12.5-12.5-4.7533 0-8.8861 2.6536-11 6.5598C33.8861 15.1536 29.7533 12.5 25 12.5c-6.9036 0-12.5 5.5964-12.5 12.5 0 2.9699 1.0403 5.6942 2.7703 7.8387l-.0043.0034L36 58.5397l20.7339-25.6975-.0043-.0034C58.4597 30.6942 59.5 27.9699 59.5 25z"></path></svg></p>
        
      </header>
  
  );
}

export default App;
