import React from "react";
import "./BottomBar.css";
import mastercardImg from "../../assets/Images/mastercard-v3.svg";
import visaImg from "../../assets/Images/visa-v3.svg";
import tabbyImg from "../../assets/Images/tabby-3.svg";
import tamaraImg from "../../assets/Images/tamara-3.svg";
import amexImg from "../../assets/Images/card-amex.svg";
import cashImg from "../../assets/Images/cash.svg";

// ✅ Payment icons — src mein apni image import karke daalo
// Example: import mastercardImg from "../../assets/mastercard.png";
// Phir: src: mastercardImg
const paymentIcons = [
  { id: 1, alt: "Mastercard", src: mastercardImg },
  { id: 2, alt: "Visa", src: visaImg },
  { id: 3, alt: "Tabby", src: tabbyImg },
  { id: 4, alt: "Tamara", src: tamaraImg },
  { id: 5, alt: "American Express", src: amexImg },
  { id: 6, alt: "Cash", src: cashImg },
];

// ✅ Nav links — label aur href edit karo
const navLinks = [
  { id: 1, label: "Careers", href: "#" },
  { id: 2, label: "Warranty Policy", href: "#" },
  { id: 3, label: "Sell with us", href: "#" },
  { id: 4, label: "Terms of Use", href: "#" },
  { id: 5, label: "Terms of Sale", href: "#" },
  { id: 6, label: "Privacy Policy", href: "#" },
  { id: 7, label: "Consumer Rights", href: "#" },
];

const BottomBar = () => {
  return (
    <div className="bottombar">
      {/* Left — Copyright */}
      <p className="bottombar__copy">© 2026 noon. All Rights Reserved</p>

      {/* Center — Payment Icons */}
      <div className="bottombar__payments">
        {paymentIcons.map((icon) => (
          <div key={icon.id} className="bottombar__payment-card">
            <img src={icon.src} alt={icon.alt} className="bottombar__payment-img" />
          </div>
        ))}
      </div>

      {/* Right — Nav Links */}
      <nav className="bottombar__nav">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className="bottombar__nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default BottomBar;