import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import LoginBus from '../pages/LoginBus';
import RegisterBaseDatos from '../pages/RegisterBaseDatos';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/LoginBus" element={<LoginBus/>} />
                <Route path="/RegisterBaseDatos" element={<RegisterBaseDatos/>}/>
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>   
     );
}

export default App;