import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/homePage';
import {ProcessosListar} from './componentes/processosListar';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Header/>} />  
          <Route path='/processos/:clienteId' element={<ProcessosListar/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
