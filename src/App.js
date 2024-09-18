import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Product from './components/Product/Product';
import Quality from './components/Quality/Quality';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/quality' element={<Quality/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
