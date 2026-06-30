import React, { useState } from "react";
import "./Productgrid.css";
import products from "./productsData";
import "./ProductCard.css";


const ProductCard = ({ product, delay = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  const handleAddClick = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 900);
  };

  return (
    <div className="product-card" style={{ animationDelay: `${delay}s` }}>
      {product.badge && <span className="product-card__badge">{product.badge}</span>}

      <button
        className={`product-card__heart ${isLiked ? "product-card__heart--active" : ""}`}
        onClick={handleLikeClick}
        aria-label="Add to wishlist"
      >
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            d="M12 21s-7.5-4.6-10-9.1C0.3 8.1 1.7 4.5 5.2 3.6c2-0.5 4 0.3 5.1 2 1-1.7 3-2.5 5-2 3.6 0.9 5 4.5 3.2 8.3C19.5 16.4 12 21 12 21z"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </button>

      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.title} className="product-card__image" />

        <button
          className={`product-card__add-btn ${isAdded ? "product-card__add-btn--bounce" : ""}`}
          onClick={handleAddClick}
          aria-label="Add to cart"
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="product-card__body">
        <p className="product-card__title">{product.title}</p>

        <div className="product-card__rating">
          <span className="product-card__rating-badge">
            <svg viewBox="0 0 24 24" width="11" height="11">
              <path
                d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"
                fill="currentColor"
              />
            </svg>
            {product.rating}
          </span>
          <span className="product-card__reviews">
            ({product.reviews >= 1000 ? `${(product.reviews / 1000).toFixed(1)}K` : product.reviews})
          </span>
        </div>

        <div className="product-card__price-row">
          <span className="product-card__price">
            <span className="product-card__currency">Đ</span> {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="product-card__old-price">{product.oldPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="product-card__discount">{product.discount}%</span>
          )}
        </div>

        {product.stockNote && (
          <p className="product-card__stock-note">
            <svg viewBox="0 0 24 24" width="12" height="12" className="product-card__stock-icon">
              <path d="M12 2l9 16H3z" fill="currentColor" />
            </svg>
            {product.stockNote}
          </p>
        )}

        {product.rank && <p className="product-card__rank">{product.rank}</p>}

        <button
          className={`product-card__delivery ${
            product.delivery === "fast" ? "product-card__delivery--fast" : "product-card__delivery--express"
          }`}
        >
          {product.delivery === "express" && <span className="product-card__express-tag">express</span>}
          {product.delivery === "fast" && (
            <svg viewBox="0 0 24 24" width="13" height="13" className="product-card__bolt">
              <path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z" fill="currentColor" />
            </svg>
          )}
          <span className="product-card__delivery-label">{product.deliveryLabel}</span>
          <svg viewBox="0 0 24 24" width="14" height="14" className="product-card__arrow">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;