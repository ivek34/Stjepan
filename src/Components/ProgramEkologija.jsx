import React from "react";
import "./Program.css";
import Navbar from './Partials/Navbar';

const ProgramEkologija = () => {
  return (
    <>
    
    <Navbar />
    <div className="program-container">
      <h1>Ekologija i održivi razvoj</h1>
      <h2>
        Dugo selo kao grad zaslužuje zdrav okoliš, čist zrak, zelene površine i
        održivi razvoj. Ekologija za nas je temelj zdravlja, kvalitete života i
        budućnosti naše djece. Vrijeme je da zajedno mijenjamo korake (navike)
        kako bi zaštitili okoliš i stvorili održiv i ugodan grad za naš život.
      </h2>
      <ul>
        <li>
          <h3>Održivo gospodarenje otpadom</h3>
        </li>
        <li>
          <h3>Energetska održivost zgrada u javnoj upotrebi</h3>
        </li>
        <li>
          <h3>Promicanje zelene infrastrukture</h3>
        </li>
        <li>
          <h3>
            Održiva mobilnost: biciklističke staze, subvencije za nabavku i
            servis bicikala
          </h3>
        </li>
        <li>
          <h3>Zaštita prirodnih resursa</h3>
        </li>
        <li>
          <h3>Edukacija i svijest građana</h3>
        </li>
        <li>
          <h3>Poticanje ekoloških projekata kroz udruge</h3>
        </li>
        <li>
          <h3>
            Povezivanje ekologije s gospodarstvom kroz zelenu ekonomiju,
            cirkularno gospodarstvo i zelena javna nabava.
          </h3>
        </li>
      </ul>
    </div>
    </>
  );
};

export default ProgramEkologija;
