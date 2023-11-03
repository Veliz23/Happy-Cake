import {Routes, Route} from 'react-router-dom'

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home     from "./pages/Home";
import Contact  from './pages/Contact';
import NotFound from "./pages/NotFound";

export default function App(){
  return(
    <>
    <div className='containers bg-secondary'>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/contact"  element={<Contact />}/>
          <Route path="*"         element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}