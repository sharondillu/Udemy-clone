import "./CertifiedSection.css";

const certData = [
 {
   title: "AWS Certified Cloud Practitioner",
   org: "Amazon Web Services",
   icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
 },
 {
   title: "Microsoft Azure Fundamentals (AZ-900)",
   org: "Microsoft",
   icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
 },
 {
   title: "CompTIA Security+",
   org: "CompTIA",
   icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/Comptia-logo.svg"
 },
];

function CertifiedSection() {
 return (
   <div className="certified-section">
     <div className="container certified-inner">

       {/* LEFT */}
       <div className="certified-left">
         <h2>Get certified and get ahead in your career</h2>

         <p >
           Prepare for industry-recognized certifications and advance your
           skills with expert-led courses designed to help you succeed.
         </p>

         <button className="btn-outline">
           Explore certifications
         </button>
       </div>

       {/* RIGHT */}
       <div className="certified-right">
         {certData.map((item, index) => (
           <div className="certified-card" key={index}>

             <img
               src={item.icon}
               alt={item.org}
               className="cert-icon"
             />

             <h4>{item.title}</h4>
             <p>{item.org}</p>

           </div>
         ))}
       </div>

     </div>
   </div>
 );
}

export default CertifiedSection;