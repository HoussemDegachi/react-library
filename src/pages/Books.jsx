import React , {useState} from 'react'
import Book from '../components/ui/Book'

function Books({books: initialBook}) {
    const [books , setBooks] = useState(initialBook);

    function filterBook(filter){
        if(filter === 'LOW_TO_HIGH'){
            setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice) ))
        }else if(filter === 'HIGH_TO_LOW'){
            setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice) ))
        }else if(filter === 'RATING'){
            setBooks(books.slice().sort((a, b) => b.rating - a.rating ))
        }
    }
  return (
    <div className="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">
                                All Books
                            </h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBook(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price , Low To High</option>
                                <option value="HIGH_TO_LOW">Price , High To Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map((books) => (<Book  books={books} key={books.id} />))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Books