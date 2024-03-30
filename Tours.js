import React from 'react'
import Card from './Card'

function Tours({tours,removeTour}) {
  return (
    <div className='contain'>
        <div>
        <h2 className='title'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⭐⭐⭐ Plan with Manoj Singh Rajput ⭐⭐⭐</h2>
        </div>
        

<div className='cards'>
  {
    tours.map(  (tour) => {
        return <Card {...tour} removeTour={removeTour}></Card>
    })
  }
</div>

    </div>
  );
}

export default Tours