// ✏️ EDITA AQUÍ: cambia los textos por los tuyos (nombre, regalos y mensajes)
const NOMBRE = "mi amor";

// Imagen de respaldo por si a algún regalo no le pones "cerrado"
const IMG_CERRADO = "img/regalo.png";

// cerrado = imagen del regalito antes de abrirlo
// foto    = una sola foto que aparece al abrirlo
// fotos   = VARIAS fotos (se muestran como slider). Si pones "fotos", no necesitas "foto"
// trivia  = preguntas con opciones (necesita "portada")
const REGALOS = [
  {
    mes: 1,
    cerrado: "img/regalo1.png",
    fotos: ["img/mes1-1.jpg", "img/mes1-2.jpg", "img/mes1-3.jpg"],
    titulo: "Nuestro comienzo",
    texto:
      "El primer día que nos vimos, con la excusa de la comida y mi excusa de quedarme lo más cerca posible, sentí algo que, hasta el día de hoy, no sé qué es: una mezcla de nervios, ilusión y unas ganas enormes de que cruzáramos miradas. Siempre pienso que fue un encuentro perfecto, espontáneo y deseado. Que nos ayudo a construir donde estamos ahora y a tener esta relación tan hermosa. No fue facil ni fue rapido pero fue justo lo que necesitabamos.",
  },
  {
    mes: 2,
    cerrado: "img/regalo2.png",
    portada: "img/cita1.jpeg", // foto que se ve en la cuadrícula al abrirlo
    fotos: [
      {
        // Introducción: sin "src" = diapositiva solo de texto
        emoji: "💕",
        titulo: "Mi top 3 de nuestras citas",
        texto:
          "Haces que ansíe constantemente tu compañía y cercanía, porque amo cada segundo que paso junto a ti. Cada cita, cada momento juntas, se convierte en una de las cosas más preciadas que tengo, y no por lo que hacemos, sino porque eres tú con quien quiero compartir cada uno de esos bellos momentos. →",
      },
      {
        src: "img/cita3.jpg",
        puesto: "🥉 #3",
        titulo: "14 de febrero",
        texto:
          "Fue un día hermoso, aunque tú estabas más hermosa. Me encantó pasar la tarde juntas, comer sushi e ir al río. Fue de las primeras veces que empecé a darme cuenta de cuánto te amo. Recién nos estábamos conociendo y no me arrepiento de haberme arriesgado a ver a tus papás ese día, porque valió cada segundo por estar contigo, de recorrer la feria juntas y tomarnos la mano a escondidas y nerviosas.",
      },
      {
        src: "img/cita2.jpeg",
        puesto: "🥈 #2",
        titulo: "Pedida de mano",
        texto:
          "Este fue el día en que decidimos que queríamos estar juntas, con nombre y todo; el día en que por fin pude decirte mi novia y cuando me hiciste la mujer más feliz del mundo con un sí. Te lo pedí de la forma más cursi que encontré, porque tú haces que me nazcan las emociones más cursis que conozco. Ese día no solo te convertiste en mi novia; también te convertiste en una de las partes más bonitas de mi vida.",
      },
      {
        src: "img/cita1.jpeg",
        puesto: "🥇 #1",
        titulo: "Cafeteria con el amor de mi vida",
        texto:
          "No sé si esperabas que esta fuera mi top 1, pero esa cita está muy profunda en mi corazón. Verte, ver tu carita de felicidad al recibir flores de mi parte por primera vez, es de lo más hermoso que he visto en mi vida. Estar contigo en un lugar tan bonito, viéndote tan feliz y haciéndome tan feliz, es lo que hace que esta cita sea tan importante para mí. Cada segundo de ese día fue hermoso, pero verte tan feliz a mi lado es un recuerdo que voy a guardar siempre en mi corazón. Te amo ",
      },
    ],
    titulo: "Nuestras citas",
    texto:
      "Cada date que tenemos la llevo en el corazón, y cada que tenemos una nueva tengo una favorita más.",
  },
  {
    mes: 3,
    cerrado: "img/regalo3.png",
    foto: "img/mes3.jpg",
    titulo: "Nuestra playlist",
    texto:
      "Armé una playlist con las canciones que me recuerdan a ti. Toca el botón para escucharla 🎵",
    // Botón con link (opcional). Pega aquí el enlace de tu playlist:
    link: "https://music.youtube.com/playlist?list=PLHiSLWCDMUf4&si=GHiwTaNCYSy37ykj",
    linkTexto: "Escuchar nuestra playlist",
  },
  {
    mes: 4,
    cerrado: "img/regalo4.png",
    portada: "img/foto-trivia.jpg", // obligatoria: la foto que se ve en la cuadrícula al abrirlo
    titulo: "¿Cuánto nos conoces?",
    texto: "Una trivia de nosotras 💕",
    final: "Me encanta saber de ti y que sepas todo de mi amor 💗",
    trivia: [
      {
        p: "¿Dónde fue nuestra primera cita?",
        op: [
          "En un bote",
          "En tu casa",
          "En la feria navideña",
          "Ninguna de las anteriores",
        ],
        ok: 2,
        dato: "Y ahí empezó esta hermosa historia mamor 💕",
      },
      {
        p: "¿Cómo estaba parada cuando me viste por primera vez?",
        op: ["Relajada", "Ansiosa", "Triste", "Tiesa"],
        ok: 3,
        dato: "jsjsjsjs, imposible no acordarse amor",
      },
      {
        p: "¿Dónde nos dimos nuestro primer piquito?",
        op: [
          "En el centro",
          "Bajo un arbolito de la Alameda",
          "En el río",
          "En el cine",
        ],
        ok: 1,
        dato: "Pero te gustó o no? jsjsjsjsj",
      },
      {
        p: "¿Cuánto te amo?",
        op: [
          "Mucho",
          "Muchísimo",
          "Infinito",
          "100.000.000",
          "Todas las anteriores",
        ],
        ok: 4,
        dato: "Nunca dudes cuanto te amo mi vida, con todo mi corazón 💗",
        mal: "Shi… pero hay una mejooor",
      },
    ],
  },
  {
    mes: 5,
    cerrado: "img/regalo5.png",
    portada: "img/mes5.jpeg", // obligatoria: la primera diapositiva no tiene foto
    fotos: [
      {
        diploma: true,
        titulo: "El salón de la fama",
        texto:
          "Hoy entregamos premios muy importantes. Los ganadores son todos la misma persona, la persona que amo →",
      },
      {
        diploma: true,
        sello: "1",
        titulo: "Los ojos más hermosos que he visto",
        texto:
          "Cada que me miras es como si mi mente dejara de correr y por solo ese segundo de contacto visual tuviera paz. Espero poder mirarlos toda la vida.",
      },
      {
        diploma: true,
        sello: "2",
        titulo: "A la que nunca se rinde",
        texto:
          "Veo lo mucho que te esfuerzas en la U, aunque taller te haga sufrir y contexto te estrese. Me siento muy orgullosa ver como mejoras cada día. Vas a llegar lejos, y yo voy a estar ahí aplaudiendote y apoyandote.",
      },
      {
        diploma: true,
        sello: "3",
        titulo: "A la persona más humilde",
        texto:
          "Haces cosas increíbles y nunca lo presumes. Esa forma de ser tuya es una de las cosas que más admiro de ti.",
      },
      {
        diploma: true,
        sello: "4",
        titulo: "Al corazón que más me cuida",
        texto:
          "Siempre estás pendiente de mí, de cómo estoy y de si comí. Contigo me siento siempre acompañada y se que siempre estaras ahi para sostenerme si te necesito.",
      },
      {
        diploma: true,
        sello: "5",
        titulo: "A la persona más increíble que conozco",
        texto:
          "No sé cómo lo haces, pero cada día me demuestras que eres única. Me siento muy afortunada de haberte conocido y tenerte en mi vida y como mi novia.",
      },
      {
        diploma: true,
        sello: "★",
        titulo: "A la mejor novia del mundo mundial",
        texto:
          "Y el premio final se lo lleva, sin competencia, la mejor novia del universo. Gracias por ser tú. Te amo 3.000.000 💗",
      },
    ],
    titulo: "Salón de la fama",
    texto: "Premios que solo podía ganar una persona 🏅",
  },
  {
    mes: 6,
    cerrado: "img/regalo6.png",
    foto: "img/mes6.jpg",
    titulo: "Seis meses… ¡y los que vienen!",
    texto:
      "Gracias por estos seis meses. Quiero muchos más contigo. Te amo, " +
      NOMBRE +
      " 💗",
  },
];
const $ = (id) => document.getElementById(id);
const show = (id) => {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("on"));
  $(id).classList.add("on");
};
function hearts(n = 24) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = ["💗", "💖", "💕", "🌸", "✨"][i % 5];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDelay = Math.random() * 1.5 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }
}
$("envelope").onclick = () => {
  $("envelope").classList.add("abriendo");
  setTimeout(() => {
    show("s2");
    hearts(10);
  }, 700);
};

let nos = 0;
const sad = [
  {
    t: "¿Por qué no quieres mi regalo?",
    s: "Se me aguo el ojito…",
    img: "img/sticker-triste1.png",
  },
  {
    t: "Por favor, ábrelo…",
    s: "Lo hice pensando en ti toda la semana.",
    img: "img/sticker-triste2.png",
  },
  {
    t: "Me wa poner a llorar",
    s: "Mira el botón se hace mas grande, como mi amor por ti, Ya presionalo pliiis",
    img: "img/sticker-triste3.png",
  },
];
$("no").onclick = () => {
  const m = sad[Math.min(nos, sad.length - 1)];
  nos++;
  $("q").textContent = m.t;
  $("qsub").textContent = m.s;
  $("sticker").src = m.img;
  $("yes").style.transform = "scale(" + Math.min(1 + nos * 0.22, 1.8) + ")";
  $("yes").style.margin = nos * 6 + "px";
  $("no").style.transform = "scale(" + Math.max(1 - nos * 0.12, 0.55) + ")";
};
$("yes").onclick = () => {
  show("s3");
  hearts(30);
};

// ---- Slider de fotos ----
// Cada foto puede ser un texto ("img/a.jpg") o un objeto con puesto, titulo y texto.
// Si un objeto no tiene "src", se muestra como diapositiva de solo texto.
const listaFotos = (r) =>
  (r.fotos || [r.foto]).map((f) => (typeof f === "string" ? { src: f } : f));

function abrirFotos(r) {
  const fotos = listaFotos(r);
  // si hay diplomas, el slider se ensancha y se ajusta (ver .dip-mode en el CSS)
  document.querySelector(".slider").classList.toggle(
    "dip-mode",
    fotos.some((f) => f.diploma),
  );
  const slides = $("slides");
  const dots = $("dots");
  slides.innerHTML = "";
  dots.innerHTML = "";
  fotos.forEach((f, i) => {
    const fig = document.createElement("figure");
    fig.className = "slide";
    if (f.diploma) {
      // diapositiva estilo diploma: Certificado + puesto + título + texto + sello
      fig.classList.add("diploma");
      const add = (cls, txt) => {
        const sp = document.createElement("span");
        sp.className = cls;
        sp.textContent = txt;
        fig.appendChild(sp);
      };
      add("dip-cert", "Certificado");
      if (f.puesto) add("dip-n", f.puesto);
      add("dip-t", f.titulo);
      add("dip-p", f.texto);
      if (f.sello) add("dip-seal", f.sello);
    } else if (f.src) {
      const im = document.createElement("img");
      im.src = f.src;
      im.alt = f.titulo || r.titulo;
      fig.appendChild(im);
    } else {
      // diapositiva de texto (introducción)
      fig.classList.add("intro");
      if (f.emoji) {
        const e = document.createElement("span");
        e.className = "intro-e";
        e.textContent = f.emoji;
        fig.appendChild(e);
      }
    }
    if (f.puesto && !f.diploma) {
      const bd = document.createElement("span");
      bd.className = "badge";
      bd.textContent = f.puesto;
      fig.appendChild(bd);
    }
    if (!f.diploma && (f.titulo || f.texto)) {
      const cap = document.createElement("figcaption");
      if (f.titulo) {
        const t = document.createElement("span");
        t.className = "cap-t";
        t.textContent = f.titulo;
        cap.appendChild(t);
      }
      if (f.texto) {
        const p = document.createElement("span");
        p.className = "cap-p";
        p.textContent = f.texto;
        cap.appendChild(p);
      }
      fig.appendChild(cap);
    }
    slides.appendChild(fig);
    const d = document.createElement("span");
    d.className = "dot" + (i === 0 ? " on" : "");
    dots.appendChild(d);
  });
  const varias = fotos.length > 1;
  $("prev").hidden = !varias;
  $("next").hidden = !varias;
  dots.hidden = !varias;
  slides.scrollLeft = 0;
}
$("slides").addEventListener("scroll", () => {
  const s = $("slides");
  const i = Math.round(s.scrollLeft / s.clientWidth);
  document
    .querySelectorAll("#dots .dot")
    .forEach((d, k) => d.classList.toggle("on", k === i));
});
$("prev").onclick = () =>
  $("slides").scrollBy({ left: -$("slides").clientWidth, behavior: "smooth" });
$("next").onclick = () =>
  $("slides").scrollBy({ left: $("slides").clientWidth, behavior: "smooth" });

// ---- Trivia ----
function iniciarTrivia(r) {
  const box = $("trivia");
  let n = 0,
    limpias = 0;
  const el = (tag, cls, txt) => {
    const e = document.createElement(tag);
    e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };
  function pregunta() {
    const q = r.trivia[n];
    let fallo = false;
    box.innerHTML = "";
    box.append(
      el("p", "tv-count", "Pregunta " + (n + 1) + " de " + r.trivia.length),
      el("p", "tv-q", q.p),
    );
    const fb = el("p", "tv-fb");
    const sig = el(
      "button",
      "b yes tv-next",
      n + 1 < r.trivia.length ? "Siguiente →" : "Ver resultado 💖",
    );
    sig.hidden = true;
    sig.onclick = () => {
      n++;
      n < r.trivia.length ? pregunta() : final();
    };
    const ops = q.op.map((txt, k) => {
      const b = el("button", "tv-op", txt);
      b.onclick = () => {
        if (k === q.ok) {
          b.classList.add("bien");
          ops.forEach((o) => (o.disabled = true));
          fb.textContent = q.dato || "¡Correcto! 💖";
          sig.hidden = false;
          if (!fallo) limpias++;
          hearts(8);
        } else {
          fallo = true;
          b.classList.add("mal");
          b.disabled = true;
          fb.textContent = q.mal || "Mmm, casi… intenta otra vez 🥺";
        }
      };
      return b;
    });
    box.append(...ops, fb, sig);
  }
  function final() {
    box.innerHTML = "";
    box.append(
      el("p", "tv-q", limpias + " de " + r.trivia.length + " a la primera 💞"),
      el("p", "tv-fb", r.final || "Me conoces muy bien 💗"),
    );
  }
  pregunta();
}

const opened = new Set();
function render() {
  $("grid").innerHTML = "";
  REGALOS.forEach((r, i) => {
    const abierto = opened.has(i);
    const b = document.createElement("button");
    b.className = "gift" + (abierto ? " open" : "");
    b.innerHTML =
      '<img class="gift-img' +
      (abierto ? " foto" : "") +
      '" src="' +
      (abierto ? r.portada || listaFotos(r)[0].src : r.cerrado || IMG_CERRADO) +
      '" alt="" />' +
      "<b>Mes " +
      r.mes +
      "</b>" +
      "<small>" +
      (abierto ? r.titulo : "Toca para abrir") +
      "</small>";
    b.onclick = () => {
      opened.add(i);
      // trivia o slider de fotos, según el regalo
      document.querySelector(".slider").hidden = !!r.trivia;
      $("trivia").hidden = !r.trivia;
      if (r.trivia) {
        $("dots").hidden = true;
        iniciarTrivia(r);
      } else {
        abrirFotos(r);
      }
      const enlace = $("mL");
      enlace.hidden = !r.link;
      if (r.link) {
        enlace.href = r.link;
        enlace.textContent = r.linkTexto || "Abrir enlace 🔗";
      }
      $("mT").textContent = r.titulo;
      $("mP").textContent = r.texto;
      $("modal").classList.add("on");
      hearts(12);
      render();
    };
    $("grid").appendChild(b);
  });
  $("count").textContent =
    opened.size === REGALOS.length
      ? "¡Abriste todos! Te amo 💞"
      : opened.size + " de " + REGALOS.length + " abiertos";
}
$("close").onclick = () => $("modal").classList.remove("on");
// cerrar tocando afuera de la tarjeta
$("modal").addEventListener("click", (e) => {
  if (e.target === $("modal")) $("modal").classList.remove("on");
});
// (opcional) cerrar con la tecla Esc en computador
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $("modal").classList.remove("on");
});
render();
