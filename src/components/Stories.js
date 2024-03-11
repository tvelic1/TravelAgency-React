import React, { useRef } from "react";
import '../css/Stories.css';

const Stories = () => {
    const slider = useRef();
    let x = 0;
    const slidaback = () => {
        if (x < 0) { x += 24.7; }
        slider.current.style.transform = `translateX(${x}%)`;



    };
    const slideforw = () => {
        if (x > -50) { x -= 24.7; }
        slider.current.style.transform = `translateX(${x}%)`;

    }
    return (


        <div className="stories" name="story">
            <p className="sub">Our adventures</p>
            <h2>User stories</h2>
            <div className="button">
                <img src="backbutton.png" onClick={slidaback} /></div>
            <div className="nextbutton">
                <img src="next-button.png" onClick={slideforw} /></div>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="paris.jpg" alt="" />
                                <div>
                                    <h3>User 1</h3>
                                    <span>Pariz</span>
                                </div>
                            </div>
                            <p>
                            Bila sam nedavno u Parizu preko agencije i moram reći da sam bila vrlo zadovoljna svojim iskustvom. Sve je bilo organizirano do najsitnijih detalja, što mi je stvarno olakšalo putovanje. Smještaj je bio udoban i čist, a lokacija je bila super - blizu glavnih znamenitosti, ali i mirna za dobar noćni odmor. Putovanje u Pariz preko agencije bilo je sjajno iskustvo koje bih rado ponovila. Toplo preporučujem svima koji žele istražiti ovaj prekrasan grad da se odluče za organizirano putovanje jer će tako imati više vremena uživati u svemu što Pariz nudi, a manje brinuti o organizaciji i logistici.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="istanbul.jpg" alt="" />
                                <div>
                                    <h3>User 2</h3>
                                    <span>Istanbul</span>
                                </div>
                            </div>
                            <p>
                            Boravila sam nedavno u Istanbulu putem organizirane agencijske ture i moram reći da sam bila ugodno iznenađena. Putovanje je bilo izvrsno organizirano, smještaj udoban, a lokacija idealna za istraživanje grada. Šetnje starim gradom, posjeta impozantnim džamijama poput Aje Sofije i Plave džamije, te upijanje atmosfere Grand Bazaara bili su vrhunci putovanja.

Jednako tako, turska kuhinja me oduševila. Probala sam razne tradicionalne specijalitete poput kebaba i baklave, i mogu reći da sam bila više nego zadovoljna.

Putovanje preko agencije je definitivno bio pun pogodak jer smo mogli maksimalno uživati u svemu što Istanbul nudi bez ikakvih briga oko organizacije.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="firenza.jpg" alt="" />
                                <div>
                                    <h3>User 3</h3>
                                    <span>Firenca</span>
                                </div>
                            </div>
                            <p>
                            Nedavno sam istraživao Firencu kroz organiziranu turističku agenciju i moram priznati da su se potrudili maksimalno. Od početka do kraja putovanja, osjećao sam se poput pravog putnika - sve je bilo pedantno organizirano, odabir smještaja bio je u skladu s mojim preferencijama, a tim agencije bio je uvijek na raspolaganju za sva pitanja i pomoć.

Posebno bih istaknuo njihovu fleksibilnost i pažnju prema detaljima. Uz njihovu podršku, mogao sam istražiti Firencu bez brige i stresa. Zahvaljujući njihovom radu, svaki trenutak putovanja bio je pun užitka i nezaboravan.

Stoga, svima koji planiraju posjetiti Firencu toplo preporučujem da se obrate ovoj agenciji jer će im pružiti nezaboravno iskustvo bez ikakvih problema i briga.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img className="profilna" src="barcelona.jpg" alt="" />
                                <div>
                                    <h3>User 4</h3>
                                    <span>Barselona</span>
                                </div>
                            </div>
                            <p>
                            Bila sam nedavno u Barceloni preko turističke agencije i ne mogu dovoljno nahvaliti njihovu organizaciju. Od trenutka kada sam rezervirala putovanje pa sve do povratka kući, osjećala sam se kao da su brinuli o svakom detalju.

Ono što me posebno impresioniralo je njihova predanost gostima. Osoblje agencije bilo je iznimno susretljivo i uvijek spremno pomoći, bilo da je riječ o preporukama restorana ili rezervaciji ulaznica za znamenitosti. Također, smještaj koji su odabrali bio je izvrstan - udoban, čist i na sjajnoj lokaciji.
Zahvaljujući njihovom trudu i angažmanu, moje putovanje u Barcelonu bilo je jedno od najboljih dosad. Stoga, svakome tko planira posjetiti ovaj grad, toplo preporučujem da se obrati ovoj agenciji jer će im pružiti nezaboravno iskustvo putovanja.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Stories