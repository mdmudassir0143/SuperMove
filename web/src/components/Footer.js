import { Link } from "gatsby";
import React from "react";
import { menu } from "../constants/menu";
import { socialLinks } from "../constants/socialLinks";
import styled from 'styled-components';
import Logo from "./Logo";
import { ChevronRight } from 'lucide-react';

const FooterStyles = styled.footer`
  background-color: var(--black-2);
  color: var(--white-1);
  padding: 4rem 0 2rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer__content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .footer__section {
    h3 {
      color: var(--primary);
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  .footer__text {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-top: 1rem;
  }

  .footer__menuList {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
    }

    a {
      color: var(--white-1);
      font-size: 1.4rem;
      text-decoration: none;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;

      &:hover {
        color: var(--primary);
      }

      svg {
        width: 16px;
        height: 16px;
        margin-right: 0.5rem;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(3px);
      }
    }
  }

  .footer__socialList {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--black-1);
      color: var(--white-1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }

  .footer__bottom {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--black-1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .copyright {
    font-size: 1.2rem;
    color: var(--gray);
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <Logo />
            <p className="footer__text">
              Empowering developers to build innovative DApps on Aptos using Move and Spheron Network.
            </p>
          </div>

          <div className="footer__section">
            <h3>Contact Us</h3>
            <p className="footer__text">
              123 Blockchain Street<br />
              Crypto City, CC 12345<br />
              contact@supermove.com
            </p>
          </div>
          <div className="footer__section">
            <h3>Follow Us</h3>
            <ul className="footer__socialList">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">
            © SuperMove {new Date().getFullYear()} | All rights reserved
          </p>
          <nav>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;