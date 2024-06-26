import React, { useEffect, useState } from 'react';
import { Share2, Calendar, User, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
// import Loader from '../components/Loader';
// import axios from 'axios';
import Footer from '../../components/Footer';


  const ArticlePage11 = () => {
    // const [article, setArticle] = useState(null);
    // const [relatedArticles, setRelatedArticles] = useState([]);

    // useEffect(() => {
    //   // Fetch the main article
    //   axios.get('https://health-4-u5fi.onrender.com/api/betta/article/666ab92f41901db162cbb33e')
    //     .then(response => {
    //       setArticle(response.data);
    //       // Fetch related articles based on some criteria, e.g., same category
    //       return axios.get(`/api/articles?category=${response.data.category}`);
    //     })
    //     .then(response => setRelatedArticles(response.data))
    //     .catch(error => console.error(error));
    // }, []);

    // if (!article) return <div><Loader /></div>;

    return (
      <div className="container mx-auto p-4 w-fit h-fit  ">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/5">
            <div className="mb-4">
              <h1 className="text-5xl font-bold mb-2">Everythingto Know About Your Heart Health:
              Myths and Facts for Nigerians</h1>

              <div className="border-t border-gray-600 flex p-2 w-full justify-between">
                <div className='flex justify-around items-center '>

                  <img src="./images/Doctors profile image.jpg" className="w-10 h-10 rounded-md" />
                  <div className='flex justify-between items-center transition-all'>
                    <div className="leading-4">
                      <h4 className="font-semibold text-gray-500">Dr Jane David</h4>
                      <span className="text-sm text-gray-500">Cardiologist</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-around items-center text-gray-500'>{new Date().getDate()}  <Calendar className="w-5 h-5 ml-1" />
                </div>

              </div>


            </div>
            <img src="./images/Pregnant.jpg" alt="Article" className="mb-4 w-full h-auto object-cover" />

            <div className="prose"  />
            <p className='text-base'>
              Pregnancy is a time of great joy and anticipation, but it also brings a heightened sense of responsibility, particularly when it comes to medication use. Dr. Sarah, a renowned obstetrician, emphasizes the importance of understanding which medications are safe during pregnancy and which should be avoided to protect the developing baby.
            </p>
            <h2 className=' text-base'>Understanding the Risks</h2>
            <p>
              Certain medications can pose risks to the unborn child, including congenital disabilities and complications. It’s estimated that about 90% of pregnant individuals in the United States use over-the-counter (OTC) medication during their pregnancies, and 70% take prescription medication. The Food and Drug Administration (FDA) has a classification system that provides a general overview of the safety of drugs during pregnancy and lactation.
            </p>
            <h2>Safe Medications</h2>
            <p>
              Most commonly used medications are safe for a limited time during pregnancy, but healthcare providers always recommend checking before taking any medication. For allergies, medications like Chlorpheniramine and Atarax (hydroxyzine) are considered safe. For cold and flu, saline nasal drops, Tylenol (acetaminophen), and Mucinex (guaifenesin) are among the safe options.
            </p>
            <h2>Medications to Avoid</h2>
            <p>
              It’s crucial to avoid long-acting or sustained-released types of cold or flu medications. For constipation, which is common during pregnancy due to hormonal changes, increasing water and fiber intake is recommended before turning to medications.
            </p>
            <h2>The Bottom Line</h2>
            <p>
              No medication is 100% safe, but some are safer than others. The principles of prescribing in pregnancy include using the lowest effective dose for the shortest possible time and choosing medications due to the lack of information on their use in pregnant women. Dr. Sarah’s advice is clear: consult with a healthcare provider before taking any medication during pregnancy to ensure the safety of the unborn child.
            </p>
          </div>

          <div className="w-full h-full bg-customDark 
rounded-lg lg:w-1/5 lg:ml-4 mt-4 lg:mt-0 p-2">
            <div className="hidden lg:block text-center">
              <h2 className="text-xl font-bold m-5  text-white">Related Articles</h2>
              {/* Example of Related Articles */}
              <div className="mb-4 items-center">


                <img src="./images/Cancer img.jpg" alt="Related Article" className="mb-2 w-full text-xl  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange"> There is a common misconception that cancer is solely a
                modern disease caused by man-made chemicals.</a>
              </div>
              {/* Repeat for other related articles */}
              <div className="mb-4 items-center">


                <img src="./images/Heart.jpg" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">Heart health is a crucial aspect of overall well-being, yet it is often misunderstood and
                surrounded by myths.</a>
              </div>

              <div className="mb-4 items-center">


                <img src="./images/drugs.jpg" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a  className="text-white font-semibold hover:underline hover:text-customOrange">. Being equipped with the knowledge to administer
                quick and effective first aid can make a critical difference in saving lives and minimizing the
                severity of injuries.</a>
              </div>
            </div>
          </div>
        </div>

        <div className='font-bold text-gray-500 mt-4'>Share this Article</div>

        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Twitter className="w-5 h-5" /></a>
          {/* Other share icons */}
        </div>
        <Footer />
      </div>
      
    );
  };

  export default ArticlePage11;
