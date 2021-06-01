import React from 'react'
import Cocktail_List from '../Components/Cocktail_List'
import SearchForm from '../Components/SearchForm'
 
function Home() {
    return (
       <main className='main'>
       <SearchForm/>
       <Cocktail_List/>
       </main>
    )
}

export default Home
