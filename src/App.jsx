import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  let booksQuantity = 0
  cart.forEach((item) => {
    booksQuantity += item.quantity
  })

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeFromCart(book){
    setCart(cart.filter((item) => {
      return item.id !== book && item
    }))
  }

  function getQuantity(value, book) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +value } : item
      )
    );
  }

  return (
    <Router>
      <div className="App">
        <Nav quantity={booksQuantity}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => <Cart books={cart} removeFromCart={removeFromCart} quantity={getQuantity} />}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
