import profile from "../assets/me.png";   // Tu foto
import cv from "../assets/CV.pdf";        // Tu CV en PDF

export default function About() {
  return (
    <div className="text-white p-6 max-w-3xl mx-auto text-center">
      
      {/* Foto centrada en círculo */}
      <img 
        src={profile} 
        alt="Foto de Andrea" 
        className="w-55 h-55 object-cover rounded-full mx-auto mb-6 shadow-lg"
      />

      <h1 className="text-3xl font-bold mb-4">WELCOME</h1>

      {/* Texto justificado */}
      <p className="text-lg leading-relaxed text-justify">
        Hello, my name is Andrea Luizaga Cruz, and I am a Systems Engineering student at
        Universidad Mayor de San Simón. I have experience in technical support and
        computer networks. I am interested in solving hardware and software problems.
        I also have experience in maintaining computer equipment, installing operating
        systems, and setting up basic routers and switches.
      </p>

      {/* Botón para descargar CV */}
      <a
        href={cv}
        download="Andrea_Luizaga_CV.pdf"
         className="inline-block mt-6 px-8 py-3 
             bg-gradient-to-r from-blue-500 to-blue-700
             text-white !text-white font-bold text-lg
             rounded-2xl shadow-lg shadow-blue-900/40
             hover:from-blue-600 hover:to-blue-800
             hover:scale-105 active:scale-95
             transition-all duration-300"
      >
        Resume
      </a>
    </div>
  );
}

