//import './App.css';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import Navbar from './Navbar';
import './Navbar.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>  
      <div >
        <Navbar/>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/pricing" component={Pricing} />
           <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
