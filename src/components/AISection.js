import React from 'react';
import './AISection.css';
import aiCareerImage from '../assets/images/ai-career@1x.webp';

const AISection = () => {
  return (
    <section className="ai-section">
      <div className="ai-wrapper">
      <div className="ai-container">
        {/* Left Content */}
        <div className="ai-content">
          <h1 className="ai-title">
            Reimagine your career<br />in the <span className="ai-highlight">AI era</span>
          </h1>
          
          <p className="ai-description">
            Future-proof your skills with Personal Plan. Get access to 
            a variety of fresh content from real-world experts.
          </p>

          <div className="ai-features">
            <div className="feature">
              <span className="feature-icon">✦</span>
              <span>Learn AI and more</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <span>Prep for a certification</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🤖</span>
              <span>Practice with AI coaching</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📈</span>
              <span>Advance your career</span>
            </div>
          </div>

          <button className="learn-more-btn">Learn more</button>
          
          <p className="pricing">Starting at $10.00/month</p>
        </div>

        {/* Right Visuals */}
        <div className="ai-visuals">
          {/* Main Blue Card */}
          
            <img 
              src={aiCareerImage}
              alt="Reimagine your career in the AI era"
            className="main-visual"
            />
          </div>
         
      </div>
      </div>
    </section>
  );
};

export default AISection;