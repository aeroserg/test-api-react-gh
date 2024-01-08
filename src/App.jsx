import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Add from './components/Add';
import Settings from './components/Settings';
import './App.css'

function App() {

  return (
    <Router basename='/'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add/" element={<Add />} />
        <Route exact path="/analytics/" element={<Analytics />} />
        <Route exact path="/settings/" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
