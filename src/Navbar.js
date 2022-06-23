import React,{useContext} from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Appcontext } from './App'
import sublinks from './data'
import Submenu from './Submenu'

const Navbar = () => {

  const {sidebar,setsidebar,submenu,setsubmenu}=useContext(Appcontext);
  
  const displaysubmenuhandler=(e)=>{
           setsubmenu(!submenu);
        const page=e.target.textContent;
        // console.log(page);
        const btn=e.target.getBoundingClientRect();
    // console.log(btn);
  }

  return <nav className='nav'>
  <div className='nav-center'>
    <div className='nav-header'>
    <img src={logo} className='nav-logo' alt='stripe'></img>
    <button className='btn toggle-btn' onClick={()=>setsidebar(!sidebar)}>

      <FaBars></FaBars>
    </button>
    </div>
    <ul className='nav-links' >
    {
      sublinks.map((elem,index)=>{
      const {page,links}=elem;
      
      return <li key={index}>

        <button className='link-btn ' onMouseOver={displaysubmenuhandler}>
          {page}
          </button>
         
         </li>

    })
    }
    </ul>
   
    <button className='btn signin-btn'>Sign in</button>
  </div>

  </nav>
}

export default Navbar
