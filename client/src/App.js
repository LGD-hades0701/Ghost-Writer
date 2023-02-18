import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

import './assets/css/common.css';
import './assets/css/header.css';
import './assets/css/home.css';
import './assets/css/sign.css';
import './assets/css/footer.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
