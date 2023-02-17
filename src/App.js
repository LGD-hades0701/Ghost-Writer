import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';

import './assets/css/common.css';
import './assets/css/header.css';
import './assets/css/home.css';
import './assets/css/footer.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
