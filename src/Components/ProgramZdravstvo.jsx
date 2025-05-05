import React, { useState } from "react";
import "./Program.css";
import "./ProgramZdravstvo.css";

const ProgramZdravstvo = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <div className="program-container">
      <h1>Zdravstvo i socijalna skrb</h1>
      
      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded1(!expanded1)}
          >
            Kvalitetna predškolska skrb temelj je zdravog razvoja djece i podrške roditeljima. Dugo Selo zaslužuje modernu i dostupnu predškolsku skrb za sve svoje stanovnike.
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
            <li>Povećanje broja vrtićkih mjesta i proširenje infrastrukturnih kapaciteta</li>
            <li>Brza realizacija projekata izgradnje i završetka novih vrtića</li>
            <li>Stipendija studija predškolskog obrazovanja</li>
            <li>Subvencije obrta dadilja i privatnih vrtića</li>
            <li>Stvaranje uvjeta kako bi se osigurao besplatan vrtić za svu djecu</li>
          </ul>
        )}
      </div>

      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded2(!expanded2)}
          >
            Moderno i dostupno zdravstvo temelj je kvalitetnog života svih građana. Naš cilj je osigurati pristupačnu i kvalitetnu zdravstvenu skrb za sve stanovnike Dugog Sela.
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
            <li>Povećanje kapaciteta liječnika obiteljske medicine i specijalističkih ordinacija</li>
            <li>Stvaranje uvjeta za proširenje Doma zdravlja</li>
            <li>Izdvajanje Zavoda za hitnu medicinu iz Doma zdravlja</li>
            <li>Subvencija dežurstva ljekarni</li>
            <li>Stipendije studenata medicinskih fakulteta</li>
            <li>Stipendije srednjoškolskog obrazovanja - medicinskog smjera</li>
          </ul>
        )}
      </div>

      <div className="narrative-section">
        <div className="narrative-header">
          <h3 
            className="narrative-title" 
            onClick={() => setExpanded3(!expanded3)}
          >
            Starije i nemoćne građane trebamo štititi i pružiti im dostojanstvenu skrb. Dugo Selo mora postati grad koji brine o svim svojim građanima, bez obzira na životnu dob.
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
            <li>Stvaranje uvjeta za osnivanje gradskog ili županijskog doma za starije i nemoćne</li>
            <li>Sufinanciranje smještaja starih i nemoćnih u privatnim domovima</li>
            <li>Mobilna stručna medicinska i socijalna skrb za starije i nemoćne</li>
            <li>Dnevni boravak za korisnike koji ne trebaju stalni smještaj</li>
            <li>Aktivno starenje uz društvene aktivnosti za naše umirovljenike</li>
            <li>Božićnice i uskrsnice za sve građane starije životne dobi</li>
            <li>Sufinanciranje nabave drva i energetike za grijanje za sve potrebite</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgramZdravstvo;
