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
    correo: "contacto@reinodediossoluciones.com", // cámbialo por el correo real
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
  //    icono: usa uno de estos valores → "grua" | "escoba" | "engranaje"
  // -------------------------------------------------------------
  servicios: {
    titulo: "Nuestras líneas de servicio",
    subtitulo: "Tres frentes de trabajo, un mismo estándar de cumplimiento.",
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
    trabajos: [
      { imagen: "", etiqueta: "LOGÍSTICA", titulo: "Cargue y descargue de contenedores", descripcion: "Movimiento de mercancía para empresa del sector industrial." },
      { imagen: "", etiqueta: "ASEO INDUSTRIAL", titulo: "Limpieza de bodega", descripcion: "Limpieza profunda de instalaciones antes de puesta en operación." },
      { imagen: "", etiqueta: "APOYO EMPRESARIAL", titulo: "Personal de apoyo en planta", descripcion: "Refuerzo de personal operativo durante temporada alta." }
    ]
  },

  // -------------------------------------------------------------
  // 8. TARIFARIO
  //    Deja "precio" vacío ("") o escribe "Cotizar" si aún no quieres
  //    publicar el valor. Cuando lo tengas, escribe por ejemplo "$120.000".
  // -------------------------------------------------------------
  tarifario: {
    titulo: "Tarifario",
    subtitulo: "Valores de referencia. La tarifa final depende de volumen, horario y frecuencia.",
    notaFinal: "Los precios no incluyen desplazamientos fuera de Cartagena ni turnos nocturnos o festivos, que se cotizan aparte.",
    bloques: [
      {
        nombre: "Logística y carga",
        items: [
          { servicio: "Cargue / descargue por hora", descripcion: "Personal por hora, mínimo 4 horas.", precio: "Cotizar" },
          { servicio: "Cuadrilla completa (por día)", descripcion: "Equipo de carga para jornada completa.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Aseo y limpieza industrial",
        items: [
          { servicio: "Limpieza puntual", descripcion: "Jornada única, bodega o local.", precio: "Cotizar" },
          { servicio: "Contrato mensual", descripcion: "Visitas periódicas según frecuencia acordada.", precio: "Cotizar" }
        ]
      },
      {
        nombre: "Apoyo empresarial",
        items: [
          { servicio: "Personal de apoyo por día", descripcion: "Refuerzo operativo temporal.", precio: "Cotizar" }
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
