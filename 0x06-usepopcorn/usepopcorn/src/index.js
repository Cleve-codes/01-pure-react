import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import StarRating from "./components/StarRating";
import { RatingProvider } from "./components/RatingProvider";
//import "./index.css";



const Test = () => {
  return (
    <div>
      <StarRating color="blue" maxRating={10} />
      <p>This movies was rated X stars</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RatingProvider>
      {/* Other components */}
      <StarRating color="orangered" />
    </RatingProvider>
    <Test />
  </React.StrictMode>
);
