import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Routes
import Navigation from './routes/Navigation/navigation.routes';
import Home from './routes/Home/home.route';
import About from './routes/About/about.route';
import Projects from './routes/Projects/projects.route';
import Contact from './routes/Contact/contact.route';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Navigation />}>
            <Route index='true' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
