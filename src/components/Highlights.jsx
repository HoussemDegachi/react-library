import React from 'react'
import Highlight from './ui/Highlight'

function Highlights() {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight logo="bolt" title="easy and quick" para="Get access to the book you purchased instantly" />
                    <Highlight logo="book-open" title="10,000+ Books" para="Library has books in all your favorite categories" />
                    <Highlight logo="tags" title="Affordable" para="Get your hands on popular books for as little as 10$" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights