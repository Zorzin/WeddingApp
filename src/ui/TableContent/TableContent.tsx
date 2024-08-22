import Image from "next/image";

interface Dictionary<T> {
    [Key: string]: T;
}

export default function TableContent({params} : {params: {value: string}}) {

    const contentDictionary : Dictionary<string> = {
        //Szymon
        "szymon bakunowicz": "/tables/table-szymon.png",
        "szymon": "/tables/table-szymon.png",
        "szymcio bakunowicz": "/tables/table-szymon.png",
        "szymcio": "/tables/table-szymon.png",
        //Madzia
        "madzia bakunowicz": "/tables/table-madzia.png",
        "madzia ostapowicz": "/tables/table-madzia.png",
        "magdalena ostapowicz": "/tables/table-madzia.png",
        "magdalena bakunowicz": "/tables/table-madzia.png",
        "madzia": "/tables/table-madzia.png",
        //Magda T
        "magda": "/tables/table-magda.png",
        "magda topczewska": "/tables/table-magda.png",
        "magdalena topczewska": "/tables/table-magda.png",
        "topczewska": "/tables/table-magda.png",
        //Psor
        "psor": "/tables/table-psor.png",
        "michał ostapowicz": "/tables/table-psor.png",
        "michal ostapowicz": "/tables/table-psor.png",
        "psor ostapowicz": "/tables/table-psor.png",
        //Julka
        "julka": "/tables/table-julka.png",
        "julka ostapowicz": "/tables/table-julka.png",
        "julia ostapowicz": "/tables/table-julka.png",
        "julia": "/tables/table-julka.png",
        //Pucioch
        "pucioch": "/tables/table-pucioch.png",
        "przemek": "/tables/table-pucioch.png",
        "przemek zawadzki": "/tables/table-pucioch.png",
        //Paulina
        "paulina": "/tables/table-paulina.png",
        "paulina waszczeniuk-zawadzka": "/tables/table-paulina.png",
        "paulina waszczeniuk": "/tables/table-paulina.png",
        "paulina zawadzka": "/tables/table-paulina.png",
        //Kozak
        "kozak": "/tables/table-kozak.png",
        "seba": "/tables/table-kozak.png",
        "sebastian kozak": "/tables/table-kozak.png",
        "sebastian": "/tables/table-kozak.png",
        //Luiza S
        "luiza sokólska": "/tables/table-luiza.png",
        "sokólska": "/tables/table-luiza.png",
        "luiza sokolska": "/tables/table-luiza.png",
        "sokolska": "/tables/table-luiza.png",
        //Lusia
        "lusia": "/tables/table-lusia.png",
        "luiza chorchiel": "/tables/table-lusia.png",
        "chorchiel": "/tables/table-lusia.png",
        "lusia chorchiel": "/tables/table-lusia.png",
        //Damian
        "damian breczko": "/tables/table-damian.png",
        "damian": "/tables/table-damian.png",
        "breczko": "/tables/table-damian.png",
        //Gabsa
        "gabsa": "/tables/table-gabsa.png",
        "gabrysia małyszko": "/tables/table-gabsa.png",
        "gabriela małyszko": "/tables/table-gabsa.png",
        "gabrysia malyszko": "/tables/table-gabsa.png",
        "gabriela malyszko": "/tables/table-gabsa.png",
        "małyszko": "/tables/table-gabsa.png",
        "gabsa małyszko": "/tables/table-gabsa.png",
        "gabsa malyszko": "/tables/table-gabsa.png",
        //Gabi Cz
        "gabi": "/tables/table-gabi.png",
        "gabrysia czajkowska": "/tables/table-gabi.png",
        "gabriela czajkowska": "/tables/table-gabi.png",
        "czajkowska": "/tables/table-gabi.png",
        //Sosna
        "sosna": "/tables/table-sosna.png",
        "mateusz": "/tables/table-sosna.png",
        "mateusz sosnowski": "/tables/table-sosna.png",
        "sosnowski": "/tables/table-sosna.png",
        //Patryk
        "patryk": "/tables/table-patryk.png",
        "patryk szymański": "/tables/table-patryk.png",
        "szymański": "/tables/table-patryk.png",
        "patryk szymanski": "/tables/table-patryk.png",
        "szymanski": "/tables/table-patryk.png",
        //Adam
        "adam": "/tables/table-adam.png",
        "adam sujeta": "/tables/table-adam.png",
        "loczek": "/tables/table-adam.png",
        //Ola S
        "ola sujeta": "/tables/table-ola-s.png",
        "aleksandra sujeta": "/tables/table-ola-s.png",
        //Ola K
        "ola korzyńska": "/tables/table-ola-k.png",
        "aleksandra korzyńska": "/tables/table-ola-k.png",
        "korzyńska": "/tables/table-ola-k.png",
        "korzynska": "/tables/table-ola-k.png",
        "ola korzynska": "/tables/table-ola-k.png",
        "aleksandra korzynska": "/tables/table-ola-k.png",
        "olcia": "/tables/table-ola-k.png",
        //Doma
        "doma": "/tables/table-doma.png",
        "domka": "/tables/table-doma.png",
        "dominika": "/tables/table-doma.png",
        "dominika wojtkowska": "/tables/table-doma.png",
        "wojtkowska": "/tables/table-doma.png",
        "doma wojtkowska-włodarczyk": "/tables/table-doma.png",
        "dominika wojtkowska-włodarczyk": "/tables/table-doma.png",
        "wojtkowska-włodarczyk": "/tables/table-doma.png",
        "doma wojtkowska": "/tables/table-doma.png",
        "wojtkowska-wlodarczyk": "/tables/table-doma.png",
        "doma wojtkowska-wlodarczyk": "/tables/table-doma.png",
        "dominika wojtkowska-wlodarczyk": "/tables/table-doma.png",
        //Lukaszek
        "łukaszek": "/tables/table-lukaszek.png",
        "lukamszek": "/tables/table-lukaszek.png",
        "łukamszek": "/tables/table-lukaszek.png",
        "łukasz": "/tables/table-lukaszek.png",
        "łukasz włodarczyk": "/tables/table-lukaszek.png",
        "lukasz": "/tables/table-lukaszek.png",
        "włodarczyk": "/tables/table-lukaszek.png",
        "wlodarczyk": "/tables/table-lukaszek.png",
        "lukasz wlodarczyk": "/tables/table-lukaszek.png",
        "lukaszek włodarczyk": "/tables/table-lukaszek.png",
        "lukaszek": "/tables/table-lukaszek.png",
        //Marysia
        "marysia": "/tables/table-marysia.png",
        "maria": "/tables/table-marysia.png",
        "maria górska": "/tables/table-marysia.png",
        "górska": "/tables/table-marysia.png",
        "marysia górska": "/tables/table-marysia.png",
        "marysia górska-bartnik": "/tables/table-marysia.png",
        "maria górska-bartnik": "/tables/table-marysia.png",
        "górska-bartnik": "/tables/table-marysia.png",
        "marysia bartnik": "/tables/table-marysia.png",
        "maria bartnik": "/tables/table-marysia.png",
        "maria gorska-bartnik": "/tables/table-marysia.png",
        "marysia gorska-bartnik": "/tables/table-marysia.png",
        //Michal Bartnik
        "michał bartnik": "/tables/table-michal-bartnik.png",
        "bartnik": "/tables/table-michal-bartnik.png",
        //Klaudia
        "klaudia": "/tables/table-klaudia.png",
        "klaudia szotko": "/tables/table-klaudia.png",
        "szotko": "/tables/table-klaudia.png",
        //Monika
        "monika": "/tables/table-monika.png",
        "monika bydełek": "/tables/table-monika.png",
        "bydełek": "/tables/table-monika.png",
        "bydelek": "/tables/table-monika.png",
        "monika bydelek": "/tables/table-monika.png",
        //Marcin
        "marcin": "/tables/table-marcin.png",
        "marcin bogdan": "/tables/table-marcin.png",
        "bogdan": "/tables/table-marcin.png",
        //Arturek
        "arturek": "/tables/table-arturek.png",
        "artur": "/tables/table-arturek.png",
        "artur ejsmont": "/tables/table-arturek.png",
        "ejsmont": "/tables/table-arturek.png",
        "arturek ejsmont": "/tables/table-arturek.png",
        //Krzys
        "krzyś": "/tables/table-krzys.png",
        "krzys": "/tables/table-krzys.png",
        "krzysiek": "/tables/table-krzys.png",
        "krzysztof": "/tables/table-krzys.png",
        "waczyński": "/tables/table-krzys.png",
        "krzysztof waczyński": "/tables/table-krzys.png",
        "krzysztof waczynski": "/tables/table-krzys.png",
        "waczynski": "/tables/table-krzys.png",
        "krzysiek waczyński": "/tables/table-krzys.png",
        "krzysiek waczynski": "/tables/table-krzys.png",
        "krzyś waczyński": "/tables/table-krzys.png",
        "krzyś waczynski": "/tables/table-krzys.png",
        //Tomek
        "tomek": "/tables/table-tomek.png",
        "tomek suchwałko": "/tables/table-tomek.png",
        "suchwałko": "/tables/table-tomek.png",
        "suchwalko": "/tables/table-tomek.png",
        "tomek suchwalko": "/tables/table-tomek.png",
        "tomasz suchwałko": "/tables/table-tomek.png",
        "tomasz suchwalko": "/tables/table-tomek.png",
        "tomasz": "/tables/table-tomek.png",
        "tomeczek": "/tables/table-tomek.png",
    };
    const image = () => {
        return contentDictionary[params.value.toLowerCase()] || "/tables/table-default.png";
    }

    return (
        <div className="w-full mt-4 content-center text-center block">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] m-auto mb-2"
                src={image()}
                alt="Rozkład stołu"
                width={500}
                height={50}
                priority
            />
            { image() !== "/tables/table-default.png" &&
                <h1 className="mt-8">Ale najczęsciej chcemy Was widzieć na parkiecie!</h1>
            }
        </div>
    )

}