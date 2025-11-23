import React from "react";
import { FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaLinux, FaWindows, FaTrello } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {/* Desarrollo */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Desarrollo</h2>
          <div className="flex gap-4 text-4xl">
            <FaJs title="JavaScript" />
            <FaJava title="Java" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Frameworks</h2>
          <div className="flex gap-4 text-4xl">
            <FaReact title="React" />
          </div>
        </div>

        {/* Sistemas Operativos */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Sistemas Operativos</h2>
          <div className="flex gap-4 text-4xl">
            <FaLinux title="Linux" />
            <FaWindows title="Windows" />
          </div>
        </div>

        {/* Herramientas de Gestión (TEXTO) */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Herramientas de Gestión</h2>
          <ul className="text-center text-lg space-y-2">
            <li>Trello</li>
            <li>TFS / Azure DevOps</li>
          </ul>
        </div>

        {/* Metodologías (TEXTO) */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Metodologías</h2>
          <ul className="text-center text-lg space-y-2">
            <li>Scrum</li>
            <li>Kanban</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
