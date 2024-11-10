import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BoundlessBooks</h2>
            <p className='fs-17'>Welcome to BookFinder, your go-to tool for discovering the books you need, love, or didn’t know existed. Whether you’re looking for essential study resources, inspiration for your next project, or simply a great story to unwind, BookFinder is designed with simplicity and ease in mind.</p>
            <h2 className='about-title fs-26 ls-1'>How It Works</h2>
            <p className='fs-17'>With BookFinder, you can search for any title, author, or subject, and instantly see details, including book summaries, authors, publication dates, and even cover images, all powered by the extensive Open Library database. Find what you need in seconds and save time for what matters most</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
