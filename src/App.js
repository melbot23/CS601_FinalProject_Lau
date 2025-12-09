import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Writing from './components/Writing';
import Photography from './components/Photography';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route to each component (page) of the app */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="writing" element={<Writing />}/>
            <Route path="photography" element={<Photography />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
