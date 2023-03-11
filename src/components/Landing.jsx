import React from "react";
import { Link } from "react-router-dom";
import Undraw_Books from "../assets/Undraw_Books.svg";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Tunisia 's most awerded online library platform</h1>
            <h2>Find your dream book with <span className="purple">Library</span></h2>
            <Link to="/books" id="features">
                <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={Undraw_Books} />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;