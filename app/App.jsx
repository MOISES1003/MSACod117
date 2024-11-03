import { useState } from "react";
import { HomePage } from "../src/Pages/HomePage";
import { MyRouters } from "./routes/router";
import StoreProvider from "./providers/storeProvider";
import { GlobalStyles } from "../src/assets/styles/GlobalStyle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <GlobalStyles/>
      <MyRouters />
    </StoreProvider>
  );
}

export default App;
