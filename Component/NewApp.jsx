import React, { useState } from 'react'
import Form from './Form'

export default function Newapp() {

  const[item,setItem] = useState([
    
    {id:1,img:
        'https://freepngimg.com/thumb/dress/31618-6-dress-photo-thumb.png' ,text:'Westen Outfit-1'
      },{id:2, img:'https://freepngimg.com/thumb/dress/33225-1-floral-dress-transparent-thumb.png',text:'Westen Outfit-2'},
      {id:3, img:'https://freepngimg.com/thumb/dress/33155-3-floral-dress-thumb.png',text:'Westen Dress-3'}
])
  return (
<div><h1>Form Validation in React</h1>
    
    <div className='container'>
      
      
        {item.map((ind, items)=>{
            return (
                <div >
            <img src={ind.img}/>
            <h1>{ind.text}</h1>
            
            <Form/>
            </div>
                
            )
        })}
</div>

    </div>
  )
}
