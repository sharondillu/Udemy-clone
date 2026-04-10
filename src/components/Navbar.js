import "./Navbar.css";
import { useState } from "react";

function Navbar({ onSearch }) {
 const [menuOpen, setMenuOpen] = useState(false);
 const [query, setQuery] = useState("");

 const handleSearch = (e) => {
   setQuery(e.target.value);
   onSearch(e.target.value);
 };

 return (
   <nav className="navbar">
     {/* LEFT */}
     <div className="navbar-left">
       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
         ☰
       </div>

       <h2 className="logo">Udemy</h2>

       <div className="nav-links desktop">
         <span>Find Courses</span>
         <span>Get Certified</span>
         <span>Subscribe</span>
       </div>
     </div>

     {/* SEARCH */}
     <div className="navbar-search">
       <span className="search-icon">🔍</span>
       <input
         type="text"
         placeholder="Search for anything"
         value={query}
         onChange={handleSearch}
       />
     </div>

     {/* RIGHT */}
     <div className="navbar-right">
        <span className="nav-text desktop">Udemy Business</span>
        <span className="nav-text desktop">Tech on Udemy</span>
       <span className="icon">🛒</span>
       <span className="icon">🌐</span>

       <button className="login">Log in</button>
       <button className="signup">Sign up</button>
     </div>

     {/* MOBILE MENU */}
     {menuOpen && (
       <div className="mobile-menu">
         <span>Find Courses</span>
         <span>Get Certified</span>
         <span>Subscribe</span>
         <span>Udemy Business</span>
          <span>Tech on Udemy</span>
         <span>Log in</span>
         <span>Sign up</span>
       </div>
     )}
   </nav>
 );
}

export default Navbar;
