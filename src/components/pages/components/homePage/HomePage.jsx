import "./HomePage.scss"

import Navbar from "../navbar/Navbar"
import Search from "../search/Search"
import { useState, useEffect } from "react"
import BooksBlock from "../booksBlock/BooksBlock"
import getInfo from "../../../../servises/Service"


function HomePage(img, title, author, createdAt, rate, like){
    const [data, setData] = useState(null);
   


    useEffect(() => {
      getInfo('https://owabooks.vercel.app/db.json')
      .then((data) => {
        setData(data)
      })
    }, []);
    return(
        <main>
            <div className="main_container">
                <Navbar />
                <div className="books_block">
                    <Search />
                    <div className="books">
                        {
                        data?.map((element) => {
                            return <BooksBlock
                            bookImg = {element.img}
                            bookTitle = {element.title}
                            bookAuthor = {element.author}
                            bookDate = {element.createdAt}
                            bookRate = {element.rate}
                            bookLike = {element.like}
                            />
                            
                            
                        })
                    }
                        
                        </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage