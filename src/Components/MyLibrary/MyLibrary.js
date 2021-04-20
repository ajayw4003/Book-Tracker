import React, { useState } from 'react';
import styles from "./MyLibrary.module.css";
import cx from "classnames";
import Menu from "./Menu/Menu";
import Books from "./Books/Books";

const MyLibrary = ({library}) => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        console.log("i am clicked")
       setTheme(!theme);
    }
    return (
        <div  className = { cx(theme ? styles.dark : styles.light)}>
            <h1>MyLibrary</h1>
            <div className = {library.length === 0 ? styles.container2 : styles.container1}>
                <Menu 
                    handleTheme = {handleTheme} 
                    theme ={theme} 
                />
                
                <div 
                    className = {  cx(styles.content, styles.topBar)} 
                    id = {theme ? styles.lightDark: " "}>
                </div>
                
                <Books theme = {theme} library = {library} />
            </div>
        </div>
    );
};

export default MyLibrary;