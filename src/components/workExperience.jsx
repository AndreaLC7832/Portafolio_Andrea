import React, { useEffect, useRef, useState } from "react";

export default function Experiencia() {
  const experiencias = [
    {
      puesto: "2023 PRE-PROFESSIONAL IT SUPPORT INTERNSHIP",
      empresa: "DTIC - UMSS",
      actividades: [
        "Mantenimiento de Software y Hardware de equipos computacionales en diferentes areas de la Universidad Mayor de San Simón."
      ]
    },
    {
      puesto: "2023 HARDWARE MAINTENANCE LABORATORY ASSISTANT",
      empresa: "Universidad Mayor de San Simón",
      actividades: [
        "Hardware and software troubleshooting for electronic devices.",
        "Preventive/corrective hardware maintenance for desktop computers, printers, network equipment, and other devices.",
        "Installation of structured cabling and network configuration, including network connection testing."
      ]
    },
    {
      puesto: "2024 QUALITY ASSURANCE",
      empresa: "ASSURESOFT SRL (INTERNSHIP)",
      actividades: [
        "Ensure software quality through the planning, execution, and documentation of manual test."
      ]
    },
        {
      puesto: "2024 - PRESENT COMPUTER LABORATORY ASSISTANT.",
      empresa: "Universidad Mayor de San Simón",
      actividades: [
        "Administration and configuration of wired and wireless network infrastructure.",
        "Academic support for students on software and hardware management.",
        "Network administration and security (Linux server management, routing, cabling, firewalls, Mikrotik and Cisco)."
      ]
    }
  ];

  const total = experiencias.length;

  // estados
  const [index, setIndex] = useState(0);

  // refs
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const isHoveringRef = useRef(false);

  // ---------- CONTROLES ----------
  function nextSlide() {
    setIndex((prev) => (prev + 1) % total);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + total) % total);
  }

  // ---------- AUTOPLAY ----------
  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      // no llamar a nextSlide antes de su declaración: está declarada arriba
      // solo avanzar si no está en hover
      if (!isHoveringRef.current) {
        nextSlide();
      }
    }, 5000);
  }

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- PAUSA ON HOVER ----------
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleEnter = () => {
      isHoveringRef.current = true;
      stopAuto();
    };
    const handleLeave = () => {
      isHoveringRef.current = false;
      startAuto();
    };

    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // ---------- SWIPE ----------
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    }
  };

  // ---------- RENDER ----------
  // wrapperTranslate es el valor CSS para mover el wrapper de slides
  const wrapperTranslateStyle = {
    transform: `translateX(-${index * 100}%)`,
    transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)"
  };

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Work Experience</h1>

      <div className="relative max-w-3xl mx-auto flex items-center justify-center gap-6 mt-8">

        {/* Flecha izquierda (afuera) */}
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full shadow"
        >
          {"<"}
        </button>

        {/* Contenedor visible del carrusel */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="w-full overflow-hidden rounded-xl
                     bg-white/8 backdrop-blur-md border border-white/10"
        >
          {/* Wrapper de slides (flex) */}
          <div
            className="flex h-full w-full"
            style={wrapperTranslateStyle}
          >
            {experiencias.map((item, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 p-8"
                style={{ minWidth: "100%" }}
              >
                <article className="h-full text-justify">
                  <h2 className="text-2xl font-semibold mb-2">{item.puesto}</h2>
                  <p className="text-gray-300 mb-4">{item.empresa}</p>

                  <ul className="space-y-2">
                    {item.actividades.map((act, idx) => (
                      <li key={idx} className="text-gray-200 flex">
                        <span className="mr-2">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha (afuera) */}
        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full shadow"
        >
          {">"}
        </button>
      </div>


    </div>
  );
}
