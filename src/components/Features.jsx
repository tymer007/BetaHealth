import FeatureCards from "./FeatureCards";

const Features = () => {
  return (
    <div className="feature-div">
      <hr className='article-border'/>

      <section className="features">
        <h2 className='feat-h2'>Features</h2>
        <p className='feat-p'>Discover our comprehensive services designed to enhance your health and well-being, brought to you by top medical professionals.
        </p>
        <div className="feature-list">
         <FeatureCards 
         image= "./images/consultation.jpg" 
         heading= "VIDEO CONSULTATION" 
         writing="Connect with top medical professionals for personalized advice and treatment plans from the comfort of your home." 
         view = "View More"/>
         
         <FeatureCards 
         image= "./images/Articles.jpg" 
         heading= "HEALTH RELATED ARTICLES" 
         writing="Discover our handpicked selection of detailed articles covering common medical conditions, wellness tips, and healthcare news." 
         view = "View More"/>

         <FeatureCards 
         image= "./images/Experts.jpg" 
         heading= "OUR MEDICAL EXPERTS" 
         writing="Learn about our team of dedicated professionals from various specialties ready to provide you with personalized advice." 
         view = "View More"/>
        </div>
      </section>
      <hr className='feat-border'/>
    </div>
  )
}

export default Features;
