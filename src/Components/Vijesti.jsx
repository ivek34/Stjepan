import React, { useState, useEffect } from 'react';
import Navbar from './Partials/Navbar';
import './Zasto.css';
import zastoImage from '../assets/1080,1920/zasto.png';

const Zasto = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className={`container zasto-container ${animate ? 'fly-in' : ''}`}>
        <div className="text-content">
          <p className="paragraph">
            <strong>Stjepan i Vedrana</strong> su najbolji tim za Dugo Selo jer donose spoj iskustva, mladenačke energije i iskrene posvećenosti zajednici i čovjeku!
          </p>
          <p className="paragraph">
            <strong>Stjepan i Vedrana poznaju lokalne potrebe</strong>, i razumiju stvarne probleme građana, <strong>od vrtića i škole, zdrastvene i socijalne skrbi, prometne infrastrukture, razvoja malog poduzetništva do sporta i kulture</strong>
          </p>
          <p className="paragraph">
            Svojim djelovanjem <strong>Stjepan i Vedrana pokazali su</strong> da znaju preuzeti odgovornost i realizirati projekte, ne samo obećavati: <strong>osigurana sredstva za besplatne udžbenike za srednju školu, SUVAG u Dugom Selu, povećanje financijskih sredstava za rad vatrogasne zajednice grada,</strong>
          </p>
          <p className="paragraph">
            <strong>Stjepan i Vedrana</strong> slušaju vas i uključuju vaše ideje, prijedloge i sugestije da zajedno svi donosimo odluke. <strong>Dugo Selo nije samo naš grad - Dugo Selo je naš dom</strong>
          </p>
          <p className="paragraph">
            <strong>Stjepan i Vedrana</strong> nude iskrenost, dostupnost i prisutnost, vode se načelima odgovornosti i prisutnosti - <strong>bez skrivanja i bez pogodovanja!</strong>
          </p>
          <p className="paragraph">
            <strong>Stjepan i Vedrana</strong> imaju jasnu strategiju  kako učiniti Dugo Selo boljim mjestom za život od zelenih površina, podrške i uključenost mladih u zajednicu, do jačanja gospodarstva i lokalne infrastrukture
          </p>
        </div>
        <img src={zastoImage} alt="Zašto" className="zasto-image" />
      </section>
    </>
  );
};

export default Zasto;

