import React from "react";
import "./Article.css";
import Footer from "../../components/Footer";

const ArticlePage2 = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#digest">Digest</a>
          <a href="#book">Book a consultation</a>
        </nav>
      </header>

      <div className="content-wrapper">
        <main className="main-content">
          <div className="article">
            <h1>Safeguarding the Unborn: Navigating Medication Use During Pregnancy</h1>
            <div className="author-date">
              <span className="author">Dr Sarah</span>
              <span className="date">June 8th, 2024</span>
            </div>
            <img
              src="path_to_image"
              alt="Pregnant woman having ultrasound"
              className="article-image"
            />
            <p>
              Pregnancy is a time of great joy and anticipation, but it also brings a heightened sense of responsibility, particularly when it comes to medication use. Dr. Sarah, a renowned obstetrician, emphasizes the importance of understanding which medications are safe during pregnancy and which should be avoided to protect the developing baby.
            </p>
            <h2>Understanding the Risks</h2>
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
        </main>

        <aside className="sidebar">
          <div className="related-articles">
            <h3>Related Articles</h3>
            <ul>
              <li>What type of medication should I avoid?</li>
              <li>What type of medication should I avoid?</li>
              <li>What type of medication should I avoid?</li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
      
    </div>
  );
};

export default ArticlePage2;
