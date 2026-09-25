/* =====================================================================
   RDS · js/main.js
   -----------------------------------------------------------------------
   No es necesario editar este archivo. Toma los datos de js/config.js
   y arma la página. Los textos y precios se cambian en config.js.
   ===================================================================== */

(function () {
  const cfg = window.RDS_CONFIG;

  const ICONS = {
    grua: `<svg viewBox="0 0 48 48" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40h20"/><path d="M14 40V16l16-8"/><path d="M30 8l6 6"/><path d="M16 24h12v12H16z"/><path d="M16 30h12"/><path d="M20 24v12M24 24v12"/></svg>`,
    escoba: `<svg viewBox="0 0 48 48" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M27 6 15 30"/><path d="M15 30 8 42l16-6"/><path d="M24 42h14"/><path d="M20 24l14-4"/><path d="M22 28l13-3"/></svg>`,
    engranaje: `<svg viewBox="0 0 48 48" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="7"/><path d="M24 4v6M24 38v6M44 24h-6M10 24H4M37.5 10.5l-4.2 4.2M14.7 33.3l-4.2 4.2M37.5 37.5l-4.2-4.2M14.7 14.7l-4.2-4.2"/></svg>`,
    montacarga: `<svg viewBox="0 0 48 48" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40h10"/><path d="M12 40V20h4v20"/><path d="M16 24h14"/><path d="M30 24V10h6"/><rect x="16" y="28" width="10" height="12"/><path d="M34 14c1 2 1 4 0 6M38 12c1.5 3 1.5 6 0 9M42 16c.8 1.6.8 3.2 0 4.8"/></svg>`,
    pintura: `<svg viewBox="0 0 48 48" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="9" width="20" height="10" rx="2"/><path d="M18 19v6"/><path d="M14 25h8v5h-8z"/><path d="M18 30v9"/><path d="M31 11l8-4M35 7l4 4"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.62-.32-3.74-.9L3 21l1.9-5.76A8.5 8.5 0 1 1 21 11.5z"/></svg>`,
    pdf: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
    escudo: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/></svg>`
  };

  function txt(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  }

  function applyBasics() {
    document.title = `${cfg.empresa.nombre} — ${cfg.empresa.lema}`;
    txt("brand-name-text", cfg.empresa.nombre);
    txt("brand-sub", cfg.empresa.lema);
    txt("hero-kicker", cfg.hero.kicker);
    txt("hero-sub", cfg.hero.subtitulo);
    txt("hero-cta-primary", cfg.hero.botonPrimario);
    txt("hero-cta-secondary", cfg.hero.botonSecundario);

    // Título del hero conserva la línea dorada (rule) al final
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
      heroTitle.innerHTML = "";
      heroTitle.append(document.createTextNode(cfg.hero.titulo));
      const rule = document.createElement("span");
      rule.className = "rule";
      heroTitle.appendChild(rule);
    }

    txt("m-nombre", cfg.empresa.nombre);
    txt("m-matricula", cfg.empresa.matricula);
    txt("m-estado", cfg.empresa.estado);
    txt("m-ubicacion", cfg.empresa.ubicacionCorta);

    txt("serv-title", cfg.servicios.titulo);
    txt("serv-sub", cfg.servicios.subtitulo);

    txt("about-title", cfg.nosotros.titulo);
    txt("about-p1", cfg.nosotros.parrafo1);
    txt("about-p2", cfg.nosotros.parrafo2);
    txt("about-faith", cfg.nosotros.fraseFe);
    txt("mv-mision", cfg.mision);
    txt("mv-vision", cfg.vision);

    txt("proc-title", cfg.proceso.titulo);
    txt("proc-sub", cfg.proceso.subtitulo);
    txt("proc-personal", cfg.proceso.personal);

    txt("cump-title", cfg.cumplimiento.titulo);
    txt("cump-sub", cfg.cumplimiento.subtitulo);
    txt("cump-foot", cfg.cumplimiento.nota);

    txt("port-title", cfg.portafolio.titulo);
    txt("port-sub", cfg.portafolio.subtitulo);
    txt("port-note", cfg.portafolio.nota);

    txt("tariff-title", cfg.tarifario.titulo);
    txt("tariff-sub", cfg.tarifario.subtitulo);
    txt("tariff-foot", cfg.tarifario.notaFinal);

    txt("legal-title", cfg.legales.titulo);
    txt("legal-sub", cfg.legales.subtitulo);

    txt("contact-title", cfg.contacto.titulo);
    txt("contact-sub", cfg.contacto.subtitulo);
    txt("contact-cta", cfg.contacto.botonWhatsapp);
    const wa = document.getElementById("contact-cta");
    if (wa) wa.href = `https://wa.me/${cfg.empresa.whatsapp}?text=${encodeURIComponent(cfg.contacto.mensajeWhatsapp)}`;

    const phone = document.getElementById("contact-phone");
    if (phone) {
      phone.textContent = cfg.empresa.telefono;
      phone.href = `tel:+${cfg.empresa.whatsapp}`;
    }
    txt("contact-address", cfg.empresa.direccionCompleta);
    const mail = document.getElementById("contact-email");
    if (mail) {
      mail.textContent = cfg.empresa.correo;
      mail.href = `mailto:${cfg.empresa.correo}`;
    }
    txt("contact-hours", cfg.empresa.horario);

    txt("footer-name", cfg.empresa.nombre);
    txt("footer-note", cfg.footer.nota);
    txt("footer-year", `© ${new Date().getFullYear()} ${cfg.empresa.nombre}`);
  }

  function renderServicios() {
    const host = document.getElementById("services-list");
    if (!host) return;
    host.innerHTML = cfg.servicios.lista.map(s => `
      <article class="service">
        <div class="icon">${ICONS[s.icono] || ""}</div>
        <h3>${s.titulo}</h3>
        <p>${s.descripcion}</p>
        <span class="ref">${s.referencia}</span>
      </article>
    `).join("");
  }

  function renderGaleria() {
    // La fila de 3 fotos del inicio usa SIEMPRE las 3 primeras fotos de
    // cfg.portafolio.trabajos (definidas en js/config.js). Así solo hay que
    // cambiar la foto en un lugar (Portafolio) y se actualiza aquí también.
    const host = document.getElementById("gallery-list");
    if (!host || !cfg.portafolio || !cfg.portafolio.trabajos) return;
    const fotos = cfg.portafolio.trabajos.slice(0, 3);
    host.innerHTML = fotos.map(t => `
      <div class="gallery-item">
        <img src="${t.imagen}" alt="${t.titulo || t.etiqueta || ""}" loading="lazy">
      </div>
    `).join("");
  }

  function renderCumplimiento() {
    const host = document.getElementById("cumplimiento-list");
    if (!host) return;
    host.innerHTML = cfg.cumplimiento.items.map(it => `
      <article class="cumplimiento-item">
        <div class="icon">${ICONS.escudo}</div>
        <div><h3>${it.titulo}</h3><p>${it.descripcion}</p></div>
      </article>
    `).join("");
  }

  function renderProceso() {
    const host = document.getElementById("process-list");
    if (!host) return;
    host.innerHTML = cfg.proceso.pasos.map((p, i) => `
      <div class="process-step">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div><h3>${p.titulo}</h3><p>${p.descripcion}</p></div>
      </div>
    `).join("");
  }

  function renderPortafolio() {
    const host = document.getElementById("portfolio-list");
    if (!host) return;
    host.innerHTML = cfg.portafolio.trabajos.map(t => {
      const bg = t.imagen ? `style="background-image:url('${t.imagen}');background-size:cover;background-position:center;"` : "";
      const watermark = t.imagen ? "" : `<div class="wm"><img src="assets/logo.png" alt=""></div>`;
      return `
      <article class="port-card">
        <div class="port-visual" ${bg}>${watermark}<span>${t.etiqueta}</span></div>
        <div class="port-body">
          <h3>${t.titulo}</h3>
          <p>${t.descripcion}</p>
        </div>
      </article>`;
    }).join("");
  }

  function renderTarifario() {
    const host = document.getElementById("tariff-list");
    if (!host) return;
    host.innerHTML = cfg.tarifario.bloques.map(b => `
      <div class="tariff-block">
        <h3>${b.nombre}${b.badge ? `<span class="tariff-badge">${b.badge}</span>` : ""}</h3>
        <div class="tariff-rows">
          ${b.items.map(it => {
            const isQuote = String(it.precio).trim().toLowerCase() === "cotizar";
            let priceHtml;
            if (isQuote) {
              const msg = cfg.tarifario.mensajeCotizacion
                .replace("{servicio}", it.servicio)
                .replace("{linea}", b.nombre);
              const waHref = `https://wa.me/${cfg.empresa.whatsapp}?text=${encodeURIComponent(msg)}`;
              const mailHref = `mailto:${cfg.empresa.correo}?subject=${encodeURIComponent("Cotización: " + it.servicio)}&body=${encodeURIComponent(msg)}`;
              priceHtml = `
                <div class="quote-wrap">
                  <button type="button" class="quote-btn quote-toggle">Cotizar</button>
                  <div class="quote-menu">
                    <a class="quote-option" href="${waHref}" target="_blank" rel="noopener">${ICONS.chat}WhatsApp</a>
                    <a class="quote-option" href="${mailHref}">${ICONS.mail}Correo</a>
                  </div>
                </div>`;
            } else {
              priceHtml = `<span class="fixed">${it.precio}</span>`;
            }
            return `
            <div class="tariff-row">
              <div class="tariff-main">
                <span class="svc">${it.servicio}</span>
                <span class="desc">${it.descripcion}</span>
              </div>
              <div class="tariff-price">${priceHtml}</div>
            </div>`;
          }).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderLegales() {
    const host = document.getElementById("legal-list");
    if (!host) return;
    host.innerHTML = cfg.legales.documentos.map(d => `
      <a class="legal-card" href="${d.archivo}" target="_blank" rel="noopener" download>
        <div class="legal-icon">${ICONS.pdf}</div>
        <div class="legal-body">
          <h3>${d.nombre}</h3>
          <p>${d.descripcion}</p>
        </div>
        <div class="legal-download">${ICONS.download}<span>Descargar</span></div>
      </a>
    `).join("");
  }

  function setupQuoteMenus() {
    const wraps = document.querySelectorAll(".quote-wrap");
    wraps.forEach(wrap => {
      const toggle = wrap.querySelector(".quote-toggle");
      if (!toggle) return;
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = wrap.classList.contains("open");
        wraps.forEach(w => w.classList.remove("open"));
        if (!isOpen) wrap.classList.add("open");
      });
    });
    document.addEventListener("click", () => {
      wraps.forEach(w => w.classList.remove("open"));
    });
  }

  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mobileNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyBasics();
    renderServicios();
    renderGaleria();
    renderCumplimiento();
    renderProceso();
    renderPortafolio();
    renderTarifario();
    renderLegales();
    setupQuoteMenus();
    setupNav();
  });
})();
