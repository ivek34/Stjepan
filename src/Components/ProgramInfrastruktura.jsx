import React, { useState } from "react";
import "./Program.css";
import "./ProgramInfrastruktura.css";

const ProgramInfrastruktura = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  return (
    <div className="program-container">
      <h1>Infrastruktura i komunalni razvoj</h1>
      
      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded1(!expanded1)}
          >
            Svjedoci smo nedostatka dugoročnih prometnih strategija, kontinuiranim neplanskim pristupom stvoren je prometni kaos i nepovezanost svih dijelova našeg grada. Mi smatramo kako je vrijeme da Dugo Selo postane učinkovit i prometno povezan grad.
          </h3>
          <button 
            className="expand-button"
            onClick={() => setExpanded1(!expanded1)}
            aria-expanded={expanded1}
          >
            Proširi
            <span className={`arrow ${expanded1 ? 'expanded' : ''}`}>▼</span>
          </button>
        </div>
        {expanded1 && (
          <ul className="narrative-list">
            <li>Modernizacija gradskih i županijskih prometnica te poboljšanje prometne signalizacije i infrastrukture</li>
            <li>Organizacija kvalitetnog javnog gradskog prijevoza s jasno naznačenim linijama i voznim redom</li>
            <li>Digitalna platforma za praćenje javnog gradskog prijevoza</li>
            <li>Nova regulacija prometa u centru grada - pješačka zona u središtu grada</li>
            <li>Stvaranje uvjeta za početak gradnje dugoselske obilaznice</li>
            <li>Nova uređena parkirališta</li>
            <li>Nove biciklističke staze</li>
            <li>SPOJ DUGOSELKE OBILAZNICE NA ZAGREBAČKU OBILAZNICU (IKEA)</li>
            <li>NOVI ROTOR SPOJ RUGVIČKE-ULICA 53.SAMOSTALNOG BATALJUNA</li>
          </ul>
        )}
      </div>

      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded2(!expanded2)}
          >
            Ključni resursi koji omogućuju svakodnevno funkcioniranje grada i kvalitetu života. Naš grad se ubrzano širi, stvaraju se nova naselja zato je krajnje vrijeme da grad počne pratiti potrebe svojih građana. Komunalno uređen grad nije privilegija strogog centra već jednaki standard svih dijelova našeg Dugog Sela.
          </h3>
          <button 
            className="expand-button"
            onClick={() => setExpanded2(!expanded2)}
            aria-expanded={expanded2}
          >
            Proširi
            <span className={`arrow ${expanded2 ? 'expanded' : ''}`}>▼</span>
          </button>
        </div>
        {expanded2 && (
          <ul className="narrative-list">
            <li>Modernizacija sustava odvodnje oborinskih voda - zaštita od poplava</li>
            <li>Završetak kanalizacije u naseljima Andrilovec, Prozorje i Donje Dvorišće</li>
            <li>Modernizacija vodovodne mreže</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgramInfrastruktura;
