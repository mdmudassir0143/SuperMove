import React, { useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const AboutUsStyles = styled.section`
  padding: 8rem 0;
  background: var(--black-2);
  color: var(--white);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  .aboutUs__content {
    display: flex;
    align-items: center;
    gap: 5rem;
    margin-bottom: 8rem;
  }

  .aboutUs__info {
    flex: 1;
  }

  .aboutUs__img {
    flex: 1;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 2rem rgba(0, 204, 248, 0.3);
  }

  .aboutUs__subtitle {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .aboutUs__title {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  .aboutUs__text {
    font-size: 1.6rem;
    color: var(--white-1);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .tour__section {
    background: var(--black-1);
    padding: 4rem;
    border-radius: 1.5rem;
    box-shadow: 0 0 3rem rgba(0, 204, 248, 0.2);
    margin-bottom: 8rem;
  }

  .tour__title {
    text-align: center;
    font-size: 3.6rem;
    margin-bottom: 4rem;
  }

  .tour__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
  }

  .tour__item {
    background: var(--black-2);
    padding: 3rem;
    border-radius: 1.2rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      box-shadow: 0 1rem 2rem rgba(0, 204, 248, 0.1);
    }
  }

  .tour__item-title {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    font-weight: bold;
  }

  .tour__item-content {
    font-size: 1.6rem;
    color: var(--white-1);
    line-height: 1.6;
  }

  .timeline__section {
    margin-bottom: 8rem;
  }

  .timeline__title {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .timeline__slider {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }

  .timeline__cards {
    display: flex;
    transition: transform 0.3s ease;
  }

  .timeline__card {
    flex: 0 0 100%;
    background: var(--black-1);
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 5px 15px rgba(0, 204, 248, 0.1);
    transition: all 0.3s ease;
    text-align: center;
    height: 300px; // Increased height
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .timeline__month-name {
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .timeline__events {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
  }

  .timeline__event {
    font-size: 1.6rem;
    color: var(--white-1);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: "•";
      color: var(--primary);
      margin-right: 0.8rem;
      font-size: 2rem;
    }
  }

  .timeline__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .timeline__nav-button {
    background: var(--primary);
    color: var(--white);
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
      background: var(--primary-dark);
      transform: scale(1.1);
      opacity: 1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .overview__section {
    margin-bottom: 8rem;
  }

  .overview__title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .overview__content {
    font-size: 1.6rem;
    color: var(--white-1);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .overview__aside {
    background: var(--black-1);
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 2rem;
    border-left: 4px solid var(--primary);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
      box-shadow: 0 5px 15px rgba(0, 204, 248, 0.1);
    }
  }

  .overview__aside-icon {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    color: var(--primary);
  }

  .overview__aside-text {
    font-size: 1.6rem;
    color: var(--white-1);
    line-height: 1.6;
  }

  .ending-section {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
  }

  .main-image {
    width: 50%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 1rem;
  }

  .ending-text {
    width: 50%;
    padding: 2rem;
    background: var(--black-1);
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba(0, 204, 248, 0.2);
  }

  .ending-title {
    font-size: 2.8rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .ending-content {
    font-size: 1.6rem;
    color: var(--white-1);
    line-height: 1.6;
  }

  @media only screen and (max-width: 768px) {
    .aboutUs__content {
      flex-direction: column;
    }

    .aboutUs__img {
      width: 100%;
      margin-top: 3rem;
    }

    .tour__grid {
      grid-template-columns: 1fr;
    }

    .ending-section {
      flex-direction: column;
    }

    .main-image,
    .ending-text {
      width: 100%;
    }
  }
`;

const timelineData = [
  { month: "January", events: ["Kickoff Event", "Workshop: Intro to Aptos"] },
  { month: "February", events: ["Hackathon #1", "BuildersMeet: Delhi"] },
  {
    month: "March",
    events: ["Workshop: Move Language Basics", "Community Meetup"],
  },
  { month: "April", events: ["Hackathon #2", "BuildersMeet: Mumbai"] },
  { month: "May", events: ["Workshop: DApp Development", "Tech Talk Series"] },
  { month: "June", events: ["Hackathon #3", "BuildersMeet: Bangalore"] },
  {
    month: "July",
    events: ["Workshop: Smart Contract Security", "Networking Event"],
  },
  { month: "August", events: ["Hackathon #4", "BuildersMeet: Hyderabad"] },
  {
    month: "September",
    events: ["Workshop: Scaling DApps", "Community Showcase"],
  },
  { month: "October", events: ["Hackathon #5", "BuildersMeet: Chennai"] },
  {
    month: "November",
    events: ["Workshop: Web3 Integration", "Industry Panel Discussion"],
  },
  { month: "December", events: ["Final Hackathon", "Closing Ceremony"] },
];

function AboutUs() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.style.transform = `translateX(-${
        currentMonth * 100
      }%)`;
    }
  }, [currentMonth]);

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % timelineData.length);
  };

  const prevMonth = () => {
    setCurrentMonth(
      (prev) => (prev - 1 + timelineData.length) % timelineData.length
    );
  };

  return (
    <AboutUsStyles>
      <div className="container">
        <div className="aboutUs__content">
          <div className="aboutUs__info">
            <ParagraphText className="aboutUs__subtitle">
              Who We Are
            </ParagraphText>
            <SectionTitle className="aboutUs__title">About Us</SectionTitle>
            <ParagraphText className="aboutUs__text">
              Founded in 2023, our company has been at the forefront of
              innovation in our industry. We started with a simple idea: to make
              technology accessible to everyone. Today, we're proud to serve
              customers worldwide, helping them achieve their goals through our
              cutting-edge solutions.
            </ParagraphText>
            <ParagraphText className="aboutUs__text">
              Our team of experts is passionate about what they do, constantly
              pushing the boundaries of what's possible. We believe in the power
              of technology to transform lives and businesses, and we're
              committed to being a part of that transformation.
            </ParagraphText>
          </div>
          <div className="aboutUs__img">
            <StaticImage
              src="../../images/h14.png"
              alt="Our team at work"
              placeholder="blurred"
              objectFit="cover"
              style={{ height: "100%" }}
            />
          </div>
        </div>

        <div className="tour__section">
          <h2 className="tour__title">Spheron SuperMove Tour</h2>
          <div className="tour__grid">
            <div className="tour__item">
              <h3 className="tour__item-title">✨ What?</h3>
              <p className="tour__item-content">
                The Spheron SuperMove Tour is a 6-month campaign by Spheron and
                Aptos, focused on uniting India's open-source developer
                community to build dApps on Aptos using Move, with 100+ events
                across 50+ colleges in 20+ cities.
              </p>
            </div>
            <div className="tour__item">
              <h3 className="tour__item-title">🤨 Why?</h3>
              <p className="tour__item-content">
                India's web3 developer ecosystem struggles with fragmented
                education, limited awareness, and a lack of exposure in top
                universities. There's untapped potential in scaling hackathon
                projects into marketplace dApps.
              </p>
            </div>
            <div className="tour__item">
              <h3 className="tour__item-title">👾 Who?</h3>
              <p className="tour__item-content">
                This initiative targets developers, blockchain builders, and
                devshops, offering opportunities to connect with industry
                leaders, investors, and partners to accelerate their web3
                projects.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline__section">
          <h2 className="timeline__title">Event Timeline</h2>
          <div className="timeline__slider">
            <div className="timeline__cards" ref={timelineRef}>
              {timelineData.map((month, index) => (
                <div key={index} className="timeline__card">
                  <div className="timeline__month-name">{month.month}</div>
                  <div className="timeline__events">
                    {month.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="timeline__event">
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="timeline__nav">
              <button
                className="timeline__nav-button"
                onClick={prevMonth}
                disabled={currentMonth === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="timeline__nav-button"
                onClick={nextMonth}
                disabled={currentMonth === timelineData.length - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="overview__section">
          <h2 className="overview__title">Spheron SuperMove Tour Overview</h2>
          <p className="overview__content">
            The Spheron SuperMove initiative is a six-month campaign across
            India, aimed at closing the web3 education gap and driving a
            decentralized revolution. Led by Spheron and Aptos, it empowers
            blockchain builders and supports the growth of an open-source
            developer community 🇮🇳.
          </p>

          <div className="overview__aside">
            <Calendar className="overview__aside-icon" />
            <p className="overview__aside-text">
              Supermove Workshops Offline and Online - 100+ events focused on
              just writing code. No BS!
            </p>
          </div>
          <div className="overview__aside">
            <Calendar className="overview__aside-icon" />
            <p className="overview__aside-text">
              Meet the budding founders, devshops, opensource contributors who
              are already part of web3 & onboard them!
            </p>
          </div>
          <div className="overview__aside">
            <Calendar className="overview__aside-icon" />
            <p className="overview__aside-text">
              Hack! Hack! Hack! - 6 hackathons // more than 3000+ developers
              building & only 2 track!
            </p>
          </div>
          <div className="overview__aside">
            <Calendar className="overview__aside-icon" />
            <p className="overview__aside-text">
              Demo Day + City wide meet + Bounties so there is no loss of grip!
            </p>
          </div>
        </div>

        <div className="ending-section">
          <StaticImage
            src="../../images/h4.png"
            alt="Spheron SuperMove Tour"
            placeholder="blurred"
            className="main-image"
          />
          <div className="ending-text">
            <h2 className="ending-title">Join the Revolution</h2>
            <p className="ending-content">
              The Spheron SuperMove Tour is more than just an event series, It's
              a MOVEment. We're building a community of passionate developers,
              innovators, and dreamers who are ready to shape the future of
              blockchain technology. Whether you're a seasoned developer or just
              starting your journey in the world of Web3, there's a place for
              you here.
            </p>
          </div>
        </div>
      </div>
    </AboutUsStyles>
  );
}

export default AboutUs;
