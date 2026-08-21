"use client";
import { useState } from "react";

type Collection={id:string;title:string;audience:string;description:string;symbol:string;tone:string;available?:boolean;count?:string};
const collections:Collection[]=[
 {id:"animalitos",title:"Animalitos en aventuras increíbles",audience:"Niños de 5 a 6 años",description:"Gatitos astronautas, perritos piratas, dinosaurios de cumpleaños y muchos amigos esperan recibir color.",symbol:"✦",tone:"rose",available:true,count:"40 ilustraciones · Diploma de honor"},
 {id:"dinosaurios",title:"Dinosaurios sorprendentes",audience:"Niños de 4 a 8 años",description:"Una aventura prehistórica con dinosaurios amigables, divertidos y sorprendentes.",symbol:"◆",tone:"mint"},
 {id:"mandalas",title:"Mandalas para relajarte",audience:"Jóvenes y adultos",description:"Diseños para pintar con calma, alejarse de las pantallas y disfrutar el momento.",symbol:"❋",tone:"violet"},
 {id:"selva",title:"Animales de la selva peruana",audience:"Niños, jóvenes y amantes de la naturaleza",description:"Descubre nuestra biodiversidad mientras llenas cada ilustración de color.",symbol:"♣",tone:"green"},
 {id:"peru",title:"Flora y fauna del Perú",audience:"Todas las edades · Uso educativo",description:"Un recorrido creativo por la costa, sierra y selva del Perú.",symbol:"✿",tone:"coral"},
 {id:"magicos",title:"Animales mágicos",audience:"Niños de 5 a 9 años",description:"Criaturas fantásticas y aventuras donde la imaginación no tiene límites.",symbol:"★",tone:"blue"},
 {id:"granja",title:"Animales de la granja",audience:"Niños de 3 a 6 años",description:"Vacas, cerditos, ovejas y otros amigos ayudan a aprender mientras pintan.",symbol:"●",tone:"yellow"},
 {id:"mariposas",title:"Mariposas maravillosas",audience:"Niños, jóvenes y adultos",description:"Belleza, formas y colores con diseños de distintos niveles de detalle.",symbol:"❦",tone:"lilac"},
 {id:"salvajes",title:"Animales salvajes",audience:"Niños de 5 a 9 años",description:"Leones, tigres, elefantes y jirafas en una experiencia llena de naturaleza.",symbol:"▲",tone:"orange"},
 {id:"zoologico",title:"Un día en el zoológico",audience:"Niños de 4 a 8 años",description:"Un recorrido divertido para conocer animales y descubrir sus características.",symbol:"▦",tone:"teal"},
 {id:"mar",title:"Aventuras bajo el mar",audience:"Niños de 5 a 9 años",description:"Delfines, ballenas, tortugas y peces en un mundo de burbujas y color.",symbol:"≈",tone:"ocean"},
];
const wa=(message:string)=>`https://wa.me/51993079635?text=${encodeURIComponent(message)}`;

export default function Home(){
 const [selected,setSelected]=useState<Collection|null>(null);
 const [menuOpen,setMenuOpen]=useState(false);
 return <main>
  <header><div className="wrap nav">
   <a href="#inicio" className="logo"><img src="/logo-marvi.png" alt="Mundo de Color Marvi"/></a>
   <nav className={menuOpen?"mobile-open":""} aria-label="Navegación principal"><a onClick={()=>setMenuOpen(false)} href="#inicio">Inicio</a><a onClick={()=>setMenuOpen(false)} href="#nosotros">Nosotros</a><a onClick={()=>setMenuOpen(false)} href="#productos">Productos</a><a onClick={()=>setMenuOpen(false)} href="#personaliza">Personaliza</a><a onClick={()=>setMenuOpen(false)} href="#contacto">Contacto</a><a className="mobile-wa" href={wa("Hola, Mundo de Color Marvi. Quiero conocer sus productos.")} target="_blank" rel="noreferrer">WhatsApp ↗</a></nav>
   <button className={`menu-toggle ${menuOpen?"active":""}`} onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label={menuOpen?"Cerrar menú":"Abrir menú"}><span></span><span></span><span></span></button>
   <a className="bag-btn" href={wa("Hola, Mundo de Color Marvi. Quiero conocer sus productos y encontrar algo especial para pintar.")} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
  </div></header>

  <section className="hero" id="inicio"><div className="wrap hero-grid">
   <div className="hero-copy"><span className="kicker">Mundo de Color Marvi · Experiencias creativas</span><h1>Todo un mundo<br/>para <em>pintar.</em></h1><p>Explora books para bebés, niños, jóvenes y adultos. Encuentra cuentos, animales, mandalas y experiencias listas para descargar, imprimir y llenar de color.</p><p className="hero-question">¿No encuentras lo que imaginas? Lo creamos especialmente para ti, tu familia, tus alumnos o tu institución.</p><div className="actions"><a href="#productos" className="primary">Explorar productos <b>↘</b></a><a href="#personaliza" className="secondary">Quiero un diseño personalizado</a></div></div>
   <div className="hero-stage"><div className="brand-disc"><img src="/logo-marvi.png" alt=""/></div><div className="floating-note note-one"><b>Muchas</b><span>colecciones</span></div><div className="floating-note note-two"><b>2</b><span>formas de vivirlas</span></div><div className="spark s1">✦</div><div className="spark s2">●</div><div className="spark s3">✦</div></div>
  </div></section>

  <section className="manifest" id="nosotros"><div className="wrap manifest-grid manifest-content"><h2>Nacimos para volver<br/>a <em>conectar.</em></h2><div><p>Mundo de Color Marvi nació de momentos sencillos: un niño buscando algo especial para pintar, una familia queriendo convertir el amor por su mascota en un recuerdo y la necesidad de encontrar una pausa creativa en medio de la rutina.</p><p>Creemos que pintar es una manera de alejarnos por un momento de las pantallas, relajarnos, aprender, imaginar y reconectar con aquello que nos hace felices.</p></div></div><div className="wrap statement">Lo que amas también puede convertirse en color.</div></section>

  <section className="catalog" id="productos"><div className="wrap">
   <div className="catalog-head"><div><span className="kicker">Productos</span><h2>Encuentra algo que<br/>ames pintar</h2></div><p>Explora nuestros productos para bebés, niños, jóvenes y adultos. Elige el que más te guste y decide cómo quieres vivir la experiencia.</p></div>
   <div className="shelf-label"><span>Nuestras colecciones</span><span>11 experiencias</span></div>
   <div className="product-grid">{collections.map((c,i)=><article className="product-card" key={c.id}>
    <div className="cover cover-placeholder"><small>MUNDO DE COLOR MARVI</small><span>{c.symbol}</span><b>{String(i+1).padStart(2,"0")}</b></div>
    <div className="product-body"><small>{c.audience}</small><h3>{c.title}</h3><p>{c.description}</p>{c.count&&<em>{c.count}</em>}<div className="product-meta"><span>{c.available?"Digital S/5 · Físico S/30":"Próximamente"}</span><button onClick={()=>setSelected(c)}>Ver colección ↗</button></div></div>
   </article>)}</div>
  </div></section>

  <section className="journey"><div className="wrap"><span className="kicker">Así se vive Mundo de Color Marvi</span><h2>Encuentra, elige<br/>y dale color</h2><div className="journey-grid">{[
   ["01","Encuentra","Explora por edad, temática o experiencia."],
   ["02","Descubre","Conoce el contenido y sus presentaciones."],
   ["03","Elige","Digital para imprimir o físico listo para pintar."],
   ["04","Solicita","Haz tu pedido de manera sencilla por WhatsApp."],
   ["05","Crea","Inspírate o inventa un mundo completamente distinto."],
  ].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><blockquote>No existe una única manera correcta de llenar tu mundo de color.</blockquote></div></section>

  <section className="ways"><div className="wrap"><div className="ways-head"><span className="kicker">Una colección, dos maneras de vivirla</span><h2>¿Cómo quieres<br/>comenzar?</h2></div><div className="ways-grid">
   <article><span>01 · Acceso inmediato</span><h3>Experiencia digital</h3><h4>Mira, descarga, imprime y crea.</h4><ul><li>Revista digital interactiva</li><li>Ilustraciones pintadas y en blanco y negro</li><li>PDF descargable listo para imprimir</li><li>Acceso desde celular, tablet o computadora</li><li>Uso personal</li></ul><strong>Desde S/5</strong><a href={wa("Hola, Mundo de Color Marvi. Quiero adquirir la experiencia digital.")} target="_blank" rel="noreferrer">Quiero la experiencia digital ↗</a></article>
   <article className="physical"><span>02 · Entrega coordinada</span><h3>Edición física</h3><h4>Recíbela lista para pintar.</h4><ul><li>Book impreso y anillado</li><li>Ilustraciones listas para pintar</li><li>Portada a color</li><li>Presentación para usar o regalar</li><li>Acceso a la revista digital ilustrada</li></ul><strong>Desde S/30</strong><a href={wa("Hola, Mundo de Color Marvi. Quiero adquirir una edición física.")} target="_blank" rel="noreferrer">Quiero la edición física ↗</a></article>
  </div><p className="shipping">El precio depende del contenido de cada colección. El envío físico se calcula por separado según la ubicación.</p></div></section>

  <section className="custom" id="personaliza"><div className="wrap"><div className="custom-head"><div><span className="kicker">Personaliza</span><h2>Si no lo encuentras,<br/>lo creamos para ti</h2></div><p>Convierte una fotografía, una mascota, una persona, una historia o una idea en una experiencia única para pintar.</p></div><div className="custom-grid">{[
   ["Diseño personalizado","Ideas, recuerdos y personajes creados especialmente para pintar.","✦"],
   ["Tu mascota para pintar","Transformamos su fotografía en una ilustración o aventura especial.","●"],
   ["Tu familia para pintar","Convierte un recuerdo familiar en una experiencia para compartir.","♥"],
   ["Books personalizados","Portada, temática, ilustraciones, nombre e historia creados para ti.","▤"],
   ["Notebooks personalizados","Portada, colores, tamaño, páginas y mensajes con identidad propia.","□"],
   ["Para docentes y escuelas","Colecciones educativas según la edad, tema y objetivo de aprendizaje.","✎"],
   ["Instituciones y eventos","Productos adaptados a talleres, empresas y actividades especiales.","◆"],
  ].map((x,i)=><article key={x[0]}><div className="custom-image"><span>{x[2]}</span><small>IMAGEN PERSONALIZABLE</small></div><div className="custom-body"><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p><a href={wa(`Hola, Mundo de Color Marvi. Quiero información sobre: ${x[0]}.`)} target="_blank" rel="noreferrer">Quiero personalizarlo ↗</a></div></article>)}</div>
   <div className="custom-flow"><span>Tú imaginas</span><strong>Idea → experiencia → diseño → formato → color</strong><a href={wa("Hola, Mundo de Color Marvi. Tengo una idea diferente y quiero convertirla en una experiencia para pintar.")} target="_blank" rel="noreferrer">Cuéntanos tu idea ↗</a></div>
  </div></section>

  <section className="contact" id="contacto"><div className="wrap contact-grid"><div><span className="kicker">Contacto</span><h2>Cuéntanos qué<br/>quieres pintar</h2><p>Te ayudaremos a elegir, adquirir o personalizar tu próxima experiencia.</p><a className="contact-wa" href={wa("Hola, Mundo de Color Marvi. Quiero conocer sus productos y encontrar algo especial para pintar.")} target="_blank" rel="noreferrer">Conversar por WhatsApp <b>↗</b></a></div><div className="contact-list"><article><small>WhatsApp</small><a href="tel:+51993079635">+51 993 079 635</a></article><article><small>Correo</small><a href="mailto:informes.marvicolor@gmail.com">informes.marvicolor@gmail.com</a></article><article><small>Instagram</small><a href="https://instagram.com/marvicolor" target="_blank" rel="noreferrer">@marvicolor ↗</a></article><article><small>TikTok</small><a href="https://www.tiktok.com/@design.marvi.pe" target="_blank" rel="noreferrer">@design.marvi.pe ↗</a></article><article><small>Facebook</small><span>Mundo de Color Marvi</span></article><article><small>Ubicación</small><span>Lima, Perú · Pedidos en línea</span></article></div></div></section>

  <section className="closing"><div className="wrap closing-inner"><span>¿Empezamos?</span><h2>Lo que imaginas también<br/>puede convertirse en <em>color.</em></h2><div className="closing-actions"><a href="#productos">Explorar productos</a><a href="#personaliza">Personalizar una experiencia</a></div></div></section>

  <footer><div className="wrap footer-top"><img src="/logo-marvi.png" alt="Mundo de Color Marvi"/><p>Todo un mundo para pintar. Colecciones y experiencias para todas las edades.</p><div><a href="#inicio">Inicio</a><a href="#nosotros">Nosotros</a><a href="#productos">Productos</a><a href="#personaliza">Personaliza</a><a href="#contacto">Contacto</a></div></div><div className="wrap footer-bottom"><span>© 2026 Mundo de Color Marvi · Lima, Perú</span><a href="mailto:informes.marvicolor@gmail.com">informes.marvicolor@gmail.com</a></div></footer>
  <a className="wa" href={wa("Hola, Mundo de Color Marvi. Quiero conocer sus productos.")} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp"><span>✆</span><b>WhatsApp</b></a>

  {selected&&<><button className="overlay" onClick={()=>setSelected(null)} aria-label="Cerrar detalle"></button><aside className="drawer product-drawer"><div className="drawer-head"><div><small>{selected.audience}</small><h2>{selected.title}</h2></div><button onClick={()=>setSelected(null)}>×</button></div><div className="drawer-cover cover cover-placeholder"><span>{selected.symbol}</span></div><p>{selected.description}</p>{selected.available?<><div className="drawer-option"><b>Experiencia digital</b><span>S/5</span></div><div className="drawer-option"><b>Edición física</b><span>S/30</span></div><a className="send" href={wa(`Hola, Mundo de Color Marvi. Quiero adquirir: ${selected.title}.`)} target="_blank" rel="noreferrer">Elegir por WhatsApp <b>↗</b></a></>:<><div className="soon">Nueva experiencia en camino</div><a className="send" href={wa(`Hola, Mundo de Color Marvi. Quiero saber cuándo estará disponible: ${selected.title}.`)} target="_blank" rel="noreferrer">Quiero recibir información <b>↗</b></a></>}</aside></>}
 </main>
}
