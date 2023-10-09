import React from "react";
import { Contributors } from "./components/Contributors";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen gap-10">
      <div>
        <Contributors />
      </div>
      <Footer />
    </div>
  );
};

export default App;
