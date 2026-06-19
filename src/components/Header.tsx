"use client";

import { useState } from "react";

export default function Header() {
  // Este estado reemplaza a la librería pesada "Dialog" para el menú del celular
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        
      {/* 1. CONTENEDOR PRINCIPAL: Controla los márgenes y alinea los bloques de izquierda a derecha */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* BLOQUE IZQUIERDA: Logotipo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 font-bold text-xl text-white">
            Portafolio
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA: Solo se ve en celulares (lg:hidden) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400 hover:text-white"
          >
            <span className="sr-only">Abrir menú</span>
            {/* Un icono hecho con texto simple para no importar librerías de iconos */}
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* BLOQUE CENTRO: Enlaces de escritorio. Se ocultan en celular (hidden) y se muestran en pantallas grandes (lg:flex) */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#proyectos" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Proyectos
          </a>
          <a href="#sobre-mi" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Sobre mí
          </a>
        </div>

        {/* BLOQUE DERECHA: Botón de acción (ej. Contacto o CV) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contacto" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
            Contacto <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* 2. MENÚ DESPLEGABLE PARA CELULARES (Se activa con el estado de React) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-y-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 hover:text-white">
            Inicio
          </a>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 hover:text-white">
            Proyectos
          </a>
          <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 hover:text-white">
            Sobre mí
          </a>
          <div className="border-t border-slate-800 pt-4">
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-cyan-400 hover:text-cyan-300">
              Contacto &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
