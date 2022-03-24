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
                    <Button className="mt-0" onClick={this.props.learnMore}>Learn More</Button>

                </Card>
                {/* <div className="card">
                    <div className="card-body row">
                        <div className="col-5">
                            <img src={this.props.cover} className="img"
                                height="200" />
                        </div>

                        <div className="col-7">
                            <h5 className="text-info">
                                {this.props.nama}
                            </h5>
                            <h6 className="text-dark">
                                ISBN : {this.props.isbn}
                            </h6>
                            <h6 className="text-dark">
                                Penulis: {this.props.penulis}
                            </h6>
                            <h6 className="text-dark">
                                Penerbit: {this.props.penerbit}
                            </h6>
                            <h6 className="text-danger">
                                Harga: Rp {this.props.harga}
                            </h6>

                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>

                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div> */}
                
            </div>
        )
    }
}
export default Kartu;