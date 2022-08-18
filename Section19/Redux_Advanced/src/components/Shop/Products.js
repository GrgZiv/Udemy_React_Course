import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import React from "react";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Product1",
    description: "It's a great first product",
  },
  {
    id: "p2",
    price: 12,
    title: "Product2",
    description: "2nd best",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
