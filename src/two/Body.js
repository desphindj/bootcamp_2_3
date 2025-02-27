import React from 'react'

const Body = () => {
    function dj()
    {
       const name=["vicky","thurgesh","siddiq","sai","sid"]
       const a=Math.floor(Math.random()*5);
       return name[a];
    }
  return (
    <div>
        <p>Student Names <span style={{color:'blue'}}>{dj()}</span>  </p>
        
        
    </div>
  )
}

export default Body
