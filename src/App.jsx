import { Contributors } from "./routes/Contributors";
import { Route,Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen gap-10">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contributors" element={<Contributors/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
