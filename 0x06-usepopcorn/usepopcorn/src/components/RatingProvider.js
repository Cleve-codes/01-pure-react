import React, { useState, createContext, useContext, useEffect } from "react"

const RatingContext = createContext();

const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Load user's rating from some source (e.g., an API call)
    // For this example, I'm using a static value
    const userRating = 3;
    setRating(userRating);
  }, []);

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
};

const useRating = () => {
  const context = useContext(RatingContext);
  if (context === undefined) {
    throw new Error("useRating must be used within a RatingProvider");
  }
  return context;
};

export { RatingProvider, useRating };