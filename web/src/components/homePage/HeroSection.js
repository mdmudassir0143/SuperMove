import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .container {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .hero__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, #030213, #08011c);
      z-index: -1;
    }
  }

  .left {
    width: 50%;
    padding: 50px 0;
    animation: fadeInLeft 0.5s ease-out;

    .hero__heading {
      max-width: 450px;
      font-size: 4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      margin: 0.2rem 0;
      background: linear-gradient(to right, #3498db, #00BDEC);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero__text {
      max-width: 350px;
    }

    .hero__button {
      margin-top: 1.5rem;
    }
  }

  .right {
    width: 50%;
    height: 400px;
    position: relative;
    animation: fadeInRight 0.5s ease-out;
  }

  .card-container {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1000px;
  }

  .card {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 15px;
    box-shadow: 0 0 1.5rem rgba(0, 204, 248, 0.5);
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 5px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      transform: translateY(100%);
      transition: transform 0.5s ease;
    }

    .card-text {
      font-size: 1.5rem;
      font-weight: 400;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin: 0;
    }

    &:hover {
      transform: scale(1.05) rotateY(10deg);
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);

      .card-image {
        transform: scale(1.1);
      }

      .card-content {
        transform: translateY(0);
      }
    }
  }

  .card-nav {
    position: absolute;
    top: 50%;
    left: 5px;
    right: 5px;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    z-index: 10;
    pointer-events: none;
  }

  .nav-button {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: auto;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column;
      padding-top: 80px;
      padding-bottom: 80px;

      &::after {
        width: 100%;
      }
    }

    .left, .right {
      width: 100%;
    }

    .left {
      margin-top: 1rem;
      padding: 0;

      .hero__heading {
        max-width: 330px;
        font-size: 3rem;
      }
    }

    .right {
      margin-top: 2rem;
      height: 300px;
    }

    .card-nav {
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
    }

    .nav-button {
      background: rgba(0, 0, 0, 0.5);
      color: white;
    }
  }
`;

import image1 from '../../images/A1.webp';
import image2 from '../../images/A2.webp';
import image3 from '../../images/A3.webp';
import image4 from '../../images/A4.webp';
import image5 from '../../images/A5.webp';
import image6 from '../../images/A6.webp';

const cardData = [
  { image: image1, description: 'Join our exciting developer workshops' },
  { image: image2, description: 'Build innovative DApps on Aptos' },
  { image: image3, description: 'Connect with industry leaders' },
  { image: image4, description: 'Win amazing prizes in hackathons' },
  { image: image5, description: 'Explore cutting-edge blockchain technology' },
  { image: image6, description: 'Network with industry professionals' },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextCard = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }
  };

  const prevCard = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Spheron SuperMove Tour</h1>
            <ParagraphText className="hero__text">
              "Empowering Developers to Build DApps on Aptos Using Move and Spheron Network"
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Join The Tour
            </Button>
          </div>
          <div className="right">
            <div className="card-container">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 1 : 0,
                    transform: `rotateY(${index === currentIndex ? 0 : 90}deg)`,
                  }}
                >
                  <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
                  <div className="card-content">
                    <p className='card-text'>{card.description}</p>
                  </div>
                </div>
              ))}
              <div className="card-nav">
                <button className="nav-button" onClick={prevCard} disabled={isTransitioning}>
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-button" onClick={nextCard} disabled={isTransitioning}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;