import React from 'react';
import styles from "../MyLibrary.module.css";
import cx from "classnames";

const Books = ({theme, library}) => {
    console.log(library);
    return (
        <div className = {  cx(styles.content, styles.books)} id = {theme ? styles.lightDark: " "}>
            <div className = {styles.allBooks}>
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
            </div>
        </div>
    );
};

export default Books;