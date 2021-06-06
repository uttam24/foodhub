import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import FoodRecipe from './FoodRecipe';
import Contact from './Contact';
import Error from './Error';
import Cart from './components/Cart';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import ProductsImageContext from './Global/ProductsImageContext';


function App() {
  return (
    <div className="maindiv">
    <ProductsContextProvider>
    <CartContextProvider>
    <ProductsImageContext>
    <Navigation/>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cart' exact component={ Cart} />
        <Route path='/product' exact component={ Product} />
        <Route path='/food-recipe' exact component={FoodRecipe} />
        <Route path='/contact' exact component={Contact} />
        <Route component={Error}/>

    </Switch>
     <Footer/>
     </ProductsImageContext>

      </CartContextProvider>
    </ProductsContextProvider>
    </div>
  );
}

export default App;
