import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/home' element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;
