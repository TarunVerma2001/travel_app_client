import Home from './pages/home/home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Packages from './pages/packages/packages';
import AboutUs from './pages/aboutUs/aboutUs';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route path="/packages">
              <Packages />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
