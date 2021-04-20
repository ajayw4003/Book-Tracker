import React from 'react';
import styles from "../MyLibrary.module.css";
import cx from "classnames";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

const Menu = ({handleTheme, theme}) => {

    return (
        <div className = {  cx(styles.content, styles.menu)} id = {theme ? styles.lightDark: " "}>
            <Button  variant="secondary" size = "lg">My Books</Button>
            <Link to = "/addNewBook">
                <div>Add New Book</div>
            </Link>
            <hr />
            <div onClick = {handleTheme} className = { cx(styles.themeButton)}>Theme
                {theme ? <ToggleOffIcon id = { cx(styles.toggle)}/> : <ToggleOnIcon  id = { cx(styles.toggle)}/>}
            </div>
            
           
        </div>
    );
};

export default Menu;