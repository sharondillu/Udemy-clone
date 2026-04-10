import React from 'react';
import "./TrendingCourses.css";
import { aiCourses } from '../data/courses';

function TrendingCourses() {
  const filtered = aiCourses.filter((c) => c.isTrending === true);
  const trendingCourses = filtered.length > 0 ? filtered : aiCourses.slice(0, 4);

  return (
    <section className="trending-section">
      <div className="container">
        <h2 className="section-title">Trending courses</h2>

        <div className="trending-row">
          {trendingCourses.map((course) => (
            <div className="co-card" key={course.id}>
              {/* Image */}
              <div className="course-image-wrapper">
                <img 
                  className="co-image" 
                  src={course.image} 
                  alt={course.title} 
                />
              </div>

              {/* Content */}
              <div className="card-content">
                <h4 className="course-title">{course.title}</h4>
                <p className="author">{course.author}</p>

               
                <div className="meta-row">
                  {/* 1. Badge Box */}
                  <div className="badges">
                    {course.isBestseller && (
                      <span className="badge bestseller">Bestseller</span>
                    )}
                    {course.isPremium && (
                      <span className="badge premium">Premium</span>
                    )}
                  </div>

                  {/* 2. Star + Rating Box */}
                  <div className="meta-box rating-box">
                    ★ <span className="rating-value">{course.rating}</span>
                  </div>

                  {/* 3. Ratings Count Box */}
                  <div className="meta-box reviews-box">
                    {course.reviews} ratings
                  </div>
                </div>

                {/* Price - Plain text (no box) */}
                <div className="price-row">
                  <span className="current-price">${course.price}</span>
                  {course.originalPrice && (
                    <span className="original-price">${course.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingCourses;