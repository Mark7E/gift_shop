import './style.css';
import Main from './components/Main';
import { Link, Switch, Route } from 'react-router-dom'
import ProductView from './components/ProductView';
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import ThankYou from './components/ThankYou';

function App() {
  return (


    <div className="view">
      <Switch>

        <Route path="/products/:id">
          <ProductView />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route exact path="/checkout">
          <CheckOut />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
          </Route>


        <Route path="/">
          <Main />
        </Route>

      </Switch>
    </div>

  );
}

export default App;


