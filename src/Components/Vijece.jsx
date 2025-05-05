import React from 'react';
import Navbar from './Partials/Navbar';
import './Vijece.css';
import MateaImage from '../assets/vijece/Matea.jpg';
import SomodiImage from '../assets/vijece/Somodi.jpg';
import StjepanImage from '../assets/vijece/Stjepan.jpg';
import VedranaImage from '../assets/vijece/Vedrana.jpg'
import AntonelaImage from '../assets/vijece/Antonela.jpg'
import AdrijanaImage from '../assets/vijece/Adrijana.jpg'
import TomislavImage from '../assets/vijece/Tomislav.jpg'

const users = [
  { firstName: 'Stjepan', lastName: 'Štefinovec', image: StjepanImage },
  { firstName: 'Vedrana', lastName: 'Dragičević Borovec', image: VedranaImage },
  { firstName: 'Smiljan', lastName: 'Dokić', image: 'https://via.placeholder.com/80?text=CB' },
  { firstName: 'Bruno', lastName: 'Šantek', image: 'https://via.placeholder.com/80?text=DM' },
  { firstName: 'Adrijana', lastName: 'Čačko', image: AdrijanaImage },
  { firstName: 'Tomislav', lastName: 'Mihov', image: TomislavImage },
  { firstName: 'Antonela', lastName: 'Šoljić', image: AntonelaImage },
  { firstName: 'Alen', lastName: 'Ištvanić', image: 'https://via.placeholder.com/80?text=HT' },
  { firstName: 'Ljiljana', lastName: 'Katić', image: 'https://via.placeholder.com/80?text=IA' },
  { firstName: 'Ismail', lastName: 'Numanović', image: 'https://via.placeholder.com/80?text=JT' },
  { firstName: 'Nataša', lastName: 'Ravlić', image: 'https://via.placeholder.com/80?text=KJ' },
  { firstName: 'Željko', lastName: 'Somođi', image: SomodiImage },
  { firstName: 'Matea', lastName: 'Budim', image: MateaImage },
  { firstName: 'Dragan', lastName: 'Jerković', image: 'https://via.placeholder.com/80?text=BJ' },
  { firstName: 'Mate', lastName: 'Brbot', image: 'https://via.placeholder.com/80?text=BJ' },
  
];

const Vijece = () => {
  return (
    <>
      <Navbar />
      <div className="vijece-container">
        <h1>Vijeće</h1>
        <div className="avatar-grid">
          {users.map((user, index) => (
            <div key={index} className="avatar-item">
              <img
                src={user.image}
                alt={`Avatar of ${user.firstName} ${user.lastName}`}
                className="avatar-image"
              />
              <div className="avatar-name">{user.firstName} {user.lastName}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vijece;
