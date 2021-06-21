import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer.component';
import Header from './components/header.component';
import Home from './components/home.component';
import Menu from './components/menu.component';
import Breakfast from './components/menu.breakfast.component';
import Dinner from './components/menu.dinner.component';
import Specials from './components/specials.component';
import About from './components/about.component';
import ContactUs from './components/contact-us.component';
import Order from './components/order.component';
import Sweets from './components/menu.sweets.component';
import Snacks from './components/menu.snacks.component';
import Drinks from './components/menu.drinks.comoponent';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu}></Route>
        <Route path='/menu/breakfast' component={Breakfast}></Route>
        <Route path='/menu/dinner' component={Dinner}></Route>
        <Route path='/menu/specials' component={Specials}></Route>
        <Route path='/menu/sweets' component={Sweets}></Route>
        <Route path='/menu/snacks' component={Snacks}></Route>
        <Route path='/menu/drinks' component={Drinks}></Route>
        <Route path='/about' component={About}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path='/order' component={Order}></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;


