import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



import Admin from "./pages/admin";
import Store from "./pages/store";
import Manufacture from "./pages/manufacture";



//store pages
import Manager from './manager-component/manager';
import Retailer from './manager-component/Retailer';
import Login from "./manager-component/Login";
import RetailerLogin from './manager-component/retailer-login';

// manager pages - Product
import InsertProduct from './manager-component/product-component/Insertproduct';
import ViewProduct from './manager-component/product-component/Viewproduct'
import UpdateProduct from './manager-component/product-component/Updateproduct'
import DeleteProduct from  './manager-component/product-component/Deleteproduct'

//manager pages - Sale data
import ViewSale from './manager-component/sale-component/Viewsale';
import InsertSale from './manager-component/sale-component/Insertsale';
import UpdateSale from './manager-component/sale-component/Updatesale';
import DeleteSale from './manager-component/sale-component/Deletesale';

//manager pages - Retailer
import AddRetailer from './manager-component/retailer-component/Addretailer';
import RemoveRetailer from './manager-component/retailer-component/Removeretailer';

import ManagerPage from "./pages/ManagerPage";
import OptionPage from "./pages/OptionPage";
import RetailerPage from "./pages/RetailerPage";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage.js";
import Default from "./pages/Default.js";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />

          <Route path="/ManagerPage" exact component={ManagerPage} />
          <Route path="/OptionPage" exact component={OptionPage} />
          <Route path="/RetailerPage" exact component={RetailerPage} />

           {/* Pages routes */}
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/manufacture" component={Manufacture}/>

          {/* Store routes*/}
          <Route exact path="/manager" component={Manager}/>
          <Route exact path="/retailer" component={Retailer}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/Retailer-login" component={RetailerLogin}/>


          {/* Manager- Product routes */}
          <Route exact path="/Insertproduct" component={InsertProduct}/>
          <Route exact path="/Viewproduct" component={ViewProduct}/>
          <Route exact path="/Deleteproduct" component={DeleteProduct}/>
          <Route exact path="/Updateproduct" component={UpdateProduct}/>

          {/* Manager- Sale routes */}
          <Route exact path="/Insertsale" component={InsertSale}/>
          <Route exact path="/Viewsale" component={ViewSale}/>
          <Route exact path="/Deletesale" component={DeleteSale}/>
          <Route exact path="/Updatesale" component={UpdateSale}/>

          {/* Manager - Retailer routes */}
          <Route exact path="/Addretailer" component={AddRetailer}/>
          <Route exact path="/Removeretailer" component={RemoveRetailer}/>

          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
