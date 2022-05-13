import React, { useEffect, useState } from 'react'
import axios from 'axios'
import News from './News'
import "./App.css"
export default function App() {
  const[text,setText]=useState("")
  const [news,setNews]=useState([])

  const chnageText=(e)=>{
    setText(e.target.value)
  }

  const fecthNews=async()=>{
   let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${text}&apiKey=64b2de7a16b9447f9ef73ac54d1cb665`)
    setNews( response.data.articles)
    setText("")
  }
  const getNewsRequest=()=>{
    setText("general")
    
  }
  useEffect(()=>{
    getNewsRequest();
  },[]
       );
  return (
    <>
     <h2><span class="text">NEWS</span></h2>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-9'>
          <div class="input-group mb-3 ">
  <input type="text" class="form-control" placeholder="Enter Category(general,science,health,business..." aria-label="Recipient's username" value={text} onChange={chnageText} aria-describedby="button-addon2"/>
  <button class="btn btn-outline-primary" onClick={fecthNews} type="button" id="button-addon2">Get News</button>
</div>
          </div>
        </div>
    
</div>
<News data={news}/>
    </>
  )
}
