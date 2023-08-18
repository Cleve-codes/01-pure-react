import { useEffect } from "react";
import Header from "./Header"
import Main from "./Main";
import "./index.css";

function App() {

  useEffect(()=>{
     const getData = async () => {
         const res = await fetch(`http://localhost:8000/questions`);
         const data = await res.json();
         console.log(data)
       };

       getData();
  }, [])

  return (
    <div className="App">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
