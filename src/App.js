import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.scss';
import NotFound from './components/NotFound';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Checkout from './components/checkout/Checkout';
import Success from './components/checkout/Success';
import Cancel from './components/checkout/Cancel';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/success' component={Success} />
        <Route path='/canceled' component={Cancel} />
        <Route path='/product/:id' component={ProductPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
