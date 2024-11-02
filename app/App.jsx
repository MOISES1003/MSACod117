import { useState } from "react";
import { HomePage } from "../src/Pages/HomePage";
import { MyRouters } from "./routes/router";
import StoreProvider from "./providers/storeProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <MyRouters />
    </StoreProvider>
  );
}

export default App;
