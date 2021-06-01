import React from 'react'
import {useGlobalContext} from '../context'
 
function SearchForm() {
    const myRef=React.useRef('');
    const {setSearchTerm} =useGlobalContext();
 React.useEffect(() => {
 myRef.current.focus();
 }, [])

const handelSubmit=(e)=>{
    e.preventDefault();
}
    const search=()=>{
setSearchTerm(myRef.current.value);
    }
    return (
     <section className='search'>
         <form className='search-form' onSubmit={handelSubmit}>
             <div className='form-control'>
             <label htmlFor='name'>Search your favorite cocktail</label>
             <input type='text' onChange={search} ref={myRef}></input>
             </div>
           
         </form>
     </section>
    )
}

export default SearchForm
