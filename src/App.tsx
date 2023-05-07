import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
