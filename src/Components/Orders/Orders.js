import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderBookCard from "../OrderBookCard/OrderBookCard";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const email = loggedInUser.email;
  // (email)
  useEffect(() => {
    fetch("https://pacific-earth-93267.herokuapp.com/orders?email=" + email)
      .then((res) => res.json())
      .then(
        (data) => {
          setOrders(data);
        },
        [email]
      );
  });
  return (
    <div>
      <div className="row text-light text-center bg-info pt-2 ">
        <h5 className="col-5">Book Name</h5>
        <h5 className="col-1">Price</h5>
        <h5 className=" col-3">Date</h5>
        <h5 className="col-3">Tracking</h5>
      </div>
      {orders.map((order) => (
        <OrderBookCard order={order}></OrderBookCard>
      ))}
    </div>
  );
};

export default Orders;
