import React, { useState, useEffect } from 'react';
import Navbar from './Partials/Navbar';
import './Vijece.css';
import MateaImage from '../assets/vijece/Matea.jpg';
import SomodiImage from '../assets/vijece/Somodi.jpg';
import StjepanImage from '../assets/vijece/Stjepan.jpg';
import VedranaImage from '../assets/vijece/Vedrana.jpg';
import AntonelaImage from '../assets/vijece/Antonela.jpg';
import AdrijanaImage from '../assets/vijece/Adrijana.jpg';
import TomislavImage from '../assets/vijece/Tomislav.jpg';
import SmiljanImage from '../assets/vijece/Smiljan.jpg';
import BrunoImage from '../assets/vijece/Bruno.jpg';
import AlenImage from '../assets/vijece/Alen.jpg';
import LjiljanaImage from '../assets/vijece/Ljiljana.jpg';
import IsmailImage from '../assets/vijece/Ismajl.jpg';
import NatašaImage from '../assets/vijece/Nataša.jpg';
import DraganImage from '../assets/vijece/Dragan.jpg';
import MateImage from '../assets/vijece/Mate.jpg';

const users = [
  { id: 1, firstName: 'Stjepan', lastName: 'Štefinovec', image: StjepanImage, text: '' },
  { id: 2, firstName: 'Vedrana', lastName: 'Dragičević Borovec', image: VedranaImage, text: '' },
  { id: 3, firstName: 'Smiljan', lastName: 'Dokić', image: SmiljanImage, text: ' Rođen je 1964. Zaposelenik je Zagrebačkog holdinga, podružnice Zrinjevac. Smiljan je istaknuti član naše dugoselske zajednice, posebno se istaknuo obnašajući dužnost predsjednika Mjesnog odbora Centar, gdje se aktivno bavio politikama uređenja samog središta grada, Smiljan u svoje slobodno vrijeme je i aktivni dugoselski pčelar i medar izrazito aktivan u digoselskoj pčelarskoj udruzi Maslačak.' },
  { id: 4, firstName: 'Bruno', lastName: 'Šantek', image: BrunoImage, text: 'Rođen 1969. u Zagrebu. Odrastao je i stasao po dugoselskim livadama, šumama, bregima i igralištima. Često obnavlja svoje poznavanje grada vožnjom biciklom kroz sve njegove dijelove. Mnogi ga znaju i s drugih sportsko-rekreativnih terena našeg grada: mali nogomet, tenis, badminton, košarka, odbojka, a oni stariji sjetit će ga  se i s kuglane koja je nekada zaista postojala u Dugom Selu. Jedan je od onih koji su započeli svakodnevnu priču Radio Martina dok je to još bio naš gradski radio, dok je godinama kasnije dio novinarskog nerva prezentirao  i kroz Dugoselski portal. Dio je obrazovnog sustava u kojem pomaže djeci s posebnim potrebama u njihovom školovanju. Djeca su u centru njegove pažnje i ljeti kada u dugoselskom odmaralištu DND u Velom Lošinju radi kao njihov voditelj grupa. Posljednjih je godina svojim sugrađanima najpoznatiji kao književnik. Počeo je kao pjesnik i bloger a širu popularnost, posebno u stručnoj zdravstvenoj zajednici, dobio je  prvom knjigom u kojoj govori o svojoj borbi s astmom čime je otvorio javnu raspravu i senzibilizaciju javnosti s tom bolešću. U ostalim svojim djelima postao je poznat kao pisac akcijskih trilera u čijim se popularnim djelima Dugo Selo uvijek spominje i provlači kroz radnju, ili je sam naš grad jedan od glavnih protagonista tih priča. Aktivno sudjeluje u organizaciji i provedbi književnih i ostalih kulturnih događanja Dugog Sela. Dugo Selo predstavlja i  na književnim i pjesničkim događajima  širom Hrvatske.' },
  { id: 5, firstName: 'Adrijana', lastName: 'Čačko', image: AdrijanaImage, text: 'Rođena je 1995 godine, živi u naselju Kopčevec,  po zanimanju je magistra rehabilitacije slušanja i govora te slovačkog jezika.Zaposelna je u poliklinici SUVAG kao rehabilitatorica slušanja i govora gdje svakodnevno radi s djecom s oštećenjem sluha te govorno-jezičnim teškoćama. Adrijana je aktivni član KUD-a Preporod i to već pune 22 godine gdje njeguje ljubav prema folkloru i očuvanju tradicije . Kroz profesionalni i volonterski rad posvećena je zajednici i vjeruje u snagu suradnje i kulturnog identiteta.' },
  { id: 6, firstName: 'Tomislav', lastName: 'Mihov', image: TomislavImage, text: 'Rođen 2001 godine, živi u naselju Mala Ostrna po zanimanju je inžinjer prometa, transporta i logistike zaposlen je Hrvatskom autoklubu na odjelu tehničke pomoći. U slobodno vrijeme Tomislav se ističe kao dobrovoljni vatrogasac, Zapovjednik DVD a Ostrna gdje uz operativne poslove ističe se posebno u radu s mladima kojima prenosi znanja i vještine u vatrogastvu. Tomislav je radišan, uporan posebnu pažnju u slobodno vrijeme poklanja elektronici, mehanici i mehatronici' },
  { id: 7, firstName: 'Antonela', lastName: 'Šoljić', image: AntonelaImage, text: 'Rođena je 1999 godine. Antonela je pohađala školu za grafiku,dizajn i medijsku produkciju. svoje je obrazovanje nastavila na Učiteljskom fakultetu u Petrinji i danas je zaposelena u dječjem vrtiću Šegrt Hlapić. Antonela je mlada i svestrana osoba poznata po svom angažmanu u području ljepote, obrazovanja i društvenog aktivizma.' },
  { id: 8, firstName: 'Alen', lastName: 'Ištvanić', image: AlenImage, text: 'Rođen 1982 godine, diplomirani je ekonimist, radi kao nastavnik ekonomskih predmeta u srednjoj školi. Alen ističe važnost rješavanja konkretnih problema građana kao što su komunalna infrastruktura, prometna povezanost i podrška lokalnim poduzetnicima. Alen se do sada posebno istaknuo kao član gradskog odbora za financije i proračun  gdje je aktivno sudjelovao u nadzoru gradskih financija' },
  { id: 9, firstName: 'Ljiljana', lastName: 'Katić', image: LjiljanaImage, text: 'Rođena 1974. u Zagrebu, Dugoselka je gotovo od rođenja. Dječje dane provela je na dugoselskim livadama, šumama, ulicama i igralištima, a ne zaboravlja ih ni danas u šetnji sa svojim psom. Da ih drugi ne zaborave ovjekovječeni su u njenim fotografijama. Školovala se u tada jedinoj osnovnoj školi u kojoj je kasnije i predavala kao učiteljica, završivši Filozofski fakultet - Pedagogijske znanosti Sveučilišta u Zagrebu. Proučavajući duhovnu dimenziju čovjeka završava Katolički bogoslovni fakultet - Institut za teološku kulturu u Zagrebu. Danas radi u drugoj osnovnoj školi u gradu, radujući se i trećoj. Stručno se usavršava na predavanjima i radionicama  u organizaciji Agencije za odgoj i obrazovanje te različitih udruga i izdavača te i sama na njima sudjeluje kao predavač. Glazba je prati otkad zna za sebe kroz ritmiku, folklor, zborove (školske, crkvene, učiteljske), a i sama je stvara dajući vlastitim riječima ritam i melodiju. Član je Hrvatskog društva skladatelja (ZAMP) i Hrvatske udruge za zaštitu izvođačkih prava (HUZIP). Uz dvije objavljene samostalne zbirke pjesama piše i priče o svojim učenicima dodajući zbiljskim događanjima pravu mjeru mašte.  Uz glazbu i pisanje svoju likovnu kreativnost razvija kroz tečajeve pletenja i kukičanja, šivanja, filcanja vune i slikanja. Potiče djecu, ali i odrasle da budu kreativni i izražavaju svoju originalnu osobnost.  I dalje uči i stvara te aktivno sudjeluje u organizaciji i provedbi književnih i ostalih kulturnih događanja Dugog Sela.' },
  { id: 10, firstName: 'Ismail', lastName: 'Numanović', image: IsmailImage, text: 'Rođen 1955 godine, po struci je strojarski tehničar, danas u mirovini. Ismail je dragovoljac Domovinskog rata. Politički aktivan niz godina promičući temelje socijaldemokratije. Ismail je Suprug, ponosni otac dvoje odraslih i uspješnih ljudi, još ponosniji djed jedne djevojčice i dva dječaka. Ismail se posebno istaknuo kao član odbora za komunalno uređenje gdje je svojim radom doprinio kvalitetnijim komunalnim uređenjem grada.' },
  { id: 11, firstName: 'Nataša', lastName: 'Ravlić', image: NatašaImage, text: 'Rođena je 1975. godine u Zagrebu. Majka je troje odrasle djece, a ponosna je baka dvoje unuka.  Od početka osamdesetih živi u Dugom Selu, pohađajući dugoselski vrtić i kasnije osnovnu školu. U mladosti je trenirala rukomet u dugoselskom rukometnom klubu na njoj obližnjem "Partizanovom". Sanjala je postati ili odgajateljica u vrtiću ili poziv vezan za medicinsku struku. Odlučila se za potonje pohađajući Školu za medicinske sestre u Vinogradskoj, te prvostupništvo na Zdravstvenom veleučilištu Zagreb u Mlinarskoj. Od 1994. godine radi na Zavodu za nefrologiju, arterijsku hipertenziju, dijalizu i transplantaciju KBC-a Zagreb. Stručni je edukator za učenike, studente i pacijente. I dalje se redovito usavršava i educira. Sa Društvom "Naša djeca" Dugo Selo voditelj je zadužen za medicinsku skrb djece na ljetovanjima u Velom Lošinju, čime je spojila svoje djetinje snove odgajateljice i medicinarke. ' },
  { id: 12, firstName: 'Željko', lastName: 'Somođi', image: SomodiImage, text: 'Rođen 1967 godine, po zanimanju Elektroinstalater- Željko je svoj radni vijek proveo kao djelatnik MUP-a, Policajac , sudionik Domovinskog rata, posebno odlikaovan kao sudionik pobjedničke združene operacije Oluja. Željko je danas u zasluženoj mirovini, aktivno se bavi lovstvom, lovačkim streljaštvom i uspješni je uzgajivač njemačkih oštrodlakih ptičara. Uz sve to Željko je je posvećen u radu svog vinograda i proizvodnju vina za svoje potrebe.' },
  { id: 13, firstName: 'Matea', lastName: 'Budim', image: MateaImage, text: 'Rođena je 2000 godine, Po struci je odgojiteljica i zaposlena je u dječjem vrtiću. Matea vjeruje da svojim znanjem, iskustvom u radu s djecom i osjetljivošću za potrebe obitelji može doprinjeti stvaranju kvalitenjijih uvjeta za život u našem gradu. Svakodnevni rad s najmlađima daje joj poseban uvid u važnost ulaganja u obrazovanje, odgoj i obiteljske politike. Matea vjeruje u suradnju, dijalog i konkretne mjere koje čine razliku.' },
  { id: 14, firstName: 'Dragan', lastName: 'Jerković', image: DraganImage, text: '' },
  { id: 15, firstName: 'Mate', lastName: 'Brbot', image: MateImage, text: 'Rođen 1957 godine, živi u naselju Puhovo. po zanimanju strojarski tehničar. Danas u mirovini Mate je poznat po svom doprinosu društvenoj zajednici. Posebno se istaknuo u radu za svoj Mjesni odbor Puhovo ali i kao vrijedan član vinogradarske-vinarske udruge gdje je doprinio očuvanju i promociji naše dugačke vinogradarske tradicije.' },
];

const Vijece = () => {
  const [activeUserId, setActiveUserId] = useState(null);
  const [rowCount, setRowCount] = useState(window.innerWidth <= 768 ? 2 : 3);

  useEffect(() => {
    const handleResize = () => {
      setRowCount(window.innerWidth <= 768 ? 2 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sort users by id ascending
  const sortedUsers = users.slice().sort((a, b) => a.id - b.id);

  // Split into dynamic rows
  const itemsPerRow = Math.ceil(sortedUsers.length / rowCount);
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push(sortedUsers.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
  }

  const handleUserClick = (id) => {
    setActiveUserId(activeUserId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="vijece-container">
        <h1>Vijeće</h1>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="avatar-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {row.map((user, userIndex) => (
              <div
                key={user.id}
                className="avatar-item"
                style={{ margin: '0 10px', cursor: 'pointer' }}
                onClick={() => handleUserClick(user.id)}
              >
                <img
                  src={user.image}
                  alt={`Avatar of ${user.firstName} ${user.lastName}`}
                  className={userIndex === 0 ? "avatar-image" : "avatar-image avatar-image-shift"}
                />
                <div className="avatar-name">{user.firstName} {user.lastName}</div>
                {activeUserId === user.id && (
                  <div className="user-text">
                    {user.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Vijece;
