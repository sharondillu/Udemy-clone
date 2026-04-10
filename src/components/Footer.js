import "./Footer.css";

const footerData = [
 {
   title: "About",
   links: [
     "Teach on Udemy",
     "Get the app",
     "About us",
     "Careers",
     "Contact us"
   ],
 },
 {
   title: "Discover Udemy",
   links: [
    "Get the app",
     "Blog",
     "Help and Support",
     "Affiliate",
     "Investors",
   ],
 },
 {
   title: "Terms",
   links: [
     "Privacy policy",
     "Cookie settings",
     "Sitemap",
     "Accessibility statement",
   ],
 },
 {
   title: "Udemy for Business",
   links: [
     
     "Udemy Business"
   ]
 },
];

function Footer() {
 return (
   <footer className="footer">

     <div className="container footer-top">

       {/* LEFT LINKS */}
       <div className="footer-links">
         {footerData.map((section, index) => (
           <div className="footer-col" key={index}>
             <h4>{section.title}</h4>

             {section.links.map((link, i) => (
               <p key={i}>{link}</p>
             ))}
           </div>
         ))}
       </div>

       

     </div>

     {/* BOTTOM */}
     <div className="container footer-bottom">
       <img
 src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
 alt="Udemy logo"
 className="footer-logo"
/>
       <p>© 2026 Udemy, Inc.</p>
     
     {/* RIGHT LANGUAGE */}
       <div className="footer-right">
         <button className="lang-btn">
           🌐 English
         </button>
       </div>
</div>
   </footer>
 );
}

export default Footer;
