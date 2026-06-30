import React from "react";
import ProductCard from "./ProductCard.jsx";
import products from "./productsData";
import "./ProductGrid.css";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={product.id} className="product-grid__item">
          <ProductCard product={product} delay={index * 0.08} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;