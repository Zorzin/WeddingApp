import './menu.css';
import {Amiri, Cardo, Petit_Formal_Script, Poiret_One} from "next/font/google";

const amiri = Poiret_One({ subsets: ["latin"], weight: ["400"] });

export default function Menu() {

    return (
        <div className="w-full items-center flex flex-col min-h-screen">
            <div className="menu-body">
                <div className="menu-content">
                    <div className="menu-container">
                        <p className="menu-header">Menu</p>
                        <div className="menu">
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Przystawka</div>
                                <div className="menu-event-hour">(18:30)</div>
                                <div className={`${amiri.className} menu-description`}>Lekka sałatka ze świeżych warzyw
                                </div>
                            </div>
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Zupa</div>
                                <div className="menu-event-hour">(18:30)</div>
                                <div className={`${amiri.className} menu-description`}>Rosół z domowym makaronem</div>
                                <div className={`${amiri.className} menu-description`}>Zupa krem z pomidorów z mozarellą i
                                    bazylią (wege)
                                </div>
                            </div>
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Dania główne</div>
                                <div className="menu-event-hour">(18:30)</div>
                                <div className={`${amiri.className} menu-description`}>Tradycyjny schabowy smażony na
                                    smalcu
                                </div>
                                <div className={`${amiri.className} menu-description`}>Rolada wołowa</div>
                                <div className={`${amiri.className} menu-description`}>Filet z morszczuka</div>
                                <div className={`${amiri.className} menu-description`}>Falafel (wege)</div>
                                <div className={`${amiri.className} menu-description menu-italic`}>(oraz dodatki)</div>
                            </div>
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Tort</div>
                                <div className="menu-event-hour">(21:00)</div>
                                <div className={`${amiri.className} menu-description`}>Dobry, taki nie za słodki!</div>
                            </div>
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Kolacja</div>
                                <div className="menu-event-hour">(22:00)</div>
                                <div className={`${amiri.className} menu-description`}>Pierogi zasmażane</div>
                                <div className={`${amiri.className} menu-description`}>ruskie/z mięsem/ze szpinakiem i
                                    fetą
                                </div>
                            </div>
                            <div className="menu-line"></div>
                            <div className="menu-event">
                                <div className="menu-event-title">Przekąska</div>
                                <div className="menu-event-hour">(00:00)</div>
                                <div className={`${amiri.className} menu-description`}>Barszcz z krokietem</div>
                            </div>
                            <div className="menu-line mb-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}