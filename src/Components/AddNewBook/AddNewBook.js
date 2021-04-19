import { Button, InputGroup  } from 'react-bootstrap';
import React, { useState } from 'react';
import styles1 from "./AddNewBook.module.css";



const AddNewBook = ({library, setLibrary}) => {

    const [book, setBook] = useState("")
    const [result, setResult] = useState([]);
    // const [apiKey, setApiKey] = useState("AIzaSyCPz4QKeBa5eygVDk5rPa1Aid_RHSLHfss");

    const handleChange = (e) => {
        setBook(e.target.value);
    }

    const getRequestedBookList = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`)
        .then(response => response.json())
        .then(data =>{
            setResult(data.items)
            console.log(data.items);
        })
            
    }


    const handleClick = () => {
        getRequestedBookList();
        // console.log(requiredData());    
    }

    const handleAddBook = (id) => {
        let index= result.findIndex((item) => item.id === id);
        let newBook = result[index];
        let updatedBookList = [...library];
        updatedBookList.push(newBook);
        console.log(library);
        setLibrary(updatedBookList);
        alert("Book added to your library");
    }

    return (
        <div className = {styles1.main}>
            <h1 className = "col-md-6 offset-4 my-3">Search Book Herex</h1>
            <InputGroup className="mb-2 my-2 col-md-6 offset-3">
                <input className = "form-control"
                    placeholder="Enter the book name"
                    onChange = {handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick = {handleClick}>Search</Button>
                </InputGroup.Append>
            </InputGroup>

            {result.length !== 0 ? 
            <div className = {styles1.allBooks}>
                {result.map((item, i) => (
                        <div key = {i} className ={styles1.block} onClick = {() => handleAddBook(item.id)}>
                            {item.volumeInfo.imageLinks ? 
                                <img src = {item.volumeInfo.imageLinks.thumbnail} alt = "book img" /> 
                                : <h3>Not Image Found</h3>
                            }
    
                            <div><b>Title:</b> {item.volumeInfo.title}</div>
                            <div><em>Authors:</em> {item.volumeInfo.authors}</div>
                        </div>
                    ))
                    
                }
            </div>
                 
                : null}
        </div>
    );
};

export default AddNewBook;