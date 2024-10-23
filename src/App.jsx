import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import BGMol from './components/BGMol/BGMol';
import FlashcardPage from './pages/FlashCardPage/FlashcardPage';
import QuizPage from './pages/QuizPage/QuizPage';
import MolViewerPage from './pages/MolViewerPage/MolViewerPage';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/flashcards" element={<FlashcardPage/>} /> 
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/3dmol" element={<MolViewerPage/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
