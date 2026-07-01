import React, { useState } from "react";
import "./footer.css";
import appStore from "../../assets/Images/app-store.svg";
import googlePlay from "../../assets/Images/google-play.svg";
import appGallery from "../../assets/Images/Huawei-icon.avif";

// ✅ Yahan apna data edit karo — columns aur links
const footerColumns = [
  {
    id: 1,
    heading: "Electronics",
    links: ["Mobiles", "Tablets", "Laptops", "Desktops", "Wearables", "Headphones", "Camera, Photo & Video", "Televisions"],
  },
  {
    id: 2,
    heading: "Fashion",
    links: ["Women's Fashion", "Men's Fashion", "Kids Fashion", "Fragrances", "Watches", "Jewellery", "Eyewear", "Footwear"],
  },
  {
    id: 3,
    heading: "Home and Kitchen",
    links: ["Large Appliances", "Small Appliances", "Bedroom Furniture", "Storage", "Cookware", "Furniture", "Home Fragrance", "Drinkware"],
  },
  {
    id: 4,
    heading: "Beauty",
    links: ["Fragrance", "Skincare", "Haircare", "Personal Care", "Makeup", "Makeup Tools", "Men's Grooming", "Health Care Essentials"],
  },
  {
    id: 5,
    heading: "Baby & Toys",
    links: ["Nursing & Feeding", "Diapering", "Baby Transport", "Baby & Toddler Toys", "Tricycles & Scooters", "Board Games & Cards", "Baby Food"],
  },
  {
    id: 6,
    heading: "Top Brands",
    links: ["Apple", "Samsung", "Xiaomi", "Sony", "Adidas", "Philips", "Lattafa", "Huawei", "Geepas"],
  },
  {
    id: 7,
    heading: "Discover Now",
    links: ["Blogs", "Brand Glossary", "Trending Searches", "noon Affiliate Program", "Dubai Traders Program", "noon Grocery", "noon Food", "noon Minutes", "noon Supermall"],
  },
  {
    id: 8,
    heading: "Popular",
    links: ["iPhone 17 Series", "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max", "FIFA Football World Cup", "Brazil Football Jerseys", "Argentina Football Jerseys", "Spain Football Jerseys", "Germany Football Jerseys", "Portugal Football Jerseys", "Egypt Football Jerseys", "Morocco Football Jerseys"],
  },
  {
    id: 9,
    heading: "GCC",
    links: ["noon Kuwait", "noon Bahrain", "noon Oman", "noon Qatar"],
  },
];

// ✅ App store buttons — href aur label edit karo
// const appStores = [
//   { id: 1, label: "Download on the App Store", icon: "🍎", href: "#" },
//   { id: 2, label: "Get it on Google Play", icon: "▶", href: "#" },
//   { id: 3, label: "Explore it on AppGallery", icon: "🔴", href: "#" },
// ];
const appStores = [
    {
        id: 1,
        label: "Download on the App Store",
        image: appStore,
        href: "#",
    },
    {
        id: 2,
        label: "Get it on Google Play",
        image: googlePlay,
        href: "#",
    },
    {
        id: 3,
        label: "Explore it on AppGallery",
        image: appGallery,
        href: "#",
    },
];

// ✅ Social media links — href mein apna URL daalo
const socialLinks = [
  { id: 1, label: "Facebook", icon: "f", href: "#" },
  { id: 2, label: "X / Twitter", icon: "𝕏", href: "#" },
  { id: 3, label: "Instagram", icon: "i", href: "#" },
  { id: 4, label: "LinkedIn", icon: "in", href: "#" },
];

const Footer = () => {
  const [openColumn, setOpenColumn] = useState(null);

  const toggleColumn = (id) => {
    setOpenColumn((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="footer">
      {/* Links Grid */}
      <div className="footer__grid">
        {footerColumns.map((col, index) => (
          <div
            key={col.id}
            className="footer__col"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Desktop heading */}
            <h4 className="footer__heading footer__heading--desktop">{col.heading}</h4>

            {/* Mobile accordion heading */}
            <button
              className="footer__heading footer__heading--mobile"
              onClick={() => toggleColumn(col.id)}
              aria-expanded={openColumn === col.id}
            >
              {col.heading}
              <span className={`footer__chevron ${openColumn === col.id ? "footer__chevron--open" : ""}`}>
                ›
              </span>
            </button>

            <ul className={`footer__list ${openColumn === col.id ? "footer__list--open" : ""}`}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        {/* App Store Buttons */}
        <div className="footer__apps">
          <p className="footer__apps-label">SHOP ON THE GO</p>
          <div className="footer__apps-buttons">
            {appStores.map((store) => (
              <a key={store.id} href={store.href} className="footer__app-btn">
                {/* <span className="footer__app-icon">{store.icon}</span>
                <span className="footer__app-text">{store.label}</span> */}
                <img src={store.image} alt={store.label} className="footer__app-image" />
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="footer__social">
          <p className="footer__social-label">CONNECT WITH US</p>
          <div className="footer__social-icons">
            {socialLinks.map((s) => (
              <a key={s.id} href={s.href} className="footer__social-icon" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;