import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPages from './pages/IndexPages'
import Login from './pages/Login'
import Layouts from './Layouts'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import Eventos from './pages/Eventos'
import Evento from './pages/Eventos'

axios.defaults.baseURL ="http://localhost:4000"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layouts/>}>
        <Route index element={<IndexPages/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/eve' element={<Eventos/>}/>
        <Route path='/eventos' element={<Evento/>}/>
      </Route>   
      
    </Routes>
  
  )
}

export default App
