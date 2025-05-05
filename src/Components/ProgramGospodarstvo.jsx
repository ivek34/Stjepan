import React, { useState } from "react";
import "./Program.css";
import "./ProgramGospodarstvo.css";

const ProgramGospodarstvo = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <div className="program-container">
      <h1>Gospodarstvo</h1>
      
      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded1(!expanded1)}
          >
            Obrtništvo - Mi potičemo razvoj obrtništva jer time osiguravamo razvoj važne gospodarske grane koja čuva bogatu tradiciju, ističe rast i razvoj, donosi inovacije. Obrtnike vidimo kao važne dionike održivosti i prosperiteta u Dugom Selu.
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
            <li>U SURADNJI S OBRTNIČKOM KOMOROM UGOVORNE STIPENDIJE ZA UČENIKE STRUKOVNIH ZANIMANJA</li>
            <li>OLAKŠICE ZA OBRTE KOJI ZAPOŠLJAVAJU MLADE</li>
            <li>U SURADNJI S OBRTNIČKOM KOMOROM SERVIS ASISTENCIJE ZA OBRTNIKE</li>
            <li>DIGITALNI REGISTAR OBRTNIKA</li>
            <li>SUORGANIZACIJA TRADICIJSKIH OBRTNIČKIH SAJMOVA I MANIFESTACIJA</li>
            <li>PROMOCIJA OBRTNIČKIH ZANIMANJA</li>
            <li>OSLOBOĐENJE NAPLATE GRADSKIH POREZA ZA MLADE OBRTNIKE I OBRTNIKE ŽENE</li>
            <li>EDUKACIJE O ODRŽIVOM POSLOVANJU</li>
            <li>POTPORE ZA EKOLOŠKI PRIHVATLJIVE TEHNOLOGIJE I RECIKLAŽU MATERIJALA</li>
          </ul>
        )}
      </div>

      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded2(!expanded2)}
          >
            Poduzetništvo - Poduzetništvo vidimo kao važan faktor stvaranje i očuvanja radnih mjesta. Kroz edukacije, financijske poticaje i smanjenje administrativnih zapreka stvaramo uvjete za daljni napredak i prosperitet dugoselskog poduzetništva. S glavnim aspektom na mikro, mala i srednja poduzeća.
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
            <li>Postupno smanjenje poreznih opterećenja za mikro, mala i srednja poduzeća</li>
            <li>Financijske subvencije za nove poduzetnike</li>
            <li>Financijske potpore za poduzetnike koji ulažu u istraživanje, razvoj i implementaciju novih tehnologija</li>
            <li>Organizacija radionica i seminara za poduzetnike za unapređenje njihovih poduzetničkih znanja</li>
            <li>Sufinanciranje troškova za sudjelovanje na izložbama i sajmovima</li>
            <li>Jačanje suradnje između Grada Dugog sela, sustava obrazovanja i poduzetnika</li>
          </ul>
        )}
      </div>

      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded3(!expanded3)}
          >
            Poljoprivreda i proizvodnja-Broj stanovnika u Dugom Selu u stalnom je porastu i u zajednici jača svijest kako je kvalitetna i lokalno dostupna hrana izrazito bitna. Ovakve trendove vidimo kao izrazite prilike da ojačamo lokalna Obiteljska poljoprivredna gospodarstva. Uz prepoznatljivo vinogradarstvo i podrumarstvo dugoslekog kraja posebnu pozornost dajemo razvoju povrtlarstva i voćarstva. Lokalni OPG temelj kvalitetne, zdrave i dostupne hrane. Dugoselka Obiteljska poljoprivredna gospodarstva prepoznatljiv čimbenik istočnog dijela zagrebačke županije.
          </h3>
          <button 
            className="expand-button"
            onClick={() => setExpanded3(!expanded3)}
            aria-expanded={expanded3}
          >
            Proširi
            <span className={`arrow ${expanded3 ? 'expanded' : ''}`}>▼</span>
          </button>
        </div>
        {expanded3 && (
          <ul className="narrative-list">
            <li>Jačanje lokalne tržnice s lokalnim proizvođačima i proizvodima</li>
            <li>Ulaganje u sustav prerade poljoprivrednih proizvoda - stvaranje novih vrijednosti</li>
            <li>E-burza lokalnih proizvođača i proizvoda</li>
            <li>Prepoznatljive točke izravne prodaje na lokacijama OPG-ova</li>
            <li>Digitalna karta biciklističkih staza s naglaskom na sjedište OPG-a i njihove proizvode</li>
            <li>Lokalne potpore na sektore: stočarstva, peradarstva, pčelarstva, povrtlarstva i voćarstva</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgramGospodarstvo;
