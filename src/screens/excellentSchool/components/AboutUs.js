import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css'
import { Image } from "semantic-ui-react";
import '../styles/aboutUs.css';
import aboutUsData from '../components/AboutUs.json'

const AboutUs = () => {
  return (
    <div className="about_us">
      {/* <div>
        <h1>Welcome to Excellent</h1>
        <h4>Caption: Our beautiful campus, fostering a safe and welcoming learning environment.</h4>
        <p>Located in the heart of Tamil Nadu, India, Excellent is a premier educational institution dedicated to fostering academic excellence,
          personal growth, and community engagement.
          Serving students from various grade levels, our school provides a nurturing and inclusive environment where every student can thrive.
        </p>
      </div>
      <Image src="https://www.theeducationmagazine.com/wp-content/uploads/2023/02/safe-learning-environment-600x400.jpg" /> */}

      {aboutUsData.sections.map((section, index) => (
        <div key={index} className={`section ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
          <div className="text">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            <h4>{section.caption}</h4>
          </div>
          <Image className="image" src={section.image} alt={section.title} />
        </div>
      ))}
    </div>
  );

};

export default AboutUs;
