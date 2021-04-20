import React, { useState } from 'react';
import { InputGroup  } from 'react-bootstrap';
import styles from "../MyLibrary.module.css";
import cx from "classnames";

const Books = ({theme, library}) => {
    const [getBook, setGetBook] = useState("");
    const [searchList, setSearchList] = useState([])
    const handleChange = (e) => {
        setGetBook(e.target.value);
        
        const updatedList  = library.filter((item) => item.volumeInfo.title.toLowerCase().includes(getBook.toLocaleLowerCase()))
        setSearchList([...updatedList]);
    }
   
    
    return (
        <div className = {  cx(styles.content, styles.books)} id = {theme ? styles.lightDark: " "}>
            
            <InputGroup className="mb-2 my-2 col-md-8">
                <input className = "form-control"
                    placeholder="Search book from your library"
                    onChange = {handleChange}   
                />
            </InputGroup>
            {library.length === 0 ? <h3>No Book present please add books</h3>: <h4>Current books</h4>}
            <div className = {styles.allBooks}>
                {getBook === "" ? (
                    <>
                        {library.map((item, i) => (
                            <li key = {i} className ={styles.block}>
                                {item.volumeInfo.imageLinks ? 
                                    <img src = {item.volumeInfo.imageLinks.thumbnail} alt = "book img" /> 
                                    : <h3>Not Image Found</h3>
                                }
        
                                <div><b>Title:</b> {item.volumeInfo.title}</div>
                                <div><em>Authors:</em> {item.volumeInfo.authors}</div>
                            </li>
                        ))
                        
                        }
                    </>
                ) : (
                    <>
                        {searchList.map((item, i) => (
                            <li key = {i} className ={styles.block}>
                                {item.volumeInfo.imageLinks ? 
                                    <img src = {item.volumeInfo.imageLinks.thumbnail} alt = "book img" /> 
                                    : <h3>Not Image Found</h3>
                                }
        
                                <div><b>Title:</b> {item.volumeInfo.title}</div>
                                <div><em>Authors:</em> {item.volumeInfo.authors}</div>
                            </li>
                        ))
                        
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export default Books;