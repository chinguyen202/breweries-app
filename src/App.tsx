import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import About from './components/About';

export const data = [
  {
    id: '5128df48-79fc-4f0f-8b52-d06be54d0cec',
    name: '(405) Brewing Co',
    brewery_type: 'micro',
    address_1: '1716 Topeka St',
    address_2: null,
    address_3: null,
    city: 'Norman',
    state_province: 'Oklahoma',
    postal_code: '73069-8224',
    country: 'United States',
    longitude: '-97.46818222',
    latitude: '35.25738891',
    phone: '4058160490',
    website_url: 'http://www.405brewing.com',
    state: 'Oklahoma',
    street: '1716 Topeka St',
  },
  {
    id: '9c5a66c8-cc13-416f-a5d9-0a769c87d318',
    name: '(512) Brewing Co',
    brewery_type: 'micro',
    address_1: '407 Radam Ln Ste F200',
    address_2: null,
    address_3: null,
    city: 'Austin',
    state_province: 'Texas',
    postal_code: '78745-1197',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5129211545',
    website_url: 'http://www.512brewing.com',
    state: 'Texas',
    street: '407 Radam Ln Ste F200',
  },
  {
    id: 'ef970757-fe42-416f-931d-722451f1f59c',
    name: '10 Barrel Brewing Co',
    brewery_type: 'large',
    address_1: '1501 E St',
    address_2: null,
    address_3: null,
    city: 'San Diego',
    state_province: 'California',
    postal_code: '92101-6618',
    country: 'United States',
    longitude: '-117.129593',
    latitude: '32.714813',
    phone: '6195782311',
    website_url: 'http://10barrel.com',
    state: 'California',
    street: '1501 E St',
  },
  {
    id: '6d14b220-8926-4521-8d19-b98a2d6ec3db',
    name: '10 Barrel Brewing Co',
    brewery_type: 'large',
    address_1: '62970 18th St',
    address_2: null,
    address_3: null,
    city: 'Bend',
    state_province: 'Oregon',
    postal_code: '97701-9847',
    country: 'United States',
    longitude: '-121.281706',
    latitude: '44.08683531',
    phone: '5415851007',
    website_url: 'http://www.10barrel.com',
    state: 'Oregon',
    street: '62970 18th St',
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/detail/:id" element={<Detail company={data[0]} />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
