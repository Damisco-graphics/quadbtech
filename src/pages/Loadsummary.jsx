
import React from 'react'
import {useEffect, useState} from 'react'
import '../css/App.css'
import '../css/body.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

import  'bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';




const Loadsummary=()=>{
  var {id}=useParams();
  const [summarys,setSummarys]=useState()
  
  const fetchSummary=()=>{
  
  axios
  .get (`https://api.tvmaze.com/search/shows?q=all#/?id=${id}`,{responseType: "json",
})
  .then((res)=>{    
    console.log(res.data.length)
  var hy =[];
  var gk=[]
  for (let i=0; i<res.data.length; i++){
    hy.push(res.data[i])
  }
  console.log(hy)
  for (let x=0; x<hy.length; x++){  
    //eslint-disable-next-line
  if (hy[x].show.id==id){
    gk.push(hy[x])     
        
  }else{
    console.log(gk)
    console.log("loading...")
  }
}
setSummarys(gk)
    

  })
  .catch ((error)=>console.log("error", error));

};

useEffect(()=>{

  fetchSummary()
// eslint-disable-next-line  
},[])
  return(
    <>
<div className='AppSummary'>
<h1 style={{marginTop: "3%",marginBottom:"3%" ,textAlign:"center", fontWeight:"bolder", textDecoration: "underline" }}>Summary of movie</h1>

<div className="CardsHolder">
{summarys && summarys.map((summarys)=>(
  <div id="summary" key={summarys.show.id}>
<p style={{marginLeft:"20%"}}><h1>Movie name:<br/></h1><a href={summarys.show.url} style={{textDecoration:"none"}}><h1><code style={{fontWeight: "bolder"}}>{summarys.show.name}</code></h1></a></p>

<p>{summarys.show.summary.replace(/<[^>]+>/gi,"")}</p>
  </div>
))}


</div>

<Link to="/" ><h2><Button>Go back to Home</Button></h2></Link>
</div>
    </>

  )
}
  

export default Loadsummary;