import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './Partials/Navbar';
import ProgramEkologija from './ProgramEkologija';
import ProgramSport from './ProgramSport';
import ProgramGospodarstvo from './ProgramGospodarstvo';
import ProgramInfrastruktura from './ProgramInfrastruktura';
import ProgramObrazovanje from './ProgramObrazovanje';
import ProgramZdravstvo from './ProgramZdravstvo';

import './program1.css';

import ekologijaImage from '../assets/1080,1920/ekologija.png';
import sportImage from '../assets/1080,1920/sport.png';
import gospodarstvoImage from '../assets/1080,1920/gospodarstvo.png';
import infrastrukturaImage from '../assets/1080,1920/infrastruktura.png';
import kulturaImage from '../assets/1080,1920/kultura.png';
import zdravstvoImage from '../assets/1080,1920/zdravstvo.png';
import obrazovanjeImage from '../assets/1080,1920/obrazovanje.png';

const ProgramHome = () => {
  const programs = [
    { path: 'obrazovanje', title: 'Obrazovanje i mladi',image: obrazovanjeImage },
    { path: 'zdravstvo', title: 'Zdravstvo i socijalna skrb', image: zdravstvoImage },
    { path: 'infrastruktura', title: 'Infrastruktura i komunalni razvoj', image: infrastrukturaImage },
    { path: 'sport', title: 'Sport, kultura i društveni život', image: sportImage },
    { path: 'gospodarstvo', title: 'Gospodarstvo', image: gospodarstvoImage },
    { path: 'ekologija', title: 'Ekologija i održivi razvoj', image: ekologijaImage },
    
    
    
  ];

  return (
    <div className="program-home-container">
      <h1>Izaberite program koji Vas zanima</h1>
      <div className="program-cards">
        {programs.map(({ path, title, image }) => (
          <Link key={path} to={path} className="program-card">
            <img src={image} alt={title} className="program-image" />
            <h2>{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Program = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<ProgramHome />} />
        <Route path="ekologija" element={<ProgramEkologija />} />
        <Route path="sport" element={<ProgramSport />} />
        <Route path="gospodarstvo" element={<ProgramGospodarstvo />} />
        <Route path="infrastruktura" element={<ProgramInfrastruktura />} />
        <Route path="obrazovanje" element={<ProgramObrazovanje />} />
        <Route path="zdravstvo" element={<ProgramZdravstvo />} />
      </Routes>
    </>
  );
};

export default Program;



