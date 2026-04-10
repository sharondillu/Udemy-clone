import ai from "../assets/images/ai.jpg";
import csha from "../assets/images/csha.jpg";
import llm from "../assets/images/llm.jpg";
import ess from "../assets/images/ess.jpeg"
import brain from "../assets/images/brain.jpeg"

import cursor from "../assets/images/cursor.jpg";
import research from "../assets/images/research.jpeg"
export const aiCourses = [
  {
    id: 1,
    image: ai,
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    author: "365 Careers",
    rating: "4.6",
    reviews: "18,761",
    price: "10.99",
    originalPrice: "59.99",
    isBestseller: true,
    isPremium: false,
    isTrending:true
  },
  {
    id: 2,
    image: csha,
    title: "AI Programming in C# - Beginner to Expert",
    author: "Robert Gioia",
    rating: "4.2",
    reviews: "262",
    price: "9.99",
    originalPrice: "54.99",
    isBestseller: false,
    isPremium: false,
    isTrending:false
  },
  {
    id: 3,
    image: llm,
    title: "2026 Bootcamp: Generative AI, LLM Apps, AI Agents, Cursor AI",
    author: "Julio Colomer",
    rating: "4.3",
    reviews: "4,138",
    price: "9.99",
    originalPrice: "54.99",
    isBestseller: false,
    isPremium: true,
    isTrending:true
  },
  {
    id: 4,
    image: cursor,
    title: "The Complete AI Coding Course (2025) - Cursor, Claude & More",
    author: "Brendan Ai",
    rating: "4.5",
    reviews: "2,464",
    price: "9.99",
    originalPrice: "49.99",
    isBestseller: true,
    isPremium: false,
    isTrending:true
  },
  {
   id: 5,
  image: ess,
  title: "Google AI Essentials",
  author: "Google",
  rating: "4.7",
  reviews: "12,000",
  price: "Free",
  originalPrice: "",
  category: "ai",
  partner: "google",
  lessons: "Course 1 of 7",
  hours: "8 hours",
  isBestseller: true,
  isPremium: false,
  isTrending:true
  },
  {
 id: 6,
 image: brain, // replace with your image import
 title: "AI for Brainstorming",
 author: "Creative AI Labs",
 rating: "4.5",
 reviews: "3,842",
 price: "9.99",
 originalPrice: "49.99",

 isTrending: false,
 isBestseller: false,
 isPremium: false,

 category: "ai",
 partner: "google",

 lessons: "Course 2 of 7",
 hours: "6 hours"
},
{
 id: 7,
 image: research, // replace with your image import
 title: "AI for Research & Insights",
 author: "Insight Academy",
 rating: "4.6",
 reviews: "5,126",
 price: "10.99",
 originalPrice: "54.99",

 isTrending: false,
 isBestseller: false,
 isPremium: false,

 category: "ai",
 partner: "google",

 lessons: "Course 3 of 7",
 hours: "7.5 hours"
}

];