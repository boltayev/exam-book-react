import "./BooksBlock.scss"
import { Link } from "react-router-dom"


import Books from "../../../../images/book.png"
import Heart from "../../../../images/heard_white.png"

function BooksBlock(props){
    // const[bookImg, bookTitle, bookAuthor, bookCreatedAt, bookRate, bookLike] = props
    return(
        <div className="books-1">
          <div className="book-content">
              <div><img src={props.bookImg} alt="books" /></div>
            <div className="book_name">{props.bookTitle}</div>
            <span>{props.bookAuthor}, {props.bookCreatedAt}</span>
            <div className="number">
                <span>{props.bookRate}/5</span> 
                <img src={Heart} alt="heart" />
            </div>
            <div className="buttons">
                <Link to='/home/books' className="info">Info</Link>
                <button className="read">Read</button>
            </div>
          </div>
        </div>
    )
}

export default BooksBlock