import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Skills from "./components/Skills";
import Experiencia from "./components/workExperience";
import Certs from "./components/Certs";


import bg from "./assets/background.jpg";


function App() {
  const [slide, setSlide] = useState(0);
  const slides = [<About />, <Skills />, <Experiencia />, <Certs />];

    useEffect(() => {
        document.title = 'Andrea Luizaga';
      
    }, []);
  /**return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
     style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar onSlideChange={setSlide} />
      <div className="max-w-6xl mx-auto">{slides[slide]}</div>
    </div>
  );*/

    return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* capa oscura opcional */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative min-h-screen pt-20">
        <Navbar onSlideChange={setSlide} />

        <div className="max-w-6xl mx-auto">
          {slides[slide]}
        </div>
      </div>
    </div>
  );
}

export default App;
