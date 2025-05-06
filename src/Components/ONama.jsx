import React, { useEffect, useState, useRef } from "react";
import "./ONama.css";
import gradonacelnikImage from "../assets/1080x1350/gradonacelnik.png";
import zamjenicaImage from "../assets/1080x1350/zamjenica.png";

const ONama = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`content-wrapper${isVisible ? " animate" : ""}`}
      ref={containerRef}
    >
      <section className="home-content">
        <div>
          <div className="gradonacelnik-title">
            <h2>GRADONAČELNIK - Stjepan Štefinovec</h2>
          </div>
          <div className="gradonacelnik-container">
            <div className="image-gradonacelnik">
              <img src={gradonacelnikImage} alt="Gradonacelnik" />
            </div>
            <div className="text-gradonacelnik">
              <p>
                Moja odluka o kandidaturi za gradonačelnika Grada Dugog Sela svakako nije donešena preko noći već je plod dugog promišljanja i vjerovanja da naš grad može puno bolje. Nakon niza godina obnašajući dužnost gradskog vijećnika upoznat sam sa svim procesima koji se odvijaju u gradu, upoznao sam rad nekoliko gradonačelnika do sada i smatram kako naš grad svakako zaslužuje više.
              </p>
              <p>
                Kandidiram se za gradonačelnika Grada Dugog Sela jer vjerujem da naš grad zaslužuje više, više transparentnosti, odgovornosti, prije svega bolji predškolski odgoj, osnovnoškolsko obrazovanje, više prilika za mlade, više podrške našim obrtnicima i gospodarstvenicima, više ulaganja u infrastrukturu, civilno društvo, Dom za starije i nemoćne s vrhunskom uslugom i primjerenim cijenama. kvalitetan javni gradski prijevoz. Bolju kvalitetu i više sadržaja za život svih građana. Kvalitetnu brigu za napuštene životinje.
              </p>
              <p>
                Odrastao sam ovdje, i ovo je moj dom. Poznam naše ljude, njihove potrebe, svakodnevne izazove i svakako neiskorišteni potencijal koje naše Dugo Selo ima. Uvjeren sam da uz odgovorno, pošteno i moderno vođenja Grada Dugog Sela možemo pokrenuti pozitivne promjene koje će se osjetiti u svakom dijelu grada od strogog centra grada pa sve do najudaljenog naselja našeg Dugog Sela. Naši sugrađani zaslužuju jednaki razvoj, jednake prilike, jednak standard.
              </p>
              <p>
                Moja motivacija dolazi iz stvarne želje da služim zajednici, da donesem nova rješenja, slušam građane i radim s njima. Naši građani nisu publika, građani su suigrači u timu za bolje Dugo Selo. Kao Gradonačelnik nudim iskrenost, pristupačnost i dostupnost i to baš svakog dana.
              </p>
              <p>
                I za kraj dajem još jedno obećanje koje niti jedan političar do sada nije dao. Ukoliko ne osiguram za svoje građane iskrenost, prisutnost i dostupnost! Dati ću ostavku. Ne želim biti gradonačelnik kao svi do sada. Želim biti najbolji Gradonačelnik, to je rad za zajednicu, to je Demokracija, to je Služenje.
              </p>
              <p>Vaš kandidat za Gradonačelnika Grada Dugog Sela.</p>
            </div>
          </div>
        </div>
        <div className="zamjenica-title">
          <h2>ZAMJENICA GRADONAČELNIKA - Vedrana Dragičević Borovec</h2>
        </div>
        <div className="zamjenica-container">
          <div className="zamjenica-image">
            <img src={zamjenicaImage} alt="Zamjenica" />
          </div>
          <div className="zamjenica-text">
            <p>
              Kao majka troje djece, ili bolje reći troje mladih ljudi, svu svoju snagu i životni motiv pronalazim upravo u njima i zbog njih moje borbe i moja nastojanja za bolje, neće nikada prestati. I baš zato sam se uhvatila u koštac s nečim što se naziva „politikom“ da bi barem pokušala promijeniti neke stvari za dobrobit čovjeka i zajednice u cijelosti. Svjesna sam da svatko, i tko je u politici i tko nije, ne smatra da su prioriteti ono što ja smatram da jesu, te da ne vrednujemo jednako neke vrijednosti, i obrnuto. Ono što ja smatram da treba mijenjati, napraviti, izgraditi ili urediti nije nešto što svi tako vide i što smatraju da je potrebno a kamoli da to trebao biti prioritet. Magistrica sam ekonomije s više od 27 godina radnog staža u jednoj od naših najvećih korporacija.
            </p>
            <p>
              Kroz radno iskustvo naučila sam voditi i ljude, i procese, i poslovanje, ali više od svega naučila sam slušati i poštivati kolege i uvažavati njihovo mišljenje za dobrobit svih. Voditi svoj tim ljudi s jasnom vizijom što nam je poslovni cilj ali ni u jednom trenutku ne zaboraviti poštivati svakog člana tima je nešto što smatram jednom od svojih dodatnih snaga i što vjerujem da mogu pretočiti i na funkciji zamjenice gradonačelnika. Moj politički angažman do prije četiri godine je bio kao gradske vijećnice. I tada, kao i danas, uvijek sam zagovarala potrebe onih koje se najmanje čulo, onih potrebitih. Moji prioriteti za građane ostaju isti!
            </p>
            <p>
              Jednakost za svu djecu, bez obzira u kojem dijelu grada živjeli. Vrtićka mjesta za sve – bez iznimke! Sport za svako dijete jer smatram da sport nije privilegija samo onih koji mogu platiti članarine nego je naša društvena obaveza da omogućimo svakom djetetu bavljenje sportom. Ostvarivanje pred uvjeta za četvrtu osnovnu školu. Ugovorno financiranje medicinske struke i odgajatelja. Javni gradski prijevoz u svim dijelovima grada. Izdvajanje Zavoda za hitnu medicinu iz doma zdravlja. Nogostupi u Domobranskoj ulici, Andrilovcu, Donjem Dvorišću, Prozorju i nizu ostalih ulica.
            </p>
            <p>
              Izgradnja gradskog doma za stare i nemoćne. Policijski video nadzor i uspornici na svim kritičnim mjestima našeg grada. Omogućiti korištenja KIC-a svima koji žele svoj prostor za kulturno stvaralaštvo. I nešto što smatram da je davno moralo biti prioritet, prije mnogih projekata koji su provedeni zadnjih par godina u našem grad, a to su nove svlačionice u NK Ostrni! E to je ono što ja smatram prioritetima u našem gradu. Možda će to netko nazvati populističkim mjerama ali zaista smatram da nam svima u fokusu mora biti čovjek!
            </p>
            <p>
              Svojim angažmanom i u službi građana želim pokazati da se grad može voditi na dobrobit svih građana a ne samo malog kruga naših susjeda. Uz to, želim istaknuti važnost kontinuiranog ulaganja u obrazovanje i kulturu, jer samo kroz znanje i kreativnost možemo osigurati svijetlu budućnost za naš grad. Važno je također poticati razvoj lokalnog gospodarstva i podržavati male poduzetnike koji su temelj naše zajednice. Ne smijemo zaboraviti ni na zaštitu okoliša i održivi razvoj, jer zdrav okoliš je temelj zdravog života za sve nas.
            </p>
            <p>
              Uvjerena sam da zajedničkim snagama možemo ostvariti sve ove ciljeve i učiniti naš grad mjestom na koje ćemo svi biti ponosni.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ONama;
