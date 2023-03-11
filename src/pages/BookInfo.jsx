import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id == +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function isBookInCart(){
    return cart.find(book => +book.id === +id)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link className="book__link" to="/books">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} className="book__selected--image" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    minus doloribus recusandae incidunt, quam qui, ipsam amet
                    maiores ad hic tenetur. Asperiores expedita autem neque
                    reiciendis dolore. Sequi, labore quidem!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    minus doloribus recusandae incidunt, quam qui, ipsam amet
                    maiores ad hic tenetur. Asperiores expedita autem neque
                    reiciendis dolore. Sequi, labore quidem!
                  </p>
                </div>
                {isBookInCart() ? (
                  <Link to="/cart" className="btn">
                    Check Out
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__slected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .sort((a, b) => b.rating - a.rating)
                .filter((book) => +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book books={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
