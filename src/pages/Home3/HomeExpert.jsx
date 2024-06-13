import './HomeExpert.css'
import TopArticles from '../../components/TopArticles';
import HomeHero from "../../components/HomeHero"
import Footer from "../../components/Footer"
import Features from "../../components/Features"
import Reviews from "../../components/Reviews"
import Logo from "../../components/Logo"


const HomeExpert = () => {
  return (
    <div className='Home-Expert'>
       <header >
        <nav className='nav-Expert'>
        <Logo />
          <p className='Read-Articles '> Read Articles</p>
        </nav>
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

export default HomeExpert;
