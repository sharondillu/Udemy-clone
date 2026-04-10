import "./Hero.css";

function Hero() {
 return (
    <div className="hero-wrapper">
   <div className="hero-container">
     <img
       src="https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg"
       alt="banner" className="hero-img"
     />

     <div className="hero-card">
       <h1>Learning that gets you</h1>
       <p>Skills for your present and your future.Get started with Us</p>
       <div className="hero-search">
       <input type="text" placeholder="What do you want to learn?" />
       </div>
     </div>
   </div>
   </div>
 );
}

export default Hero;
