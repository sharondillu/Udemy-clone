import "./ExploreSkills.css";

const data = {
 careers: [
   "Data Scientist",
   "Full Stack Web Developer",
   "Cloud Engineer",
   "Project Manager",
 ],
 web: [
   "Web Development",
   "JavaScript",
   "React JS",
   "Angular",
 ],
 certifications: [
   "Amazon AWS",
   "AWS Certified Cloud Practitioner",
   "AZ-900: Microsoft Azure Fundamentals",
   "CompTIA Security+",
 ],
 leadership: [
   "Leadership",
   "Management Skills",
   "Project Management",
   "Communication Skills",
 ],
};

function ExploreSkills() {
 return (
   <div className="explore-section">
     <div className="container">

       <h2 className="explore-title">
         Explore top skills and certifications
       </h2>

       <div className="explore-grid">

         {/* COLUMN 1 */}
         <div className="explore-col">
           <h4>In-demand Careers</h4>
           {data.careers.map((item, i) => (
             <p key={i}>{item}</p>
           ))}
         </div>

         {/* COLUMN 2 */}
         <div className="explore-col">
           <h4>Web Development</h4>
           {data.web.map((item, i) => (
             <p key={i}>{item}</p>
           ))}
         </div>

         {/* COLUMN 3 */}
         <div className="explore-col">
           <h4>IT Certifications</h4>
           {data.certifications.map((item, i) => (
             <p key={i}>{item}</p>
           ))}
         </div>

         {/* COLUMN 4 */}
         <div className="explore-col">
           <h4>Leadership</h4>
           {data.leadership.map((item, i) => (
             <p key={i}>{item}</p>
           ))}
         </div>

       </div>

     </div>
   </div>
 );
}

export default ExploreSkills;