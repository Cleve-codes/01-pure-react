import { useEffect, useState, useMemo } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";

function App() {
  const [allowSound, setAllowSound] = useState(true);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  const DATE = useMemo(() => formatTime(new Date()), []);

  const partOfDay = useMemo(() => DATE.slice(-2), [DATE]);

  const workouts = useMemo(() => {
    const numExercises = partOfDay === "AM" ? [9, 5] : [8, 4];
    return [
      {
        name: "Full-body workout",
        numExercises: numExercises[0],
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: numExercises[1],
      },
    ];
  }, [partOfDay]);

  useEffect(() => {
    const id = setInterval(() => {
      formatTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {DATE}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default App;