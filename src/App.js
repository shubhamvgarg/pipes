import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Product from './components/Product/Product';
import Quality from './components/Quality/Quality';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/quality' element={<Quality/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
