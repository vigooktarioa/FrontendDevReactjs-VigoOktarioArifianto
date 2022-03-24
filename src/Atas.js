import React from 'react';
import Utama from './utama';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Dropdown, MenuItem, Container, Card, Button } from 'react-bootstrap';
import './App.css';

class Atas extends React.Component {
    render() {
        return (
            
            <div className="m-5">

                <div className="m-5">
                    <div className="mt-3">
                        <h1 className="ms-5">Restaurants</h1>
                        <p className="ms-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu aliquet sem, quis laoreet sapien. Cras commodo elit ut eros ultricies dapibus. Nulla eget neque quis lacus auctor euismod ut a purus. Sed malesuada eleifend nulla non semper. Ut nisl justo, rutrum luctus tempor ac, viverra et ante. Mauris ut nisi elit. Aenean tincidunt turpis nec nibh posuere, in viverra quam pharetra.</p>
                    </div>
                    <div>
                        <hr>
                        </hr>
                            <td><p className="ms-5">Filter by :</p></td>
                            <td>
                            <div class="form-check ms-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Open Now
                                    </label>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="form-check ms-3">
                                    <Dropdown.Toggle variant="secondary" className="dropdown" id="dropdown-basic">
                                        Price
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">$$$$</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">$$$</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">$$</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">$</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            <td>
                                
                                    <Dropdown className="form-check ms-2">
                                        <Dropdown.Toggle variant="secondary" className="dropdown" id="dropdown-basic">
                                            Categories
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item value="A">Local</Dropdown.Item>
                                            <Dropdown.Item value="B">German</Dropdown.Item>
                                            <Dropdown.Item value="C">Seafood</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                            </td>
                        <hr className="mt-0">
                        </hr>
                    </div>
                </div>
            </div>
        );
        function showHide() {
            hideAll();
            var val = document.getElementById("dropdown").value;

            if (val === "A")
                document.getElementById("firstTextBoxId").style.display = 'block';
            else if (val === "B")
                document.getElementById("secondTextBoxId").style.display = 'block';
            else if (val === "C")
                document.getElementById("ThirdTextBoxId").style.display = 'block';
            else if (val === "D")
                document.getElementById("FourthTextBoxId").style.display = 'block';

        }


        function hideAll() {
            document.getElementById("firstTextBoxId").style.display = 'none';
            document.getElementById("secondTextBoxId").style.display = 'none';
            document.getElementById("thirdTextBoxId").style.display = 'none';
            document.getElementById("fourthTextBoxId").style.display = 'none';

        }
    }
}


export default Atas;