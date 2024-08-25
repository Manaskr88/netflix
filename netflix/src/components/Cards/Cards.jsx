import React, { useEffect, useRef, useState } from 'react'
import './Cards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
const Cards = ({title ,  category }) => {

  const [api , setApi] = useState([])



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDBjNWQ1OTc1MzcyZTQ4YWE0ZDdmZDFkYTUxODdlOCIsIm5iZiI6MTcyNDUwMTI1OC4wNzY1OSwic3ViIjoiNjZjOWNiYzBhM2E0MmNlMzYxMWQ1ZWE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BAzNv_KCK6baHivPPLxCFRvIJCvQar-twkxxrVtMlUg'
    }
  };

  
  
 

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApi(response.results))
  .catch(err => console.error(err));


  

},[])

  return (
    <div className='cards'>

      <h2>{title?title : "Popular on Netflix"}</h2>

      <div  className="list" >

        {api.map((item, index) => {
          return (
            <Link to={`/player/${item.id}`} key={index} className="card" > 

              <img src={`https://image.tmdb.org/t/p/w500/`+item.backdrop_path} />
              <p>{item.original_title}</p>
            </Link>
          )
        })}
      </div>

    </div>
  )
}

export default Cards
