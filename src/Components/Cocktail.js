 
import { Link } from 'react-router-dom'
import './Cocktail.css'
 
function Cocktail({id,name,img,msg,glass,info}) {
 
    return (
      <article className='article'>
          <div className='image-container'>
              <img src={img} alt={name}/>
          </div>
          <div className='info'>
              <h3 className='name'>{name}</h3>
              <h4 className='glass'>{glass}</h4>
              <p className='information'>{info}</p>
               <Link to={`/cocktile/:${id}`}>
                   <button className='details'>details</button>
               </Link>
              
          </div>
      </article>
    )
}

export default Cocktail
