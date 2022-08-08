
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { AppNavbar } from './components/navbar/AppNavbar'
import { Index } from './pages/Index'


function App() {

  return (
      <>
        <AppNavbar />
         <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </>   
  )
}

export default App
