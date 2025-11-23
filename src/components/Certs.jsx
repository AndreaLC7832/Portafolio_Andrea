
import React, { useState } from "react";
import hcia from "../assets/certificates/hcia.png";
import mtcna from "../assets/certificates/mtcna.png";
import Encaminamiento from "../assets/certificates/encaminamiento.jfif";
import IEncaminamiento from "../assets/certificates/Iencaminamiento.jfif";
import Ihtmlcss from "../assets/certificates/Ihtmlcss.jfif";
import htmlcss from "../assets/certificates/htmlcss.jfif";
import photo from "../assets/certificates/PHOTO.jfif";
import ccna1 from "../assets/certificates/ccna1.jfif";
import ccna2 from "../assets/certificates/ccna2.jfif";
// Datos de ejemplo
const certificados = [
  { nombre: "Certificacion MTCNA", anio: "2025", imagen: mtcna },
  { nombre: "instructora del curso Encaminamiento de informacion de redes", anio: "2025", imagen: IEncaminamiento },
  { nombre: "Certificacion HCIA - DATACOM", anio: "2024", imagen: hcia },
  { nombre: "instructora curso HTML Y CSS", anio: "2025", imagen: Ihtmlcss },
  { nombre: "HTML Y CSS", anio: "2023", imagen: htmlcss },
  { nombre: "Switching, Routing and Wireless Essentials", anio: "2023", imagen: ccna2 },
  { nombre: "Introducion a Redes", anio: "2022", imagen: ccna1 },
  { nombre: "Encaminamiento de informacion de redes", anio: "2022", imagen: Encaminamiento },
  { nombre: "Photoshop e Illustrator", anio: "2021", imagen: photo },
];
export default function Certificados() {
  const [lightbox, setLightbox] = useState(null); // índice de la imagen abierta

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Certificados</h1>

      <div className="max-h-[600px] overflow-y-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificados.map((cert, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 flex flex-col items-center
                         transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border hover:border-white/40 cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={cert.imagen}
                alt={cert.nombre}
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{cert.nombre}</h2>
              <p className="text-sm text-gray-300 mt-1">{cert.anio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX --- */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)} // cerrar al hacer click fuera de la imagen
        >
          <img
            src={certificados[lightbox].imagen}
            alt={certificados[lightbox].nombre}
            className="max-h-[90%] max-w-[90%] rounded-md shadow-lg"
          />
        </div>
      )}
    </div>
  );
}