import React, { useRef } from "react";
import { aiCourses } from "../data/courses";
import "./SkillsSection.css";

/* ================= COURSE CARD ================= */
const CourseCard = ({ course }) => {
 const {
   image,
   title,
   author,
   rating,
   reviews,
   price,
   originalPrice,
   isBestseller,
   isPremium,
 } = course;

 return (
   <div className="course-card">
     <div className="course-image">
       <img src={image} alt={title} />
     </div>

     <div className="course-info">
       <h3 className="course-title">{title}</h3>
       <p className="course-author">{author}</p>

       <div className="course-meta">
         {isBestseller && <span className="bestseller">Bestseller</span>}
         {isPremium && <span className="premium">Premium</span>}
        
        <div className="meta-box rating-box">
         <span className="rating">⭐ {rating}</span>
        </div>
        <div className="meta-box rating-box">
         <span className="reviews">{reviews}ratings</span>
         </div>
         </div>
       </div>

       <div className="course-price">
         <span className="current-price">${price}</span>
         {originalPrice && (
           <span className="original-price">${originalPrice}</span>
         )}
       
     </div>
   </div>
 );
};

/* ================= MAIN SECTION ================= */
const SkillsSection = () => {
 const scrollRef = useRef();

 const scrollLeft = () => {
   scrollRef.current.scrollBy({
     left: -320,
     behavior: "smooth",
   });
 };

 const scrollRight = () => {
   scrollRef.current.scrollBy({
     left: 320,
     behavior: "smooth",
   });
 };

 return (
   <section className="skills-section">
     <div className="skills-container">
       {/* HEADER */}
       <div className="skills-header">
         <h2 className="skills-title">
           Skills to transform your career and life
         </h2>
         <p className="skills-subtitle">
           From critical skills to technical topics, Udemy supports your professional development.
         </p>
       </div>

       {/* TABS */}
       <div className="category-tabs">
         <span className="tab active">Artificial Intelligence (AI)</span>
         <span className="tab">Python</span>
         <span className="tab">Microsoft Excel</span>
         <span className="tab">AI Agents & Agentic AI</span>
         <span className="tab">Digital Marketing</span>
         <span className="tab">Amazon AWS</span>
       </div>

       {/* SCROLL SECTION */}
       <div className="courses-wrapper">
         <button className="arrow left" onClick={scrollLeft}>
           ‹
         </button>

         <div className="courses-scroll" ref={scrollRef}>
           {aiCourses.map((course) => (
             <CourseCard key={course.id} course={course} />
           ))}
         </div>

         <button className="arrow right" onClick={scrollRight}>
           ›
         </button>
       </div>

       {/* BUTTON */}
       <div className="show-all">
         <button className="show-all-btn">
           Show all Artificial Intelligence (AI) courses →
         </button>
       </div>
     </div>
   </section>
 );
};

export default SkillsSection;