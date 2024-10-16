import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header'
import NotFound from './pages/NotFoundPage/NotFoundPage'

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route>

          </Route>
        </Routes>
      </BrowserRouter> */}
      <Header />
      {/* <NotFound/> */}
    </>
  )
}

export default App
