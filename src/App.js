import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './pages/portfolio/Portfolio';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Portfolio />} />
    </Routes>
  </Router>
  );
};

export default App;
