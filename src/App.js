import './App.css';
import ColorButtons from "./buttonmy";
import {useState} from "react";
import MyForm from "./myinput";
import MediaCard from "./mycard";
import TodoList from "./toDoList";

function App() {
  const [showContent, setShowContent] =useState(false)
  const [showInput, setShowInput] =useState(true)
  const handleButtonClick = () => {

    setShowContent(!showContent);
    setShowInput(!showInput);
  }
  return (
      <div>
        <div className="App">
          <ColorButtons onClick={handleButtonClick} />
        </div>
        <div className="box">
          {showContent &&<MediaCard/>}
          {showContent &&<MediaCard/>}
          {showContent &&<MediaCard/>}
        </div>
        <div className="center">
          {showInput && <MyForm/>}
        </div>
          <TodoList/>
      </div>
  );
}

export default App;
