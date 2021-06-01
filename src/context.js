import React,{useState,useEffect,useContext} from 'react';
import {useCallback} from 'react';

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext=React.createContext();

const AppProvider=({children})=>{

    const[loading,setLoading]=useState(false);
    const[searchTerm,setSearchTerm]=useState('s');
    const[cocktails,setCockTails]=useState([]);
 
 



   const fetchDrinks= useCallback( async ()=>{
       setLoading(true);
        try {
            const response=await fetch(`${url}${searchTerm}`)
            const data=await response.json()
           const {drinks}=data;
           if(drinks){
const newCocktails=drinks.map((item)=>{
    const {idDrink,strAlcoholic,strDrink,strInstructions,strDrinkThumb,strGlass}=item;
    return{
        id:idDrink,
        info:strAlcoholic,
        name:strDrink,
        msg:strInstructions,
        img:strDrinkThumb,
        glass:strGlass


    }
})
setCockTails(newCocktails);
           }
           else{
               setCockTails([])
           }
           setLoading(false);
        } catch (error) {
          console.error(error)
          setLoading(false);
        }
   },[searchTerm])



    useEffect(() => {
       fetchDrinks();
    }, [searchTerm,fetchDrinks])

return <AppContext.Provider value={{
    loading,
    searchTerm,cocktails, setSearchTerm

}} >
    {children}
</AppContext.Provider>


    
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};