import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { Appcontext } from './App'
const Sidebar = () => {
  const {sidebar,setsidebar,submenu,setsubmenu}=useContext(Appcontext);

  return <aside className={`${sidebar?'sidebar-wrapper show':'sidebar-wrapper'}`}>
  <div className='sidebar'>
    <button className='close-btn' onClick={()=>{setsidebar(!sidebar)}}><FaTimes></FaTimes></button>
  <div className='sidebar-links'>
    {sublinks.map((elem,index)=>{
      const {page,links}= elem;
      return (
        <article key={index}>
          <h4>{page}</h4>
          <div className='sidebar-sublinks'>
          {
           links.map((elem)=> {
             const {label,icon,url}=elem;
             return <a href={url}>
               {icon}{label}
             </a> })
          }
          </div>
         
          
        </article>
      )
     

    })}
  </div>
 
  </div>

  </aside> 
}

export default Sidebar
