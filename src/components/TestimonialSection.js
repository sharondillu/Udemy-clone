import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Udemy has been a game-changer for my career. I went from knowing nothing about AI to landing a job as an AI Engineer in just 6 months.",
      name: "Sarah Chen",
      role: "AI Engineer at Google",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/3RtbxhMUTMftb9PKczSTDW/f383a1effc2975968d2f87d9273c6e9d/cris-m.webp"
    },
    {
      id: 2,
      quote: "The courses are practical and up-to-date. I learned Prompt Engineering and AI Agents and now I'm building my own AI startup.",
      name: "Marcus Okonkwo",
      role: "Founder & CEO, AI Solutions",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/1AXU6146N5h3Ti9rGXytFv/4832b694a15fa19c4f0538ee0c71f55a/ben-c.webp"
    },
    {
      id: 3,
      quote: "Thanks to Udemy, I switched from teaching to tech. Now I'm a Data Scientist earning 3x more than before.Courses that take you from beginner to genius !",
      name: "Ben C",
      role: "Senior Data Scientist",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg"
    },
    {
      id: 4,
      quote: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role..",
      name: " William A. Wachlin",
      role: "Manager at Amazon Web Services",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg"  
    }
  ];
const handleViewStory = (role) => {
    alert(`Opening Course for ${role}... (This would open a modal or new page in a real app)`);
  };
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">
          Join others transforming their lives through learning
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
              <button 
                className="view-story-btn"
                onClick={() => handleViewStory(testimonial.role)}
              >
                View course →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;