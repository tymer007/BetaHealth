import React, { useEffect, useState } from 'react';
import { Share2, Calendar, User, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
// import Loader from '../components/Loader';
// import axios from 'axios';
import Footer from '../../components/Footer';


  const ArticlePage4 = () => {
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
              <h1 className="text-5xl font-bold mb-2">Quick andEffective First Aid: A Guide for
              Nigerians</h1>

              <div className="border-t border-gray-600 flex p-2 w-full justify-between">
                <div className='flex justify-around items-center '>

                  <img src="./images/Doctor 2.jpg" className="w-10 h-10 rounded-md" />
                  <div className='flex justify-between items-center transition-all'>
                    <div className="leading-4">
                      <h4 className="font-semibold text-gray-500">Dr Michael Hassan</h4>
                      <span className="text-sm text-gray-500">Famaily Medicine</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-around items-center text-gray-500'>June 14th, 2024 <Calendar className="w-5 h-5 ml-1" />
                </div>

              </div>


            </div>
            <img src="./images/drugs.jpg" alt="Article" className="mb-4 w-full h-auto object-cover" />

            <div className="prose"  />
            <p className='text-lg'>
              In Nigeria, emergencies can arise at any moment, whether from road accidents, workplace
              injuries, or common household mishaps. Being equipped with the knowledge to administer
              quick and effective first aid can make a critical difference in saving lives and minimizing the
              severity of injuries. This guide aims to provide Nigerians with essential first aid tips that can
              be applied in various situations.

            </p>
            <h2 className=' text-base'>Understanding  First Aid</h2>
            <p className='text-lg'>
              First aid refers to the initial care given to someone who has been injured or suddenly taken
              ill before professional medical help is available. The goal of first aid is to preserve life,
              prevent the condition from worsening, and promote recovery
            </p>
            <h2 className=' text-base'>Basic Principles of First Aid</h2>
            <p className='text-lg'>
                1. Assess the Situation: Ensure the scene is safe before approaching the injured person.
                  Look out for hazards like fire, electrical wires, or traffic.
                2. Stay Calm and Reassure the Victim: Keeping a calm demeanor helps to reassure the
                  injured person and allows you to think clearly.
                3. Call for Help: Contact emergency services immediately. In Nigeria, you can reach the
                  emergency ambulance service by dialing 112.
            </p>
            <h2 className=' text-base'>Common First Aid Procedures</h2>
            <p className='text-lg'>
                1. CPR (Cardiopulmonary Resuscitation)
                   When to Use: When the person is not breathing or has no pulse.
                    Steps:
                  - Ensure the person is lying on their back on a firm surface.
                  - Place your hands, one on top of the other, in the center of the chest.
                  - Press down hard and fast, at a rate of 100-120 compressions per minute.
                  - If trained, give rescue breaths after every 30 compressions.
                  2. Bleeding
                    When to Use: For cuts, wounds, or any situation where there is significant blood loss
                    Steps:
                    - Wear gloves if available to protect yourself.
                    - Apply direct pressure to the wound using a clean cloth or bandage.
                    - Elevate the injured limb above the heart level if possible.
                    - Keep applying pressure until the bleeding stops or help arrives.
                  3. Burns
                   When to Use: For thermal, chemical, or electrical burns.
                   Steps:
                   -Remove the source of the burn if it is safe to do so.
                   - Cool the burn under running water for at least 10 minutes.
                   - Cover the burn with a sterile, non-stick dressing or clean cloth.
                   - Do not apply creams or ointments.
                  4. Choking
                    When to Use: When someone is choking and cannot breathe or speak.
                    Steps:
                    - Ask if they are choking and if you can help.
                    - Stand behind the person and wrap your arms around their waist.
                    - Make a fist with one hand and place it just above their navel.
            </p>
            <h2 className=' text-base'>First Aid Kit Essentials</h2>
            <p className='text-lg'>
                Having a well-stocked first aid kit is crucial. Here are some items that every Nigerian
                household should have:
                - Sterile gloves
                - Bandages and dressings
                - Adhesive tape
                - Antiseptic wipes
                - Scissors and tweezers
                - Pain relievers (e.g., paracetamol)
                - A digital thermometer
                - A first aid manual
            </p>
            <h2 className=' text-base'>Conclusion</h2>
            <p className='text-lg'>
              Administering quick and effective first aid can significantly impact the outcome of
              emergencies. For Nigerians, understanding and applying basic first aid techniques can help
              save lives and reduce the severity of injuries. Always remember to call for professional
              medical help and never attempt to do more than you are trained to do. Equip yourself with
              a first aid kit and keep it easily accessible. By being prepared, you can make a difference
              when it matters most.

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

  export default ArticlePage4;
