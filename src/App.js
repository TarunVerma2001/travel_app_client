import Home from './pages/home/home';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Packages from './pages/packages/packages';
import AboutUs from './pages/aboutUs/aboutUs';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import TourView from './components/tourView/tourView';
import Payment from './components/payment/payment';
// import Index from './components/googleMap/googleMap';
function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
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
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/tour/:touId">
              <TourView />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            {/* <Route path='/map'>
              <Index />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
