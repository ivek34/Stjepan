import React, { useState } from "react";
import "./Program.css";
import "./ProgramSport.css";

const ProgramSport = () => {
  const [expandedSections, setExpandedSections] = useState(Array(10).fill(false));

  const toggleSection = (index) => {
    const newExpanded = [...expandedSections];
    newExpanded[index] = !newExpanded[index];
    setExpandedSections(newExpanded);
  };

  const sections = [
    {
      title: "Podrška sportskoj zajednici grada",
      items: [
        "Povećanje proračunskih sredstava za sportske klubove i udruge",
        "Financijska i logistička podrška za natjecanja i turnire u našem gradu",
        "Stipendiranje mladih sportaša i stipendiranje trenera",
        "Sufinanciranje članarina u sportskim klubovima grada Dugog Sela djeci slabijeg imovinskog stanja",
        "Unapređenje uvjeta za treniranje svih dobnih skupina",
        "Olakšavanje administrativnih procedura za sportske klubove",
        "Uvođenje programa financijske potpore za sportske klubove u manjim zajednicama",
        "Pokretanje programa poticaja za privatne investicije u sport",
        "Privlačenje sponzora i partnera za sportske projekte"
      ]
    },
    {
      title: "Razvoj sportske infrastrukture",
      items: [
        "Obnova modernizacija postojećih sportskih dvorana i igrališta",
        "Nove prostorije i svlačionice NK Ostrna",
        "Biciklističke staze za profesionalni i rekreativni biciklizam",
        "Sufinanciranje nabavke bicikala i servisiranja istih",
        "Teretane na otvorenom u svim dijelovima grada",
        "Rekreativni sportski centar s atletskom stazom",
        "Ulaganje u rasvjetu, video nadzor i tribine na sportskim igralištima"
      ]
    },
    {
      title: "Sport i rekreacija za sve",
      items: [
        "Organizacija besplatnih ili subvencioniranih sportskih programa za građane svih dobnih skupina",
        "Promocija aktivnog načina života kroz gradske inicijative",
        "Organizacija javnih sportskih događanja i rekreativnih manifestacija",
        "Unapređenje sportskih sadržaja u vrtićima i školama",
        "Osnivanje programa za inkluzivni sport za osobe s invaliditetom",
        "Razvoj sportskih programa za stariju populaciju"
      ]
    },
    {
      title: "Razvoj kulturne infrastrukture",
      items: [
        "Veća iskoristivost kulturnog centra – prednost za dugoselske umjetnike i kreativce",
        "Digitalizacija dugoselske kulturne baštine i arhivskih materijala",
        "Kreiranje mobilnih aplikacija za promociju dugoselskih kulturnih znamenitosti",
        "Organizacija i poticanje kulturnih manifestacija u naseljima našeg grada",
        "Ulaganja u razvoj digitalne umjetnosti i multimedijalnih projekata"
      ]
    },
    {
      title: "Dostupnost i raznolikost kulturnih sadržaja",
      items: [
        "Organizacija godišnjih festivala kroz glazbu, književnost i kazalište",
        "Kulturni programi za sve dobne skupine",
        "Razvoj turističkih ruta vezanih na kulturnu baštinu"
      ]
    },
    {
      title: "Razvoj društvene infrastrukture",
      items: [
        "Izgradnja novih parkova, šetnica i javnih prostora za druženje",
        "Uređenje i proširenje dječjih igrališta te sportskih zona na otvorenom",
        "Otvaranje društvenog centra za umirovljenike"
      ]
    },
    {
      title: "Vatrogastvo",
      items: [
        "Oslobođenje komunalne naknade za aktivne operativne vatrogasce",
        "Ulaganje u obnovu i modernizaciju vatrogasnih domova",
        "Na temelju vrhunskog dobrovoljnog vatrogastva stvaramo uvjete za profesionalnu jezgru u dobrovoljnom vatrogastvu Grada Dugog Sela"
      ]
    },
    {
      title: "Manifestacije i društvene aktivnosti",
      items: [
        "Javni događaji tijekom cijele godine: festivali, sajmovi",
        "Podrška svim udrugama i inicijativama za organizaciju društvenih aktivnosti"
      ]
    },
    {
      title: "Zajedništvo i volonterizam",
      items: [
        "Povezivanje građana volonterskim programima i akcijama",
        "Poticanje lokalnih poduzetnika na odgovorno poslovanje i angažman",
        "Društvene akcije za zaštitu okoliša",
        "Programi za razvoj društvene odgovornosti za mlade",
        "Izgradnja azila za zaštitu životinja"
      ]
    },
    {
      title: "Razvoj digitalne platforme za povezanost i informiranost građana",
      items: [
        "Digitalna platforma za informiranje građana o događajima",
        "Mobilna aplikacija s kalendarom događanja",
        "Organizacija edukativnih radionica za digitalnu pismenost"
      ]
    }
  ];

  return (
    <div className="program-container">
      <h1>Sport, kultura i društveni život</h1>
      <h2>Naš cilj je našem gradu osigurati bogat sportski i dinamičan društveni život koji će povezivati građane, osnažiti zajednicu i učiniti grad boljim mjestom za život</h2>
      
      {sections.map((section, index) => (
        <div className="narrative-section" key={index}>
          <div className="narrative-header">
            <h3 
              className="narrative-title" 
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </h3>
            <button 
              className="expand-button"
              onClick={() => toggleSection(index)}
              aria-expanded={expandedSections[index]}
            >
              Proširi
              <span className={`arrow ${expandedSections[index] ? 'expanded' : ''}`}>▼</span>
            </button>
          </div>
          {expandedSections[index] && (
            <ul className="narrative-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramSport;
