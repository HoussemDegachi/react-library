import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/Undraw_Books.svg";

function Cart({ books, quantity, removeFromCart }) {
  const [amount, setAmount] = useState(1);
  let price = 0;

  books.forEach((book) => {
    price += (book.salePrice || book.originalPrice) * book.quantity;
  });

  function changeAmount(value, book) {
    setAmount(value);
    quantity(value, book);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              {books.length == 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} className="cart__empty--img" />
                  <h2>You don't have any books in your cart</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
              <div className="cart__body">
                {books.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeFromCart(book.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          value={book.quantity}
                          onChange={(event) =>
                            changeAmount(event.target.value, book)
                          }
                          className="cart__input"
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {books.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>SubTotal</span>
                  <span>${(price * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(price * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${price.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("haven't gone arround to doing this :(")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
