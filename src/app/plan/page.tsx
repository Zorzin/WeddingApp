import "./newplan.css";
import Image from "next/image";


export default function Plan() {
    return (
        <div className="w-full items-center flex flex-col">
            <div className="planBody">
                <div className="planBody-content">
                    <p className="timeline-header">Rozkład jazdy</p>
                    <p className="timeline-day">Sobota</p>
                    <div className="schedule">
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/entry-pin.png"} alt="meldunek" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">14:00</div>
                                    <span className="text">Meldunek</span>
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="left info">
                                <div className="description">
                                    <div className="time">17:30</div>
                                    <span className="text">Aperitivo</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/toast.png"} alt="toast" unoptimized width={45} height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/ceremony.png"} alt="ceremonia" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">18:00</div>
                                    <span className="text">Ceremonia</span>
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="left info">
                                <div className="description">
                                    <div className="time">18:30</div>
                                    <span className="text">Życzenia</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/wedding.png"} alt="wishes" unoptimized width={45} height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/wine.png"} alt="wine" unoptimized width={45} height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">18:40</div>
                                    <span className="text">Przywitanie</span>
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="left info">
                                <div className="description">
                                    <div className="time">18:45</div>
                                    <span className="text">Przyjęcie</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/party.png"} alt="party" unoptimized width={45} height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/cake.png"} alt="tort" unoptimized width={45} height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">21:00</div>
                                    <span className="text">Tort</span>
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="left info">
                                <div className="description">
                                    <div className="time">00:30</div>
                                    <span className="text">Oczepiny!</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/fashion.png"} alt="fashion" unoptimized width={45} height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/landscape.png"} alt="landscape" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">5:00</div>
                                    <span className="text">Dobranoc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="timeline-day">Niedziela</p>
                    <div className="schedule">
                        <div className="event-reverse">
                            <div className="left info">
                                <div className="description">
                                    <div className="time small">9:00-10:30</div>
                                    <span className="text">Śniadanie</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/breakfast.png"} alt="breakfast" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">
                            </div>
                        </div>
                        <div className="event-reverse">
                            <div className="left">
                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/grill.png"} alt="grill" unoptimized width={45} height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time">14:00</div>
                                    <span className="text">Grill</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-reverse">
                            <div className="left info">
                                <div className="description">
                                <div className="time">18:30</div>
                                    <span className="text">Kolacja</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/salad.png"} alt="ceremonia" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">
                            </div>
                        </div>

                    </div>

                    <p className="timeline-day">Poniedziałek</p>
                    <div className="schedule">
                        <div className="event">
                            <div className="left">

                            </div>
                            <div className="right info">
                                <span className="dot"/>
                                <div className="icon">
                                    <Image src={"/icons/breakfast.png"} alt="breakfast" unoptimized width={45}
                                           height={45}/>
                                </div>
                                <div className="description">
                                    <div className="time small">8:30-10:00</div>
                                    <span className="text">Śniadanie</span>
                                </div>
                            </div>
                        </div>
                        <div className="event mb-12">
                            <div className="left info">
                                <div className="description">
                                    <div className="time">11:00</div>
                                    <span className="text smaller">Wymeldowanie</span>
                                </div>
                                <div className="icon">
                                    <Image src={"/icons/away.png"} alt="away" unoptimized width={45} height={45}/>
                                </div>
                                <span className="dot"/>
                            </div>
                            <div className="right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}