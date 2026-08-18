"use client";
import { useState } from "react";

const whatsapp = "https://wa.me/?text=Hola%20Mundo%20de%20COLOR%20Marvi%2C%20quiero%20conocer%20sus%20libros%20para%20colorear";
const collections = [
  { eyebrow:"Descubrir y aprender", title:"Animales imaginarios", copy:"Criaturas amables para explorar formas, historias y colores con libertad.", accent:"blue", mark:"✦", status:"Primera colección" },
  { eyebrow:"Respirar y reconectar", title:"Mandalarte", copy:"Diseños envolventes para bajar el ritmo y regalarte un momento solo para ti.", accent:"lilac", mark:"❋", status:"Próximamente" },
  { eyebrow:"Imaginar y expresarse", title:"Universos de color", copy:"Escenas abiertas que invitan a inventar, probar y crear sin una única respuesta.", accent:"coral", mark:"✺", status:"Próximamente" },
];
const faqs = [
  ["¿Los libros son solo para niños?", "No. Creamos por experiencias y momentos, no por límites de edad. Encontrarás propuestas sencillas, intermedias y detalladas."],
  ["¿Qué recibo en cada formato?", "La edición digital combina modelos pintados con páginas para colorear; la imprimible contiene láminas en blanco y negro; y la física llega impresa y anillada."],
  ["¿Puedo imprimir el archivo más de una vez?", "La licencia personal te permite imprimirlo para tu propio uso. Para aulas, talleres o instituciones tendremos licencias especiales."],
  ["¿También venden materiales para colorear?", "Muy pronto ofreceremos kits. Mientras tanto, puedes usar los lápices, crayones o plumones que ya forman parte de tu mundo creativo."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Mundo de Color Marvi, inicio"><img src="/logo-marvi.png" alt="Mundo de COLOR Marvi"/></a>
      <button className="menuButton" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú"><span/><span/></button>
      <nav className={menuOpen?"nav open":"nav"} aria-label="Navegación principal">
        <a href="#colecciones" onClick={()=>setMenuOpen(false)}>Colecciones</a><a href="#formatos" onClick={()=>setMenuOpen(false)}>Formatos</a><a href="#nosotros" onClick={()=>setMenuOpen(false)}>Nuestro mundo</a><a href="#preguntas" onClick={()=>setMenuOpen(false)}>Preguntas</a>
      </nav>
      <a className="button small headerCta" href={whatsapp} target="_blank" rel="noreferrer">Quiero mi libro <span>↗</span></a>
    </header>

    <section className="hero" id="inicio">
      <div className="heroCopy">
        <p className="kicker"><span>✦</span> Un espacio para crear a tu manera</p>
        <h1>Haz un mundo<br/>de color <em>para ti.</em></h1>
        <p className="heroLead">Siempre hay una forma de crear que puede hacerte sentir bien y llevar tu imaginación a un lugar diferente.</p>
        <div className="heroActions"><a className="button" href="#colecciones">Encuentra tu colección <span>↓</span></a><a className="textLink" href="#nosotros">Conoce nuestro propósito <span>→</span></a></div>
        <div className="trustRow"><span>✓ Para cualquier edad</span><span>✓ Tres formatos para elegir</span></div>
      </div>
      <div className="heroVisual" aria-label="Libros creativos de Mundo de Color Marvi">
        <div className="sun"/><div className="cloud one"/><div className="cloud two"/>
        <div className="book bookBack"><span>Imagina</span><b>✦</b></div><div className="book bookFront"><span>Crea</span><b>♡</b></div>
        <div className="pencils"><i/><i/><i/></div><span className="spark spark1">✦</span><span className="spark spark2">✿</span>
        <div className="visualNote">Tu manera de crear<br/><strong>también es arte.</strong></div>
      </div>
    </section>

    <section className="collections section" id="colecciones">
      <div className="sectionHead"><div><p className="kicker">Colecciones con intención</p><h2>¿Qué necesitas<br/><em>hoy?</em></h2></div><p>Elige por lo que deseas vivir, no por tu edad. Cada libro abre una experiencia distinta y deja que el color haga el resto.</p></div>
      <div className="collectionGrid">{collections.map((item,index)=><article className={"collectionCard "+item.accent} key={item.title}>
        <div className="cardTop"><span>{item.status}</span><b>0{index+1}</b></div><div className="miniCover"><div className="coverMark">{item.mark}</div><small>Mundo de color</small><strong>{item.title}</strong><i>Un libro para crear</i></div>
        <p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.copy}</p>{index===0?<a href="#formatos">Ver formatos <span>→</span></a>:<span className="coming">Avísame cuando llegue</span>}
      </article>)}</div>
    </section>

    <section className="formats section" id="formatos">
      <div className="formatIntro"><p className="kicker">Una colección, tres maneras de vivirla</p><h2>Elige lo que mejor<br/>se adapte <em>a tu momento.</em></h2><p>Empieza en minutos, imprime cuando quieras o disfruta la experiencia completa en tus manos.</p><div className="softQuote">“No hay una sola forma correcta de llenar el mundo de color.”</div></div>
      <div className="priceList">
        <article><div className="formatIcon">◫</div><div className="formatText"><div><span>Digital ilustrada</span><b>S/5</b></div><p>Modelos pintados para inspirarte + dibujos listos para colorear.</p><small>Acceso inmediato</small></div></article>
        <article className="featured"><div className="popular">Más elegido</div><div className="formatIcon">⇩</div><div className="formatText"><div><span>Lista para imprimir</span><b>S/5</b></div><p>Archivo PDF en blanco y negro para imprimir cuando lo necesites.</p><small>Descarga inmediata</small></div></article>
        <article><div className="formatIcon">▥</div><div className="formatText"><div><span>Libro físico</span><b>S/30</b></div><p>Impreso y anillado, listo para crear, compartir o regalar.</p><small>Entrega coordinada</small></div></article>
        <a className="button full" href={whatsapp} target="_blank" rel="noreferrer">Elegir por WhatsApp <span>↗</span></a>
      </div>
    </section>

    <section className="purpose section" id="nosotros">
      <div className="purposeArt"><div className="bigCircle"><img src="/logo-marvi.png" alt=""/></div><span className="orbit o1">crear</span><span className="orbit o2">sentir</span><span className="orbit o3">compartir</span></div>
      <div className="purposeCopy"><p className="kicker">Nuestro mundo también es el tuyo</p><h2>Todos llevamos<br/>un artista <em>dentro.</em></h2><p className="lead">Cada persona vive de manera distinta cada etapa. Por eso creemos que la magia del color puede acompañarte tal como eres y en el momento en que estás.</p><p>Aquí puedes aprender, expresarte, compartir, bajar el ritmo o simplemente disfrutar. Sin comparaciones. Sin una manera “correcta”. Solo tú, tu imaginación y un nuevo comienzo en cada página.</p><div className="values"><span><b>01</b> Crear con libertad</span><span><b>02</b> Incluir de verdad</span><span><b>03</b> Disfrutar el proceso</span></div></div>
    </section>

    <section className="faq section" id="preguntas">
      <div className="faqIntro"><p className="kicker">Antes de empezar</p><h2>Preguntas que<br/>también <em>suman color.</em></h2><p>Si aún tienes dudas, conversemos. Queremos ayudarte a encontrar el libro que conecte contigo.</p><a className="textLink" href={whatsapp} target="_blank" rel="noreferrer">Hablar por WhatsApp <span>↗</span></a></div>
      <div className="accordion">{faqs.map(([q,a],index)=><div className="faqItem" key={q}><button onClick={()=>setOpenFaq(openFaq===index?null:index)} aria-expanded={openFaq===index}><span>{q}</span><b>{openFaq===index?"−":"+"}</b></button>{openFaq===index&&<p>{a}</p>}</div>)}</div>
    </section>

    <section className="finalCta"><span className="ctaStar">✦</span><p>Tu próximo momento creativo empieza aquí</p><h2>Dale color a tu mundo.<br/><em>Hazlo tuyo.</em></h2><a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Quiero encontrar mi libro <span>↗</span></a></section>
    <footer><div className="footerBrand"><img src="/logo-marvi.png" alt="Mundo de COLOR Marvi"/><p>Libros para aprender, expresarte, compartir y reconectar.</p></div><div><b>Explora</b><a href="#colecciones">Colecciones</a><a href="#formatos">Formatos y precios</a><a href="#nosotros">Nuestro propósito</a></div><div><b>Conversemos</b><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><span>Perú</span></div><div className="footerBottom">© 2026 Mundo de COLOR Marvi · Hecho con cariño y mucho color.</div></footer>
    <a className="whatsappFloat" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">✆<span>Escríbenos</span></a>
  </main>;
}
