import React, { useEffect, useState, useContext } from "react";
import SingleProd from "./singleProd";
import { Cart as call } from "../Context";

function Cart() {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(call);

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
          <SingleProd prod={prod} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
