import Footer from "./components/Content/Footer";
import NavBar from "./components/Content/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Profile from "./components/pages/Profile";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main className="mt-5">
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
