import React,{useEffect , useState}from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoem] = useState([])
  useEffect(() => {
    fetch('http://localhost:8004/poems')
    .then(r => r.json())
    .then(data => setPoem(data))
  }, [])
  // console.log(data)
 
  function handlePost(newPoem) {
    setPoem([...poems, newPoem])
  }
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm(!showForm)
  }


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}></button>
        {showForm ? <NewPoemForm handlePost={handlePost} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
