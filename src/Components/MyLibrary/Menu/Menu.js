import React from 'react';
import styles from "../MyLibrary.module.css";
import cx from "classnames";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({handleTheme, theme}) => {

    return (
        <div className = {  cx(styles.content, styles.menu)} id = {theme ? styles.lightDark: " "}>
            <Button  variant="secondary" size = "lg">My Books</Button>
            <Link to = "/addNewBook">
                <div>Add New Book</div>
            </Link>
            <hr />
            <div onClick = {handleTheme}>
                {theme ? <i className="fa fa-toggle-on"></i> : <i className="fa fa-toggle-off"></i>}
            </div>
            <i className="fa fa-toggle-off"></i>
            <i className="fa fa-th-list" aria-hidden="false"></i>
        </div>
    );
};

export default Menu;