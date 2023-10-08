import React from "react";
import { Contributors } from "./components/Contributors";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <Contributors />
      </div>
      <Footer />
    </div>
  );
};

export default App;
