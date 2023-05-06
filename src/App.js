import './App.css';
import ColorButtons from "./buttonmy";
import {useState} from "react";
import MyForm from "./myinput";
import MediaCard from "./mycard";
import TodoList from "./toDoList";
import LoginButton from "./login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuApi from "./Components/ApiMenu";

function App() {
    const [showContent, setShowContent] = useState(false)
    const [showInput, setShowInput] = useState(true)
    const handleButtonClick = () => {

        setShowContent(!showContent);
        setShowInput(!showInput);
    }
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/gallery">My Gallery</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={
                        <div>
                            <div className="App">
                                <ColorButtons onClick={handleButtonClick} />
                            </div>
                            <div className="box">
                                {showContent && <MediaCard />}
                                {showContent && <MediaCard />}
                                {showContent && <MediaCard />}
                            </div>
                            <div className="center">
                                {showInput && <MyForm />}
                            </div>
                            <TodoList />
                            <LoginButton />
                        </div>
                    } />
                    <Route path="/gallery" element={<MenuApi />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
