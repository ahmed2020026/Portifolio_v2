import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Home } from './component/pages/Home';
import { lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ProjectsPage = lazy(() => import('./component/pages/Projects'));
const AboutPage = lazy(() => import('./component/pages/About'));
const ContactPage = lazy(() => import('./component/pages/Contact'));
const SkillsPage = lazy(() => import('./component/pages/Skills'));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Looding...</div>}>
          <header className='shadow-2xl fixed z-50 w-full bg-[#212222]'>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/skills' element={<SkillsPage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Suspense>
      </BrowserRouter>
    </>
  );
}