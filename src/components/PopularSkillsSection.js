import "./PopularSkillsSection.css";

const skillsData = {
 development: [
   { name: "Python", learners: "50,426,035" },
   { name: "Web Development", learners: "14,527,124" },
   { name: "Data Science", learners: "8,396,659" },
 ],
 design: [
   { name: "Blender", learners: "3,130,524" },
   { name: "Graphic Design", learners: "4,706,116" },
   { name: "AutoCAD", learners: "2,152,746" },
 ],
 business: [
   { name: "PMI Project Management Professional (PMP)", learners: "2,916,018" },
   { name: "Microsoft Power BI", learners: "5,198,930" },
   { name: "PMI Certified Associate in Project Management (CAPM)", learners: "497,851" },
 ],
};

function PopularSkillsSection() {
 return (
   <div className="popular-section-container">

     <h2 className="section-title">Popular Skills</h2>

     <div className="popular-wrapper">

       {/* LEFT SIDE */}
       <div className="popular-left">
         <h3>ChatGPT is a top skill</h3>

         <a href="/" className="link">
           See ChatGPT courses →
         </a>

         <p className="learners">5,563,084 learners</p>

         <button className="btn-outline">
           Show all trending skills ↗
         </button>
       </div>

       {/* RIGHT SIDE */}
       <div className="popular-right">

         {/* COLUMN */}
         <div className="column">
           <h4>Development</h4>
           {skillsData.development.map((item, i) => (
             <div className="skill-item" key={i}>
               <span className="skill-name">
                 {item.name} →
               </span>
               <span className="skill-learners">
                 {item.learners} learners
               </span>
             </div>
           ))}
         </div>

         <div className="column">
           <h4>Design</h4>
           {skillsData.design.map((item, i) => (
             <div className="skill-item" key={i}>
               <span className="skill-name">
                 {item.name} →
               </span>
               <span className="skill-learners">
                 {item.learners} learners
               </span>
             </div>
           ))}
         </div>

         <div className="column">
           <h4>Business</h4>
           {skillsData.business.map((item, i) => (
             <div className="skill-item" key={i}>
               <span className="skill-name">
                 {item.name} →
               </span>
               <span className="skill-learners">
                 {item.learners} learners
               </span>
             </div>
           ))}
         </div>

       </div>
     </div>
   </div>
 );
}

export default PopularSkillsSection;

