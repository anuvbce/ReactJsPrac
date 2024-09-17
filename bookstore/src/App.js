import { Component } from 'react';
import React from 'react';  
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import BookDetails from './components/BookDetails';
import BookList from './components/BookList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import SearchInput from './components/SearchInput'
 
class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/search-input" element={<SearchInput />} />

        </Routes>
      </BrowserRouter>
    )

  }
}

export default App;
