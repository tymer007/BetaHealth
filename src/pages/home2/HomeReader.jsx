import Logo from "../../components/Logo"
import './HomeReader.css'
import HomeHero from "../../components/HomeHero"
import Footer from "../../components/Footer"
import Features from "../../components/Features"
import Reviews from "../../components/Reviews"
import TopArticles from "../../components/TopArticles"
import { useState } from "react"
import { Link } from "react-router-dom"

const HomeReader = () => {
  const [isReaderMobileMenuOpen, setIsReaderMobileMenuOpen] = useState(false);

  const toggleReaderMobileMenu = () => {
    setIsReaderMobileMenuOpen(!isReaderMobileMenuOpen);
  };

  return (
    <div className='Home-reader'>
       <header >
        <nav className='NavBar-Reader'>
        <Logo />
        <section>
          <ul className='nav-linkReader'>
              <Link to="/SignUpExpert1"><li className='Join-Experts '> Join Our Experts</li></Link>
              <li className='Book-Consultation'><span>Book a Consultation</span></li>
          </ul>
          <div class={`bars-R ${isReaderMobileMenuOpen ? 'open' : ''}`} onClick={toggleReaderMobileMenu}>
                <section class="bar-R"></section>
                <section class="bar-R"></section>
                <section class="bar-R "></section>
          </div>
        </section>
        </nav>
        {isReaderMobileMenuOpen && (
          <div className="mobile-navigation open">
            <ul>
            <Link to="/SignUpExpert1"><li>Join Our Experts</li></Link>
              <li>Book Consultation</li>
              <li>Contact Us</li>
              <li>About Us</li>

            </ul>
          </div>
        )}
      </header>
      <HomeHero  />

      <section className="top-articles">
        <h2>Top Article Reads</h2>
        <div className="articles">
          <TopArticles 
           img="./images/Pregnant.jpg" 
           paragraph="Does taking antibiotics during pregnancy harm an unborn child?"/>

          <TopArticles  
          img="./images/drugs.jpg" 
          paragraph="How to administer quick and effective first aid"/>

          <TopArticles 
           img="./images/Heart.jpg" 
           paragraph="Everything to know about your heart health, myths and facts."/>

          <TopArticles  
          img="./images/Laptop.jpg" 
          paragraph="What is the best antiseptic used to treat open wounds?"/>

        </div>
        <p  className="see-all">See all</p>
      </section>

      <Features />
      <Footer />
    </div>
  )
}

export default HomeReader
