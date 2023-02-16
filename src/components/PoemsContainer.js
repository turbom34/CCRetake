import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  const poemCards = poems.map((poem)=>{
    return(
      <Poem key={poem.id} title={poem.title}  content={poem.content} author={poem.author}/>
    )
  })
  return (
    <div className="poems-container">
      {poemCards}
    </div>
  );
}

export default PoemsContainer;
