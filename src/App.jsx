import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles.jsx';

import Home from './assets/pages/Home.jsx';
import Analytics from './assets/pages/Analytics.jsx';
import Add from './assets/pages/Add.jsx';
import Settings from './assets/pages/Settings.jsx';
import './App.css'

function App() {

  return (
<>
<GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add/" element={<Add />} />
        <Route exact path="/analytics/" element={<Analytics />} />
        <Route exact path="/settings/" element={<Settings />} />
      </Routes>
</>
  );
}

export default App;
