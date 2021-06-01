import React from 'react'
import {useParams,Link} from 'react-router-dom'
import Loading from '../Components/Loading';
import '../Components/Single.css'
function SingleCockTile() {
    const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const {id}=useParams();
   const [loading,setLoading] =React.useState(false);
   const[cocktail,setCocktail]=React.useState(null);
   const fetchData= async()=>{

try {
    setLoading(true);
    const response=await fetch(`${url}${id.substring(1,id.length)}`)
    const data=await response.json()
    // console.log(data);

    if(data.drinks){
const {strDrink:name,strCategory:category,strAlcoholic:info,strGlass:glass,strInstructions:instructions,
    strDrinkThumb:img,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=data.drinks[0];
    const  ingredient=[
        strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5
    ]
    const newCocktail={name,img,info,category,glass,instructions,ingredient}
    setCocktail(newCocktail);
    }
    else{
        setCocktail(null);
    }
setLoading(false);
} catch (error) {
    console.log(error)
}
 
   }
   React.useEffect(()=>{
     fetchData();
   },[id])

if(loading)
{
    return <Loading/>
}
if(!cocktail){
    return <h1>No details found.....!</h1>
}
const {name,img,info,category,glass,instructions,ingredient}=cocktail;

    return (
      <section className='display'>
       <Link to='/'>
           <button className='details btn'>Go back</button>
       </Link>
       <h1 className='data-name'>{name}</h1>
       <div className='clocktail-data'>
           <img className='image' src={img}></img>
           <div className='all-data'>
               <p className='data'><span className='data-span'>name:</span><span>{name}</span></p>
              
               <p className='data'><span className='data-span'>glass:</span> <span>{glass}</span></p>
               <p className='data'><span className='data-span'>info:</span><span>{info}</span></p>
              
              <p className='data'><span className='data-span'>category:</span><span>{category}</span></p>
              <p className='data'><span className='data-span'>instructions:</span><span>{instructions}</span></p>
              <p className='data'><span className='data-span'>ingredient:</span>
              {
                  ingredient.map((item,index)=>{
                      return item ?<span key={index} >{ item}</span>:null;
                  })
              }
                 
              </p>
           
              
           </div>
       </div>

      </section>
    )
}

export default SingleCockTile
