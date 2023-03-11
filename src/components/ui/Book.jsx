import React, { useState , useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

function Book({ books }) {
  const [img , setImage] = useState()
  const mountedRef = useRef(true)

  useEffect(() => {
    const image = new Image
    image.src = books.url
    image.onload = () =>{
      if(mountedRef.current){
      setImage(image)
      }
    }
    return () => {
      mountedRef.current = false
    }
  })



  return (
    <div className="book">
    {
      img ? (
        <>
        <Link to={"/books/"+books.id}>
        <figure className="book__img--wrapper">
          <img src={books.url} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={"/books/"+books.id} className="book__title--link">
          {books.title}
        </Link>
      </div>
      <Rating rating={books.rating} />
      <Price originalPrice={books.originalPrice} salePrice={books.salePrice}/>
      </>
      ) :
      (
        <>
        <div className="book__img--skeleton"></div>
        <div className="skeleton book__title--skeleton"></div>
        <div className="skeleton book__rating--skeleton"></div>
        <div className="skeleton book__price--skeleton"></div>
        </>
      )
    }
    </div>
  );
}

export default Book;
