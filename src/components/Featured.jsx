import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

function Featured() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            featured <span className="purple">books</span>
          </h2>
          <div className="books">
            {books.sort((a , b) => b.rating - a.rating)
            .slice(0,4)
            .map((books) => <Book books={books} key={books.id}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
