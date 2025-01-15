import Hero from "./components/Hero.jsx";
import Generator from "./components/Generator.jsx";
import Workout from "./components/Workout.jsx";
import { useState } from "react";


function App() {
  const [workout, setWorkout] = useState(null);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r 
      from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero/>
      <Generator />
      {workout && <Workout workout={workout}/>}
    </main>
  )
}

export default App;
