import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/homePage'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Header/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
