"use client";

"use client";

export default function Home() {
  return (
    // 'pt-24' le da un espacio arriba para que el contenido no se pegue al Header flotante
    <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 flex flex-col gap-y-16">
      
      {/* SECCIÓN HÉROE (Bienvenida) */}
      <section className="flex flex-col items-center md:items-start text-center md:text-left gap-y-4 py-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-800/50">
          Disponible para trabajar
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Hola, soy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tu Nombre</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Desarrolladora Frontend especializada en crear experiencias web limpias, rápidas y eficientes. Domino JavaScript nativo y actualmente potenciando mis proyectos con React y TypeScript.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <a 
            href="#proyectos" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 text-sm"
          >
            Ver mis proyectos
          </a>
          <a 
            href="#contacto" 
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-xl transition-all text-sm"
          >
            Contáctame
          </a>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS (Espacio vacío por ahora para mantener el orden) */}
      <section id="proyectos" className="border-t border-slate-800 pt-12">
        <h2 className="text-2xl font-bold mb-4">Proyectos destacados</h2>
        <p className="text-slate-400 text-sm">Próximamente verás mis aplicaciones reales tipadas con TypeScript aquí.</p>
      </section>

    </main>
  );
}
