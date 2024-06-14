import { useState } from 'react'
import React from 'react'
import './HomePage.css'
import Footer from './components/Footer'
import Features from './components/Features'
import Reviews from './components/Reviews'
import HomeHero from './components/HomeHero'
import Logo from './components/Logo'
import TopArticles from './components/TopArticles'
import TopArticle from './components/TopArticle'
import { Link } from 'react-router-dom'


const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='HomePage'>
      <header >
        <nav className='NavBar'>
          <Logo />
          <section>
            <ul className='desktop-navigation'>
              <li>Home</li>
              <li>Contact Us</li>
              <Link to="/SignUpReader"><li>Work With Us</li></Link>
              <Link to="/SignUpReader"><li className='signUp'> Sign up</li></Link>
              <Link to="/Login" ><li className='Login'><span>Login</span></li></Link>
            </ul>
            <div class={`bars ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <section class="bar transistion"></section>
              <section class="bar"></section>
              <section class="bar transistion"></section>
            </div>
          </section>

        </nav>
        {isMobileMenuOpen && (
          <div className="mobile-navigation open">
            <ul>
              <Link to="/SignUpReader"><li>Sign Up</li></Link>
              <Link to="/Login"><li>Login</li></Link>
              <li>Contact Us</li>
              <li>About Us</li>
              <Link to="/Login"><li>Work With Us</li></Link>
            </ul>
          </div>
        )}
      </header>
      <HomeHero />

      <TopArticle />


      {/* <section className="top-articles">
        <h2>Top Article Reads</h2>
        <div className="articles">
          <TopArticles
            img="./images/Pregnant.jpg"
            paragraph="Does taking antibiotics during pregnancy harm an unborn child?" />

          <TopArticles
            img="./images/drugs.jpg"
            paragraph="How to administer quick and effective first aid" />

          <TopArticles
            img="./images/Heart.jpg"
            paragraph="Everything to know about your heart health, myths and facts." />

          <TopArticles
            img="./images/Laptop.jpg"
            paragraph="What is the best antiseptic used to treat open wounds?" />

        </div>
        <p className="see-all">See all</p>
      </section> */}
      <Features />
      <Footer />
    </div>
  )
}

export default HomePage;

