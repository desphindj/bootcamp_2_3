import React from 'react'

const Content = () => {
    function dj()
  {
    const names=["badboy","idiot","uyyuv"];
    const key=Math.floor(Math.random()*3);
    return names[key];
  }
  return (
    <p className='para'>lets {dj()}uyy</p>
  )
}

export default Content
 