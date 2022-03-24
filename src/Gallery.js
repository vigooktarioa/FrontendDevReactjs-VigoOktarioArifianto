import React, { Component } from "react";
import $ from "jquery";
import Kartu from "./Kartu.js"
import './App.css';


class ListGallery extends Component {
    constructor() {
        super()
        this.state = {
            resto: [
                {
                    nama: "Warung Ayam",
                    kategori: "Chicken",
                    harga: "$$$$",
                    bintang: "★★★★★",
                    status: "Open Now"
                },
                {
                    nama: "Warung Ikan",
                    kategori: "Seafood",
                    harga: "$$$$",
                    bintang: "★★★★☆",
                    status: "Open Now"
                },
                {
                    nama: "Streetfood",
                    kategori: "Streetfood",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Chinese Food",
                    kategori: "Chinese",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Japanese Food",
                    kategori: "Japanese",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "German Food",
                    kategori: "German",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Chinese Food",
                    kategori: "German",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Local Food",
                    kategori: "Local",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Local Food",
                    kategori: "Local",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Local Food",
                    kategori: "Local",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Local Food",
                    kategori: "Local",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                },
                {
                    nama: "Local Food",
                    kategori: "Local",
                    harga: "$",
                    bintang: "★★★☆☆",
                    status: "Open Now"
                }
            ],
            nama: "",
            kategori: "",
            harga: "",
            bintang: "",
            status: ""
        }
    }
    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">All Restaurant</h2>
                <div className="row mb-3">
                    {this.state.resto.map((item) => (
                        <Kartu
                            nama={item.nama}
                            kategori={item.kategori}
                            harga={item.harga}
                            bintang={item.bintang}
                            status={item.status}
                        />
                    ))}
                </div>
            </div>
        )
    }

    learnMore = (item) => {
        // menampilkan komponen modal
        $("#modal_buku").show()
        this.showState({
            nama:item.nama,
            kategori:item.kategori,
            harga:item.harga,
            bintang:item.bintang,
            status:item.status
        })
    }
}



export default ListGallery;