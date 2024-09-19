import React from 'react';  
import {Component} from 'react'
import Header from '../Header'
import './index.css'
class Home extends Component {

    render(){
        console.log("Home component is rendering");
        return(
           <>
           <Header />
            <div className="banner-container">
            <div className='banner-content-container'>
                <h1 className="banner-heading">Book Store</h1>
                <p className="banner-text">Description about the book store</p>
                <p className='banner-text'>Second description!!!</p>
                <button className="explore-button">Explore Books</button>
           
            </div>
            </div>
            </>
        )
    }

}

export default Home