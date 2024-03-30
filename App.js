import React from "react";
import data from "./data";
import Tours from "./components/Tours";
import { useState } from "react";

const App = () => {

const [tours,setTours]=useState(data);

function removeTour(id)
{
  const newTours= tours.filter(tour=>tour.id!=id);
setTours(newTours);
}

if (tours.length===0) {
  return(
    <div className="refresh">
<button onClick={()=> setTours(data)}>
  Refresh
</button>
    </div>  
  )
}
  return (
 <div>
  
  <Tours tours={tours} removeTour={removeTour} >  {/* passed as a prop */}

  </Tours>
 </div>
  );
};

export default App;
  