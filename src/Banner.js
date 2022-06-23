import React, {useState, useEffect } from 'react'
import './Banner.css'
import requests from './request'
import axios from './axios'

function Banner() {

const [movie, setMovie]= useState([])

 useEffect(() => {
   async function fetchData(){
     const request = await axios.get(requests.fetchNetFlixOriginals)

     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
     return request
   }
  fetchData()
 }, [])

 function truncateDesc(str, n){
   return str?.length > n ? str.substr(0, n-1)+ "...":str
 }

  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgrondPosition: "center center"
    }}>
    <div className='banner-contents'>
   <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name }</h1>
   <div className='banner-buttons'>
   <button className='banner-button'>Play</button>
   <button className='banner-button'>My List</button>
    </div>
    <p className='banner-description'>{truncateDesc(movie?.overview, 150)}</p>
    </div>
    <div className='banner-fade-bottom'>

    </div>
    </div>
  )
}

export default Banner