import React, { useState, useContext } from 'react'
import sublinks from './data'

const Appcontext=React.createContext();

const Appprovider=({children})=>{
    const [sidebar,showsidebar]=useState(true);
    return <Appcontext.Provider>
    {children}
    </Appcontext.Provider>


}

// export {Appcontext,Appprovider} 