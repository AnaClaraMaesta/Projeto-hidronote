import { HashRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/homePage'

function App() {

  return (
    <>
      <HashRouter>
        <Route path='/' element={<Header/>}/>
      </HashRouter>
    </>
  )
}

export default App
