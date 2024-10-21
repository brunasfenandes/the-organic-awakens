import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import BGMol from './components/BGMol/BGMol';

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound/>}>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Header />
      <BGMol/>
    </>
  )
}

export default App
