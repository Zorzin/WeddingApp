import "./plan.css";
import Image from "next/image";


export default function Plan() {
    return (
        <div className="w-full items-center flex flex-col">
            <div className="planBody">
                <div className="planBody-content">
                    <div className="timeline-container">
                        <p className="timeline-header">Rozkład jazdy</p>

                        <p className="timeline-day">Sobota</p>
                        <div className="timeline">
                            <div className="timeline-event">
                                <div className="icon"><Image src="/icons/pin.png" alt="Welcome Toast" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="time">14:00</div>
                                <div className="description">Meldunek</div>
                            </div>
                            <div className="timeline-event">
                                <div className="icon"><Image src="/icons/toast.png" alt="Cake Cutting" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="time">18:00</div>
                                <div className="description">Drineczek</div>
                            </div>
                            <div className="timeline-event">
                                <div className="icon"><Image src="/icons/ceremony.png" alt="First Dance" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="time">18:30</div>
                                <div className="description">Ceremonia</div>
                            </div>
                            <div className="timeline-event">
                                <div className="icon"><Image src="/icons/party.png" alt="Fireworks" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="time">19:00</div>
                                <div className="description">Przyjęcie</div>
                            </div>
                            <div className="timeline-event">
                                <div className="icon"><Image src="/icons/cake.png" alt="Wedding Ceremony" width={10}
                                                             height={10} unoptimized/></div>
                                <div className="time">21:00</div>
                                <div className="description">Tort</div>
                            </div>
                        </div>

                        <p className="timeline-day">Niedziela</p>

                        <div className="timeline">

                            <div className="timeline-event">
                                <div className="time">10:00</div>
                                <div className="icon"><Image src="/icons/breakfast.png" alt="Wedding Lunch" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="description">Śniadanie</div>
                            </div>
                            <div className="timeline-event">
                                <div className="time">14:00</div>
                                <div className="icon"><Image src="/icons/grill.png" alt="Cocktail Hour" width={10}
                                                             height={10} unoptimized/></div>
                                <div className="description">Grill</div>
                            </div>
                            <div className="timeline-event">
                                <div className="time">18:00</div>
                                <div className="icon"><Image src="/icons/salad.png" alt="Buffet Dinner" width={10}
                                                             height={10} unoptimized/></div>
                                <div className="description">Kolacja</div>
                            </div>
                        </div>

                        <p className="timeline-day">Poniedziałek</p>

                        <div className="timeline">

                            <div className="timeline-event">
                                <div className="time">10:00</div>
                                <div className="icon"><Image src="/icons/breakfast.png" alt="Wedding Lunch" width={10}
                                                             height={10} unoptimized/>
                                </div>
                                <div className="description">Śniadanie</div>
                            </div>
                            <div className="timeline-event">
                                <div className="time">14:00</div>
                                <div className="icon"><Image src="/icons/away.png" alt="Cocktail Hour" width={10}
                                                             height={10} unoptimized/></div>
                                <div className="description">Wymeldowanie</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}