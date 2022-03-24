import React from 'react'

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';
import './App.css';


class Test extends React.Component{
    render(){
        return(
            <div>
                <div className="loadMore">
                <center><button className="btn btn-primary">Load More</button></center>
                </div>
            </div>
        )
    }
}

export default Test;