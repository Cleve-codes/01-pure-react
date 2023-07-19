import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numLength > 0 ? (
        // React fragmentation- achieved through using empty tags
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from all .
            All from our stone oven, all organic all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu. Come back later negro.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* Check if sold out */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
      </div>
    </li>
  );
}

/* Authentic Italian cuisine. 6 creative dishes to choose
 from all . All from our stone oven, all organic all delicious */

function Footer() {
  const hours = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hours >= open && hours <= close;
  console.log(isOpen);

  // if (hours >= open && hours <= close) alert("Open!");
  // else alert("closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={open} closeHour={close} />
      ) : (
        <p>We are open until {close}. Please come back later!</p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "Were Currently open");
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are happy to welcome you between {openHour}:00 and {closeHour}
        :00.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18 rendering components on the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
