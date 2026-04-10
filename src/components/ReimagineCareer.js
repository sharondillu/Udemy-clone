import React from 'react';
import './ReimagineCareer.css';

const ReimagineCareer = () => {
  const accelerators = [
    {
      id: 1,
      title: "Cloud Engineer",
      image: "https://s.udemycdn.com/career-academies/careers/cloud-engineer/cloud-engineer-person.png" ,
      rating: 4.7,
      ratingsCount: "324K",
      hours: "29.1",
      bgColor: "#15803d"
    },
    {
      id: 2,
      title: "Data Scientist",
      image: "https://s.udemycdn.com/career-academies/careers/data-scientist/data-scientist-person.png" ,
      ratingsCount: "226K",
      hours: "47.1",
      bgColor: "#7e22ce"
    },
    {
      id: 3,
      title: "Digital Marketer",
      image: "https://s.udemycdn.com/career-academies/careers/digital-marketer/digital-marketer-hero.png" ,
      rating: 4.5,
      ratingsCount: "3.9K",
      hours: "28.4",
      bgColor: "#6b21a8"
    }
  ];
  

  const handleAllAccelerators = () => {
    alert("Showing All Career Accelerators");
    // navigate('/career-accelerators');
  };

  return (
    <section className="reimagine-section">
      <div className="container">
        <div className="reimagine-header">
          <h2 className="reimagine-title">Ready to reimagine your career?</h2>
          <p className="reimagine-subtitle">
            Get the skills and real-world experience employers want with Career Accelerators.
          </p>
        </div>

        <div className="accelerators-grid">
          {accelerators.map((item) => (
            <div key={item.id} className="accelerator-card">
              <div 
                className="card-image" 
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="card-image-inner">
                <img src={item.image} alt={item.title} />
              </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-meta">
                <div className="meta-box rating">★ {item.rating}</div>
                <div className="meta-box">{item.ratingsCount} ratings</div>
               <div className="meta-box">{item.hours} total hours</div>
              </div>  
              </div>
            </div>
          ))}
        </div>

        <div className="all-link">
          <button 
            className="all-career-btn"
            onClick={handleAllAccelerators}
          >
            All Career Accelerators → 
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReimagineCareer;