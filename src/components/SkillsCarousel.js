import { useRef, useEffect, useState } from "react";
import "./SkillsCarousel.css";

const originalCards = [
 {
   title: "Large Language Models",
   img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    
 },
 {
   title: "Machine Learning",
   img: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=800&auto=format&fit=crop"
 },
 {
   title: "AI Agents",
   img: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800&auto=format&fit=crop"
 },
 {
   title: "ChatGPT",
   //img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&auto=format&fit=crop"
    img:"https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png"
 }
];

// 🔥 duplicate for infinite illusion
const cards = [...originalCards, ...originalCards];

function SkillsCarousel() {
 const scrollRef = useRef();
 const [isHovering, setIsHovering] = useState(false);
 const [activeIndex, setActiveIndex] = useState(0);

 // 👉 AUTO SCROLL
 useEffect(() => {
   const interval = setInterval(() => {
     if (!isHovering && scrollRef.current) {
       scrollRef.current.scrollLeft += 260;

       // infinite loop reset
       if (
         scrollRef.current.scrollLeft >=
         scrollRef.current.scrollWidth / 2
       ) {
         scrollRef.current.scrollLeft = 0;
       }
     }
   }, 2500);

   return () => clearInterval(interval);
 }, [isHovering]);

 // 👉 UPDATE DOTS
 const handleScroll = () => {
   const scrollLeft = scrollRef.current.scrollLeft;
   const cardWidth = 260 + 8;
   const index = Math.round(scrollLeft / cardWidth) % originalCards.length;
   setActiveIndex(index);
 };

 // 👉 DRAG SCROLL
 let isDown = false;
 let startX;
 let scrollLeft;

 const handleMouseDown = (e) => {
   isDown = true;
   scrollRef.current.classList.add("dragging");
   startX = e.pageX - scrollRef.current.offsetLeft;
   scrollLeft = scrollRef.current.scrollLeft;
 };

 const handleMouseLeave = () => {
   isDown = false;
   scrollRef.current.classList.remove("dragging");
 };

 const handleMouseUp = () => {
   isDown = false;
   scrollRef.current.classList.remove("dragging");
 };

 const handleMouseMove = (e) => {
   if (!isDown) return;
   e.preventDefault();
   const x = e.pageX - scrollRef.current.offsetLeft;
   const walk = (x - startX) * 1.5;
   scrollRef.current.scrollLeft = scrollLeft - walk;
 };

 return (
   <div className="skills-wrapper">

     {/* LEFT */}
     <div className="skills-text">
       <h2>Learn <em>essential</em> career and <strong>life </strong>skills</h2>
       <p>
         Udemy helps you build in-demand skills fast and advance your career in a changing job market
       </p>
     </div>

     {/* RIGHT */}
     <div
       className="skills-carousel"
       onMouseEnter={() => setIsHovering(true)}
       onMouseLeave={() => setIsHovering(false)}
      >

       <div
         className="cards"
         ref={scrollRef}
         onScroll={handleScroll}
         onMouseDown={handleMouseDown}
         onMouseLeave={handleMouseLeave}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
        >
         {cards.map((card, index) => (
           <div className="card" key={index}>
             <img src={card.img} alt="" />
             <div className="card-label">{card.title} →</div>
           </div>
         ))}
       </div>

       {/* DYNAMIC DOTS */}
       <div className="dots">
         {originalCards.map((_, i) => (
           <span
             key={i}
             className={i === activeIndex ? "active" : ""}>
</span>
         ))}
       </div>

     </div>
   </div>
 );
}

export default SkillsCarousel;

