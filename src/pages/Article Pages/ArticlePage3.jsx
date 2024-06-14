import React, { useEffect, useState } from 'react';
import { Share2, Calendar, User, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
// import Loader from '../components/Loader';
// import axios from 'axios';
import Footer from '../../components/Footer';


  const ArticlePage3 = () => {
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
              <h1 className="text-5xl font-bold mb-2">How Can Lyme Disease Last for Years?</h1>

              <div className="border-t border-gray-600 flex p-2 w-full justify-between">
                <div className='flex justify-around items-center '>

                  <img src="./images/Doctors profile image.jpg" className="w-10 h-10 rounded-md" />
                  <div className='flex justify-between items-center transition-all'>
                    <div className="leading-4">
                      <h4 className="font-semibold text-gray-500">Dr Fred James</h4>
                      <span className="text-sm text-gray-500">Famaily Medicine</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-around items-center text-gray-500'>June 14th, 2024 <Calendar className="w-5 h-5 ml-1" />
                </div>

              </div>


            </div>
            <img src="./images/Lice.png" alt="Article" className="mb-4 w-full h-auto object-cover" />

            <div className="prose"  />
            <p className='text-lg'>
            Lyme disease is a tick-borne illness caused by the bacterium *Borrelia burgdorferi*. While it
            is more commonly associated with regions like North America and Europe, it’s essential to
            be aware of its potential impact and understand its chronic nature. In Nigeria, where
            tick-borne diseases are not as prevalent, Lyme disease might seem like a distant concern.
            However, global travel and changing environmental conditions mean it's crucial to be
            informed about such diseases.

            </p>
            <h2 className=' text-base'>Understanding Lyme Disease</h2>
            <p className='text-lg'>
            Lyme disease is transmitted through the bite of an infected black-legged tick, commonly
            known as the deer tick. The disease manifests in stages, starting with early localized
            infection and potentially progressing to early disseminated and late disseminated stages if
            left untreated.
            </p>
            <h2 className=' text-base'>Symptoms of Lyme Disease:</h2>
            <p className='text-lg'>
            - Early Localized Stage: A characteristic "bull's-eye" rash (erythema migrans) at the site of
            the tick bite, flu-like symptoms such as fever, chills, headache, muscle and joint aches, and
            swollen lymph nodes.
            - Early Disseminated Stage: Multiple rashes, migrating pain in joints, heart palpitations, and
            neurological symptoms like facial palsy.
            - Late Disseminated Stage: Severe joint pain and swelling, chronic neurological complaints
            such as numbness, tingling, and memory problems.
            </p>
            <h2 className=' text-base'>Why Lyme Disease Can Last for Years</h2>
            <p className='text-lg'>
            1. Delayed Diagnosis and Treatment:
              - Early symptoms of Lyme disease can be nonspecific and easily mistaken for other
              illnesses, leading to delayed diagnosis. Without prompt antibiotic treatment, the bacteria
              can spread and establish a long-term presence in the body.
            2. Immune Evasion by the Bacteria:
              - Borrelia burgdorferi has the ability to evade the immune system. It can change its surface
              proteins, making it difficult for the immune system to detect and destroy it. This allows the
              bacteria to persist in the body for extended periods.
            3. Persistence of Bacteria
            </p>
            <h2 className=' text-base'>Conclusion</h2>
            <p className='text-lg'>
              Lyme disease, though rare in Nigeria, can last for years if not properly diagnosed and
              treated. Understanding the disease, recognizing the symptoms, and taking preventive measures are key to managing and preventing long-term complications. For those affected,
              seeking comprehensive medical care and adopting a holistic approach to health can help
              manage chronic symptoms and improve quality of life. Always consult with healthcare
              professionals for appropriate diagnosis and treatment.
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

  export default ArticlePage3;
