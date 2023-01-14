import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProd from "./singleProd";
import "./styles.css";

faker.seed(300);

function Home() {
  const prodArr = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  //   console.log(prodArr);

  const [products] = useState(prodArr);

  return (
    <div className="productContainer">
      {products.map((prod, key) => (
        <SingleProd prod={prod} key={key} />
      ))}
    </div>
  );
}

export default Home;
