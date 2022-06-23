import React,{useState,useContext} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

 export const Appcontext=React.createContext();

function App() {

  const [sidebar,setsidebar]=useState(false)
  const [submenu,setsubmenu]=useState(false)
  


  return (
    <Appcontext.Provider value={{sidebar,setsidebar,submenu,setsubmenu}} >
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      
    
    </Appcontext.Provider>
  )
}

export default App
