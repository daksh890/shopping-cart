import React, { useEffect, useState } from "react";
import SingleProd from "./singleProd";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod, key) => (
          <SingleProd prod={prod} cart={cart} setCart={setCart} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
