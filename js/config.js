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
    // -------------------------------------------------------------
    // GALERÍA DEL INICIO (las 3 fotos en fila que se ven apenas se abre
    // la página, debajo del título): YA NO SE EDITA AQUÍ.
    // Esas 3 fotos se toman automáticamente de las 3 PRIMERAS fotos de
    // "portafolio.trabajos" (más abajo, punto 7 de este archivo).
    // → Para cambiar una foto del inicio, cambia la foto correspondiente
    //   en "portafolio.trabajos" y se actualiza en los dos lugares a la vez.
    // -------------------------------------------------------------
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
  mision: "Brindar soluciones logísticas y operativas confiables a las empresas de Cartagena y la región, realizando cargue y descargue de mercancía, clasificación y organización de carga, aseo y limpieza industrial, apoyo con personal operativo, lavado de montacargas y pintura de bodegas, con orden, puntualidad y honestidad en cada servicio.",
  vision: "Para el año 2030, ser reconocidos en la costa Caribe colombiana como la empresa de referencia en servicios logísticos y operativos, brindando cargue y descargue de mercancía, aseo industrial, apoyo empresarial y demás soluciones operativas, por la calidad de nuestro trabajo y la confianza que generamos en cada cliente.",

  // -------------------------------------------------------------
  // 6. CÓMO TRABAJAMOS (proceso — sí es una secuencia, por eso numerado)
  // -------------------------------------------------------------
  proceso: {
    titulo: "Cómo trabajamos",
    subtitulo: "Un mismo procedimiento para cada servicio, del primer contacto a la entrega.",
    // Frase sobre el personal, antes de los pasos del proceso.
    personal: "Contamos con personal altamente calificado en logística, aseo industrial y apoyo operativo, seleccionado mediante hoja de vida calificada y bajo buenos estándares de contratación.",
    pasos: [
      { titulo: "Contacto", descripcion: "Nos cuentas qué necesitas: tipo de servicio, lugar y fecha." },
      { titulo: "Visita técnica", descripcion: "Nuestro personal calificado, supervisor, realiza una visita técnica al sitio con el fin de conocer el alcance y construir la propuesta." },
      { titulo: "Propuesta", descripcion: "A partir de la visita, armamos una propuesta ajustada a tu operación." },
      { titulo: "Ejecución y entrega", descripcion: "Realizamos el trabajo y confirmamos contigo que quedó conforme." }
    ]
  },

  // -------------------------------------------------------------
  // 6B. CUMPLIMIENTO Y SEGURIDAD LABORAL
  // -------------------------------------------------------------
  cumplimiento: {
    titulo: "Cumplimiento y seguridad laboral",
    subtitulo: "Operamos bajo la normatividad colombiana de seguridad y salud en el trabajo, para cuidar a nuestro personal y a las instalaciones donde trabajamos.",
    items: [
      { titulo: "SG-SST", descripcion: "Trabajamos conforme al Sistema de Gestión de Seguridad y Salud en el Trabajo, enmarcado en la Ley 1562 de 2012, el Decreto 1072 de 2015 y la Resolución 0312 de 2019." },
      { titulo: "Afiliación a ARL y EPS", descripcion: "Todo nuestro personal opera afiliado a Riesgos Laborales (ARL) y al sistema de salud (EPS) antes de iniciar cualquier labor." },
      { titulo: "Exámenes médicos ocupacionales", descripcion: "Realizamos exámenes médicos de ingreso, periódicos y de egreso, según la exposición y el riesgo de cada actividad." },
      { titulo: "Elementos de protección personal (EPP)", descripcion: "Dotamos a nuestro personal con los EPP adecuados para cada labor: guantes, botas de seguridad, cascos, tapabocas y demás elementos según el riesgo." }
    ],
    nota: "Nuestro compromiso con la seguridad laboral hace parte del respaldo que ofrecemos a cada empresa que confía en nosotros."
  },

  // -------------------------------------------------------------
  // 7. PORTAFOLIO
  //    Puedes dejar "imagen" vacío ("") mientras no tengas fotos:
  //    se muestra un fondo tipo lámina de contenedor.
  //    Cuando tengas fotos, pon la ruta, ej: "assets/portafolio/carga-1.jpg"
  //
  //    ⚠ IMPORTANTE: las 3 PRIMERAS fotos de "trabajos" (abajo) son las
  //    MISMAS que se muestran en el INICIO, en la fila de 3 fotos debajo
  //    del título. Si cambias la foto de uno de esos 3 primeros trabajos,
  //    cambia automáticamente también en el inicio. No hay que tocar nada
  //    más en ningún otro archivo.
  // -------------------------------------------------------------
  portafolio: {
    titulo: "Portafolio",
    subtitulo: "Trabajos realizados y tipos de operación que atendemos.",
    nota: "Seguimos sumando proyectos a esta sección a medida que avanzan nuestras operaciones.",
    // NOTA SOBRE LAS IMÁGENES:
    // Los primeros 3 trabajos ya tienen FOTOS REALES de RDS (carpeta
    // assets/portafolio/). Para cambiar una foto real por otra, solo
    // reemplaza el valor de "imagen" por la ruta del nuevo archivo, ej:
    // "assets/portafolio/nueva-foto.jpg" (sube la foto a esa carpeta con
    // el mismo nombre, o cambia el nombre aquí también).
    // Los trabajos 4 y 5 siguen con foto genérica de referencia (Pexels,
    // libre de derechos) hasta que tengan foto real de esa actividad.
    trabajos: [
      { imagen: "assets/portafolio/cargue-muelle.jpg", etiqueta: "LOGÍSTICA", titulo: "Cargue y descargue en muelle", descripcion: "Cuadrilla cargando camión en el muelle de despacho de la bodega." },
      { imagen: "assets/portafolio/pintura-bodega.jpg", etiqueta: "PINTURA Y ADECUACIÓN", titulo: "Pintura de instalación industrial", descripcion: "Preparación y pintura de paredes en bodega antes de su puesta en operación." },
      { imagen: "assets/portafolio/aseo-bodega.jpg", etiqueta: "ASEO INDUSTRIAL", titulo: "Limpieza y orden de bodega", descripcion: "Aseo de pasillos y verificación de estibas en bodega de insumos." },
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
  // 9. DOCUMENTOS LEGALES
  //    Documentos públicos que los visitantes pueden descargar,
  //    como respaldo de que la empresa está legalmente constituida.
  //    "archivo" es la ruta al PDF dentro de assets/legal/.
  // -------------------------------------------------------------
  legales: {
    titulo: "Documentos legales",
    subtitulo: "Empresa formalmente constituida ante Cámara de Comercio y DIAN. Descarga los documentos que lo respaldan.",
    documentos: [
      {
        nombre: "Certificado de Cámara de Comercio",
        descripcion: "Certificado de matrícula mercantil, Cámara de Comercio de Cartagena.",
        archivo: "assets/legal/certificado-camara-comercio.pdf"
      },
      {
        nombre: "RUT",
        descripcion: "Registro Único Tributario ante la DIAN.",
        archivo: "assets/legal/rut.pdf"
      }
    ]
  },

  // -------------------------------------------------------------
  // 10. CONTACTO
  // -------------------------------------------------------------
  contacto: {
    titulo: "Hablemos de tu operación",
    subtitulo: "Cuéntanos qué necesitas y te respondemos con una propuesta.",
    botonWhatsapp: "Escribir por WhatsApp",
    mensajeWhatsapp: "Hola, quiero información sobre los servicios de RDS."
  },

  // -------------------------------------------------------------
  // 11. PIE DE PÁGINA
  // -------------------------------------------------------------
  footer: {
    nota: "Matrícula 48797302 — Cámara de Comercio de Cartagena"
  }
};
