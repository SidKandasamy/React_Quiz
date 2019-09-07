import React from 'react';

import Multiplier from './Multiplier'
import Evenclicks from './Evenclicks'
import Count from  './Count'
import Hideme from './Hideme'
import Minimumlength from './Minimumlength'

function App() {
  return (
    
    <>
      
      <h1 class="text-muted">My quiz</h1>
      <Multiplier 

      x={5}  y={7}

      />

      <Evenclicks/>

      <Count step={5} />
      <Hideme> blah blah blah</Hideme>

    <Minimumlength length ={30}/>
   
    </>
  );
}

export default App;
