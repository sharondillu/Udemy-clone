import "./CompanyStrip.css";

const logos = [
 "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
 "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
 "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
 "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" 
];

function CompanyStrip() {
 return (
   <div className="company-strip">
     <div className="container strip-inner">

       <p className="strip-text">
         Top companies choose Udemy Business to build in-demand career skills.
       </p>

       <div className="logos">
         {logos.map((logo, i) => (
           <img key={i} src={logo} alt="company" />
         ))}
       </div>

     </div>
   </div>
 );
}

export default CompanyStrip;