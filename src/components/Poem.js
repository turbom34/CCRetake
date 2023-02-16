import React, {useState} from "react";


function Poem({title, content, author}) {
  const [showRead, setShowRead] = useState(true);
  function handleClick() {
    setShowRead(showRead => !setShowRead);
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>-{author}</strong>
      </p>
      <button onClick={handleClick}>
     {showRead ? 'read' : 'markasread'}
      </button>
    </div>
  );
}

export default Poem;
