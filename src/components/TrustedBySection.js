import React from 'react';
import './TrustedBySection.css';

const TrustedBySection = () => {
  const companies = [
    { name: "Volkswagen", logo: "https://business.udemy.com/wp-content/uploads/2023/11/volkswagen-logo-11-2023.png" },
    { name: "Samsung", logo: "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" },
    { name: "Cisco", logo: "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" },
    { name: "Vimeo", logo: "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg"  },
    { name: "P&G", logo: "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg"  },
    { name: "Hewlett Packard Enterprise", logo: "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg" },
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <p className="trusted-text">
          Trusted by over 17,000 companies and millions of learners around the world
        </p>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;