import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProd from "./singleProd";
import "./styles.css";

faker.seed(100);

function Home({ cart, setCart }) {
  const prodArr = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  //   console.log(prodArr);

  const [products] = useState(prodArr);
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((prod, key) => (
        <SingleProd prod={prod} key={key} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Home;
