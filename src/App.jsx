import { useState } from "react";
import "./App.css";
// import Card from "./components/card";
import Modal from "./components/modal";

function App() {
  // const dost = ["Anar", "Anar1", "Anar2"];
// const [count, setCount] = useState(1)

const[showModal,setShowModal]=useState(false)
  return (
    <div className="App">
  {/* // {dost.map((x)=><Card text={x}/>)} */}
{/* 
  <button onClick={() => setCount((count) => count + 1)}>
          increase
        </button>
        <button onClick={() => count>1&&setCount((count) => count - 1)}>
          decrease
        </button>
        <h1>{count}</h1> */}
          <button onClick={()=>setShowModal(true)}>Open Modal</button>
          {showModal&&<Modal setShowModal={setShowModal}/>}
        
    </div>
  );
}

export default App;
