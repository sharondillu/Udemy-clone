import "./LearnAISection.css";
import { aiCourses } from '../data/courses';
import React from 'react';
function LearnAISection() {

 // 🔥 FILTER GOOGLE COURSES
 const googleCourses = aiCourses.filter(
   (course) => course.partner === "google"
 );

 return (
   <section className="learn-ai">
     <div className="learn-ai-container">

       {/* LEFT SIDE */}
       <div className="ai-left">
         <span className="ai-badge">Google</span>

         <h2>Google AI with Professional Certificate</h2>

         <p>
           Build your AI fluency and get more done faster.
         </p>

         

         <div className="ai-meta-boxes">
              <div className="meta-box">
                ★ <span className="meta-value">4.8</span>
              </div>
              <div className="meta-box">
                2,456 ratings
              </div>
              <div className="meta-box">
                7 videos
              </div>
              <div className="meta-box">
                12 hours
              </div>
            </div>
         
       </div>
       {/*<button className="ai-btn">
          Learn more
         </button>

       {/* RIGHT SIDE */}
       <div className="ai-right">
         {googleCourses.slice(0, 4).map((aicourse) => (
           <div className="ai-card" key={aicourse.id}>

             <img
               className="ai-img"
               src={aicourse.image}
               alt={aicourse.title}
             />

             <h4 className="ai-ti">{aicourse.title}</h4>

             <div className="ai-meta">
               <span className="box">{aicourse.lessons}</span>
               <span className="box">{aicourse.hours}</span>
             </div>

           </div>
         ))}
       </div>

     </div>
   </section>
 );
}

export default LearnAISection;
