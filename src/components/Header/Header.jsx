import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to your personal library of endless possibilities, where each search uncovers stories that inspire, characters that captivate, and ideas that ignite curiosity. Find your next read, whether it's a classic tale, a modern masterpiece, or an undiscovered gem just waiting for you.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header