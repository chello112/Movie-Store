import { useState } from "react";
import "./App.css";
import Navbar from "../src/components/navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Renting from "./components/pages/Renting";
import Contact from "./components/pages/Contact";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Router>
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Navbar onShowCart={showCartHandler} />
        </CartProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/renting" element={<Renting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
