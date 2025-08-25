
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  

  return (

   <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Navbar />} />
    
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
