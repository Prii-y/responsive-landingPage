import React, { useState, useRef, useEffect, useContext } from 'react'
import { Appcontext } from './App'

const Submenu = ({arr}) => {
   const {submenu,setsubmenu}=useContext(Appcontext);
  console.log(arr);
  const {url,icon,label}=arr;
  return <aside>
    <div >
      {
        arr.map((elem)=>{
        const {url,icon,label}=elem;
        return  <a href={url}>
          {icon} {label}
              </a> 
              }
        )}
      
    </div>
  </aside>
}

export default Submenu

// {
//   links.map((elem)=>{ 
//   const { url, icon, label }=elem;
//   return <a>{icon}{label}</a>
//   })
//   }