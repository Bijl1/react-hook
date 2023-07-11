import "./App.css";
import { useState } from "react";
import Counter from "./components/01-use-state/Counter";
import Timer from "./components/02-use-state-loop/Timer";
 
function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}

      {show && <Timer />}
    </div>
  );
}
 
export default App;