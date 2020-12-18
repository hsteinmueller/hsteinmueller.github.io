import { useState } from "react";

function Home() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <a>Home</a>
      <p>{count}</p>
      <button onClick={() => setCounter(count + 1)}>BUTTON</button>
    </div>
  );
}

export default Home;
