import React from 'react'
import {useGlobalContext} from '../context'
import Cocktail from './Cocktail';
import Loading from './Loading';
 
function Cocktail_List() {
    const {loading,cocktails}=useGlobalContext();
 
     if(loading){
return <Loading/>
     }
     if(cocktails.length<1){
         return <div className='error-search'>
             <h1 className='no'>no match found..!</h1>
         </div>
     }
     return <section className='section'>
         <h1 className='section-heading'>Cocktails</h1>
         <div className='section-center'>
             {
                 cocktails.map((item)=>{
                    return <Cocktail key={item.id} {...item}/>
                 })
             }
         </div>
     </section>

    
}

export default Cocktail_List
