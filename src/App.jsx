import { useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { MyRouters } from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return <MyRouters />;
}

export default App;
