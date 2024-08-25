import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const [api , setApi] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })

  const {id} = useParams()

  const navigate = useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDBjNWQ1OTc1MzcyZTQ4YWE0ZDdmZDFkYTUxODdlOCIsIm5iZiI6MTcyNDUwMTI1OC4wNzY1OSwic3ViIjoiNjZjOWNiYzBhM2E0MmNlMzYxMWQ1ZWE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BAzNv_KCK6baHivPPLxCFRvIJCvQar-twkxxrVtMlUg'
    }
  };
  
    useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApi(response.results[0]))
      .catch(err => console.error(err));

    },[])

  return (
    <div className='player'>

      <img src={back} onClick={()=>{navigate(-2)}} />

      <iframe width='90%' height="90%" src={`https://www.youtube.com/embed/${api.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{api.published_at.slice(0,10)}</p>
        <p>{api.name}</p>
        <p>{api.type}</p>

      </div>
    </div>
  )
}

export default Player
