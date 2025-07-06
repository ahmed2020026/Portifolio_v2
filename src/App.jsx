import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/Home';
import { Header } from './component/Header';
import { Footer } from './component/Footer';



export default function App() {
  return (
    <>
      <BrowserRouter>
          <header className='shadow-2xl fixed z-50 w-full bg-[#212222]'>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
      </BrowserRouter>
    </>
  );
}