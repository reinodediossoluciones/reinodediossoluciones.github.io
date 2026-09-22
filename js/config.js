/* =====================================================================
   RDS · CONFIGURACIÓN DEL SITIO
   -----------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS TOCAR PARA CAMBIAR TEXTOS,
   DATOS DE CONTACTO Y TARIFAS. No requiere saber programar:
   solo cambia lo que está entre comillas " " y guarda el archivo.

   Si quieres cambiar colores, tipografía o el diseño, eso está en
   css/styles.css (arriba del archivo, en la sección :root).
   ===================================================================== */

window.RDS_CONFIG = {

  // -------------------------------------------------------------
  // 1. DATOS GENERALES DE LA EMPRESA
  // -------------------------------------------------------------
  empresa: {
    nombre: "Reino de Dios Soluciones",
    lema: "Logística · Aseo industrial · Apoyo empresarial",
    matricula: "48797302 — Cám. Comercio Cartagena",
    estado: "Activa y al día",
    ubicacionCorta: "Cartagena, Bolívar",
    direccionCompleta: "Carrera 68E # 3F-30, Barrio El Reposo, Cartagena, Bolívar",
    telefono: "302 297 8363",       // se usa para el enlace de llamada
    whatsapp: "573022978363",       // solo números, con indicativo del país, sin +
    correo: "reinodediossoluciones@gmail.com",
    horario: "Lunes a sábado, 7:00 a.m. – 5:00 p.m.",
    anioFundacion: "2024"
  },

  // -------------------------------------------------------------
  // 2. PORTADA (HERO)
  // -------------------------------------------------------------
  hero: {
    kicker: "RDS · Cartagena, Bolívar",
    titulo: "Logística y mantenimiento con orden, a tiempo",
    subtitulo: "Cargue, descargue, aseo industrial y apoyo operativo para empresas que necesitan un aliado serio, puntual y de confianza.",
    botonPrimario: "Solicitar cotización",
    botonSecundario: "Ver servicios"
  },

  // -------------------------------------------------------------
  // 3. SERVICIOS
  //    icono: usa uno de estos valores → "grua" | "escoba" | "engranaje" | "montacarga" | "pintura"
  // -------------------------------------------------------------
  servicios: {
    titulo: "Nuestras líneas de servicio",
    subtitulo: "Cinco frentes de trabajo, un mismo estándar de cumplimiento.",
    lista: [
      {
        icono: "grua",
        titulo: "Logística y carga",
        descripcion: "Cargue, descargue y movimiento de mercancía dentro y fuera de bodega, con manejo cuidadoso y personal capacitado.",
        referencia: "LÍNEA 01 — CARGA"
      },
      {
        icono: "escoba",
        titulo: "Aseo y limpieza industrial",
        descripcion: "Limpieza general de edificios, bodegas e instalaciones industriales, con protocolos adaptados a cada espacio.",
        referencia: "LÍNEA 02 — ASEO"
      },
      {
        icono: "engranaje",
        titulo: "Apoyo empresarial",
        descripcion: "Personal de soporte y apoyo operativo para empresas que necesitan reforzar equipo en tareas puntuales o continuas.",
        referencia: "LÍNEA 03 — APOYO"
      },
      {
        icono: "montacarga",
        titulo: "Lavado de montacargas",
        descripcion: "Lavado y desengrase de montacargas, reach truck y equipos similares, cuidando motor, chasis y componentes.",
        referencia: "LÍNEA 04 — LAVADO"
      },
      {
        icono: "pintura",
        titulo: "Pintura de paredes y bodegas",
        descripcion: "Pintura de paredes, fachadas y bodegas industriales, con preparación de superficie y acabado uniforme.",
        referencia: "LÍNEA 05 — PINTURA"
      }
    ]
  },

  // -------------------------------------------------------------
  // 4. NOSOTROS / IDENTIDAD
  // -------------------------------------------------------------
  nosotros: {
    titulo: "Quiénes somos",
    parrafo1: "RDS nació en Cartagena para ofrecer un servicio de logística, aseo y apoyo operativo que las empresas de la región puedan usar con confianza: gente puntual, procesos claros y trabajo bien hecho.",
    parrafo2: "Detrás de cada operación hay un equipo que entiende que el nombre de la empresa no es solo una marca, sino un compromiso: trabajar con honestidad, cumplir lo prometido y tratar a cada cliente como corresponde.",
    fraseFe: "Con fe y trabajo honesto, servimos a cada cliente como quisiéramos ser servidos."
  },

  // -------------------------------------------------------------
  // 5. MISIÓN Y VISIÓN
  // -------------------------------------------------------------
  mision: "Brindar servicios de logística, aseo industrial y apoyo empresarial con orden, puntualidad y honestidad, aportando soluciones reales a las empresas de Cartagena y la región.",
  vision: "Ser reconocidos en la costa Caribe como la empresa de referencia en logística y servicios operativos, por la calidad de nuestro trabajo y la confianza que generamos en cada cliente.",

  // -------------------------------------------------------------
  // 6. CÓMO TRABAJAMOS (proceso — sí es una secuencia, por eso numerado)
  // -------------------------------------------------------------
  proceso: {
    titulo: "Cómo trabajamos",
    subtitulo: "Un mismo procedimiento para cada servicio, del primer contacto a la entrega.",
    pasos: [
      { titulo: "Contacto", descripcion: "Nos cuentas qué necesitas: tipo de servicio, lugar y fecha." },
      { titulo: "Visita o diagnóstico", descripcion: "Si el trabajo lo requiere, revisamos el sitio antes de cotizar." },
      { titulo: "Propuesta", descripcion: "Te enviamos una cotización clara, con alcance y tiempos definidos." },
      { titulo: "Ejecución y entrega", descripcion: "Realizamos el trabajo y confirmamos contigo que quedó conforme." }
    ]
  },

  // -------------------------------------------------------------
  // 7. PORTAFOLIO
  //    Puedes dejar "imagen" vacío ("") mientras no tengas fotos:
  //    se muestra un fondo tipo lámina de contenedor.
  //    Cuando tengas fotos, pon la ruta, ej: "assets/portafolio/carga-1.jpg"
  // -------------------------------------------------------------
  portafolio: {
    titulo: "Portafolio",
    subtitulo: "Trabajos realizados y tipos de operación que atendemos.",
    nota: "Seguimos sumando proyectos a esta sección a medida que avanzan nuestras operaciones.",
    // NOTA SOBRE LAS IMÁGENES:
    // Mientras no tengan fotos propias de sus trabajos, es más honesto para
    // los clientes usar imágenes GENÉRICAS de referencia (no fotos reales de
    // RDS) que fotos propias inventadas. La de "LOGÍSTICA" ya tiene una foto
    // libre de derechos (Pexels, gratis para uso comercial) como ejemplo.
    // Para las otras dos, busca en https://www.pexels.com o https://unsplash.com
    // (ambos gratis y sin derechos de autor), clic derecho > "Copiar dirección
    // de la imagen" sobre la foto que te guste, y pega esa URL en "imagen".
    // En cuanto tengan fotos reales de sus operaciones, reemplacen estas URL
    // por la ruta local, ej: "assets/portafolio/carga-1.jpg"
    trabajos: [
      { imagen: "https://images.pexels.com/photos/4487487/pexels-photo-4487487.jpeg?w=1260&h=750&dpr=1", etiqueta: "LOGÍSTICA", titulo: "Cargue y descargue de contenedores", descripcion: "Movimiento de mercancía para empresa del sector industrial." },
      { imagen: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?auto=format&fit=crop&w=1260&h=750&q=80", etiqueta: "ASEO INDUSTRIAL", titulo: "Limpieza de bodega", descripcion: "Limpieza profunda de instalaciones antes de puesta en operación." },
      { imagen: "https://images.pexels.com/photos/4483862/pexels-photo-4483862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", etiqueta: "APOYO EMPRESARIAL", titulo: "Personal de apoyo en planta", descripcion: "Refuerzo de personal operativo durante temporada alta." },
      { imagen: "https://images.pexels.com/photos/4487423/pexels-photo-4487423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", etiqueta: "LAVADO DE MONTACARGAS", titulo: "Lavado de montacargas y reach truck", descripcion: "Limpieza y desengrase de equipos de izaje para mantenerlos en buen estado." },
      { imagen: "https://images.pexels.com/photos/7218029/pexels-photo-7218029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", etiqueta: "PINTURA", titulo: "Pintura de bodega industrial", descripcion: "Pintura de paredes y áreas de bodega, con preparación previa de la superficie." }
    ]
  },

  // -------------------------------------------------------------
  // 8. TARIFARIO
  //    Los precios dicen "Cotizar": eso hace que en la página aparezcan
  //    botones de Correo y WhatsApp ya redactados pidiendo esa cotización.
  //    Cuando definas un precio fijo, reemplaza "Cotizar" por el valor,
  //    por ejemplo "$120.000", y el botón desaparece (queda solo el precio).
  // -------------------------------------------------------------
  tarifario: {
    titulo: "Tarifario",
    subtitulo: "Precios accesibles y justos para el mercado de Cartagena: valores de referencia, sin sorpresas. La tarifa final depende de volumen, horario y frecuencia.",
    notaFinal: "Trabajamos con tarifas competitivas y ajustadas a cada operación, para que cuentes con un aliado serio sin pagar de más. Los precios no incluyen desplazamientos fuera de Cartagena ni turnos nocturnos o festivos, que se cotizan aparte.",
    // Mensaje que se arma solo al tocar "Correo" o "WhatsApp" en un servicio
    // marcado como "Cotizar". {servicio} y {linea} se reemplazan automáticamente.
    mensajeCotizacion: "Hola, quiero una cotización para: {servicio} ({linea}).",
    // "badge" es la etiqueta pequeña que aparece junto al nombre de cada
    // bloque (ej. "Precio accesible"). Déjalo vacío ("") si no quieres
    // mostrar ninguna etiqueta en ese bloque.
    bloques: [
      {
        nombre: "Logística y carga",
        badge: "Precio accesible",
        items: [
          { servicio: "Cargue / descargue por hora", descripcion: "Personal por hora, mínimo 4 horas.", precio: "Cotizar" },
          { servicio: "Cuadrilla completa (por día)", descripcion: "Equipo de carga para jornada completa.", precio: "Cotizar" },
          { servicio: "Embombinado (forrado de carga)", descripcion: "Forrado con plástico stretch para asegurar y proteger la carga en pallets o estibas.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Aseo y limpieza industrial",
        badge: "Precio accesible",
        items: [
          { servicio: "Limpieza puntual", descripcion: "Jornada única, bodega o local.", precio: "Cotizar" },
          { servicio: "Contrato mensual", descripcion: "Visitas periódicas según frecuencia acordada.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Apoyo empresarial",
        badge: "Precio accesible",
        items: [
          { servicio: "Personal de apoyo por día", descripcion: "Refuerzo operativo temporal.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Lavado de montacargas",
        badge: "Precio accesible",
        items: [
          { servicio: "Lavado sencillo (exterior)", descripcion: "Lavado de carrocería y chasis de montacarga o reach truck.", precio: "Cotizar" },
          { servicio: "Lavado y desengrase completo", descripcion: "Incluye motor, mástil y componentes, con desengrase.", precio: "Cotizar" },
          { servicio: "Contrato periódico", descripcion: "Lavado de flota de montacargas con frecuencia acordada.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Pintura de paredes y bodegas",
        badge: "Precio accesible",
        items: [
          { servicio: "Pintura por m² (interior)", descripcion: "Preparación de superficie y aplicación de pintura interior.", precio: "Cotizar" },
          { servicio: "Pintura de bodega industrial", descripcion: "Pintura de paredes y áreas comunes de bodega.", precio: "Cotizar" },
          { servicio: "Pintura de fachada", descripcion: "Pintura exterior de fachadas y muros perimetrales.", precio: "Cotizar" }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 9. CONTACTO
  // -------------------------------------------------------------
  contacto: {
    titulo: "Hablemos de tu operación",
    subtitulo: "Cuéntanos qué necesitas y te respondemos con una propuesta.",
    botonWhatsapp: "Escribir por WhatsApp",
    mensajeWhatsapp: "Hola, quiero información sobre los servicios de RDS."
  },

  // -------------------------------------------------------------
  // 10. PIE DE PÁGINA
  // -------------------------------------------------------------
  footer: {
    nota: "Matrícula 48797302 — Cámara de Comercio de Cartagena"
  }
};
