import './menu.css';
import Image from "next/image";

export default function Menu() {
    return (

        <div className="menu-container">
            <p className="menu-header">Menu</p>
            <div className="menu">
                <div className="menu-line"></div>
                <div className="menu-event">
                    <div className="menu-event-title">Przystawka</div>
                    <div className="menu-event-hour">(18:30)</div>
                    <div className="menu-description">Lekka sałatka ze świeżych warzyw</div>
                </div>
                <div className="menu-line"></div>
                <div className="menu-event">
                    <div className="menu-event-title">Obiad</div>
                    <div className="menu-event-hour">(18:30)</div>
                    <div className="menu-description">Rosół z domowym makaronem</div>
                    <div className="menu-description">Zupa krem z pomidorów z mozarellą i bazylią (wege)</div>
                    <div className="menu-description">Tradycyjny schabowy smażony na smalcu</div>
                    <div className="menu-description">Rolada wołowa</div>
                    <div className="menu-description">Filet z morszczuka</div>
                    <div className="menu-description">Falafel (wege)</div>
                </div>
                <div className="menu-line"></div>
                <div className="menu-event">
                <div className="menu-event-title">Tort</div>
                    <div className="menu-event-hour">(21:00)</div>
                </div>
                <div className="menu-line"></div>
                <div className="menu-event">
                    <div className="menu-event-title">Kolacja</div>
                    <div className="menu-event-hour">(22:00)</div>
                    <div className="menu-description">Pierogi - ruskie/z mięsem/ze szpinakiem i fetą - zasmażane</div>
                </div>
                <div className="menu-line"></div>
                <div className="menu-event">
                    <div className="menu-event-title">Przekąska</div>
                    <div className="menu-event-hour">(00:00)</div>
                    <div className="menu-description">Barszcz z krokietem</div>
                </div>
            </div>
        </div>
    );
}