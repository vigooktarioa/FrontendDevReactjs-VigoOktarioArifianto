import React from "react"
import './App.css';
import {Card, Button } from 'react-bootstrap';

class Kartu extends React.Component {
    render() {
        return (
            
            <div className="col ms-3 mb-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" />
                    <Card.Body>
                        <div>
                            
                            <div className="d-flex flex-row "><h5>{this.props.nama}</h5></div>
                            <div className="d-flex flex-row"><h3>{this.props.bintang}</h3></div>
                            <div className="d-flex flex-row mt-3"><p className="spaceright cardBottom">{this.props.kategori}</p>
                                <p className="spaceleft cardBottom">{this.props.status}</p></div>
                            
                        </div>
                    </Card.Body>
                    <Button className="mt-0" onClick={this.props.learnMore}>LEARN MORE</Button>

                </Card>
                
            </div>
        )
    }
}
export default Kartu;