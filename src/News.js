import React from 'react'

export default function News({data}) {
  return (
    <>
    <div className='container my-3'>
  <div className='row'>
    {
      data.map((value,index)=>{
        return(
          <div className='col-lg-3 col-sm-6 my-3'>
              
    <div className="card text-centre bg-dark" style={{width: "18 rem"}}>
  <img className="card-img-top" src={value.urlToImage} alt="Card image cap"/>
  <div className="card-body">
      
    <h5 className="card-title  "style={{color: "white"}}>{value.title}</h5>
    
    <p className="card-text" style={{color: "white"}}>$ {value.description}
    </p>
    <a href={value.url} class="btn btn-info">More</a>
    
  </div>
</div>
    </div>
    
        )
      })
    }
  </div> 
</div>
  
    
      
    </>
  )
}
