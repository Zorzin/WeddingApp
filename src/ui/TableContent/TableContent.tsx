import Image from "next/image";

interface Dictionary<T> {
    [Key: string]: T;
}

export default function TableContent({params} : {params: {value: string}}) {

    const contentDictionary : Dictionary<string> = {
        //Szymon
        "Szymon Bakunowicz": "/tables/table-szymon.png",
        "Szymon": "/tables/table-szymon.png",
        "Szymcio Bakunowicz": "/tables/table-szymon.png",
        "Szymcio": "/tables/table-szymon.png",
        //Madzia
        "Madzia Bakunowicz": "/tables/table-madzia.png",
        "Madzia Ostapowicz": "/tables/table-madzia.png",
        "Magdalena Ostapowicz": "/tables/table-madzia.png",
        "Magdalena Bakunowicz": "/tables/table-madzia.png",
        "Madzia": "/tables/table-madzia.png",
        //Magda T
        "Magda": "/tables/table-magda-t.png",
        "Magda Topczewska": "/tables/table-magda-t.png",
        "Magdalena Topczewska": "/tables/table-magda-t.png",
        "Topczewska": "/tables/table-magda-t.png",
        //Psor
        "Psor": "/tables/table-psor.png",
        "Michał Ostapowicz": "/tables/table-psor.png",
        "Michal Ostapowicz": "/tables/table-psor.png",
        "Psor Ostapowicz": "/tables/table-psor.png",
        //Julka
        "Julka": "/tables/table-julka.png",
        "Julka Ostapowicz": "/tables/table-julka.png",
        "Julia Ostapowicz": "/tables/table-julka.png",
        "Julia": "/tables/table-julka.png",
        //Pucioch
        "Pucioch": "/tables/table-pucioch.png",
        "Przemek": "/tables/table-pucioch.png",
        "Przemek Zawadzki": "/tables/table-pucioch.png",
        //Paulina
        "Paulina": "/tables/table-paulina.png",
        "Paulina Waszczeniuk-Zawadzka": "/tables/table-paulina.png",
        "Paulina Waszczeniuk": "/tables/table-paulina.png",
        "Paulina Zawadzka": "/tables/table-paulina.png",
        //Kozak
        "Kozak": "/tables/table-kozak.png",
        "Seba": "/tables/table-kozak.png",
        "Sebastian Kozak": "/tables/table-kozak.png",
        "Sebastian": "/tables/table-kozak.png",
        //Luiza S
        "Luiza Sokólska": "/tables/table-luiza.png",
        "Sokólska": "/tables/table-luiza.png",
        "Luiza Sokolska": "/tables/table-luiza.png",
        "Sokolska": "/tables/table-luiza.png",
        //Lusia
        "Lusia": "/tables/table-lusia.png",
        "Luiza Chorchiel": "/tables/table-lusia.png",
        "Chorchiel": "/tables/table-lusia.png",
        "Lusia Chorchiel": "/tables/table-lusia.png",
        //Damian
        "Damian Breczko": "/tables/table-damian.png",
        "Damian": "/tables/table-damian.png",
        "Breczko": "/tables/table-damian.png",
        //Gabsa
        "Gabsa": "/tables/table-gabsa.png",
        "Gabrysia Małyszko": "/tables/table-gabsa.png",
        "Gabriela Małyszko": "/tables/table-gabsa.png",
        "Gabrysia Malyszko": "/tables/table-gabsa.png",
        "Gabriela Malyszko": "/tables/table-gabsa.png",
        "Małyszko": "/tables/table-gabsa.png",
        "Gabsa Małyszko": "/tables/table-gabsa.png",
        "Gabsa Malyszko": "/tables/table-gabsa.png",
        //Gabi Cz
        "Gabi": "/tables/table-gabi.png",
        "Gabrysia Czajkowska": "/tables/table-gabi.png",
        "Gabriela Czajkowska": "/tables/table-gabi.png",
        "Czajkowska": "/tables/table-gabi.png",
        //Sosna
        "Sosna": "/tables/table-sosna.png",
        "Mateusz": "/tables/table-sosna.png",
        "Mateusz Sosnowski": "/tables/table-sosna.png",
        "Sosnowski": "/tables/table-sosna.png",
        //Patryk
        "Patryk": "/tables/table-patryk.png",
        "Patryk Szymański": "/tables/table-patryk.png",
        "Szymański": "/tables/table-patryk.png",
        "Patryk Szymanski": "/tables/table-patryk.png",
        "Szymanski": "/tables/table-patryk.png",
        //Adam
        "Adam": "/tables/table-adam.png",
        "Adam Sujeta": "/tables/table-adam.png",
        "Loczek": "/tables/table-adam.png",
        //Ola S
        "Ola Sujeta": "/tables/table-ola-s.png",
        "Aleksandra Sujeta": "/tables/table-ola-s.png",
        //Ola K
        "Ola Korzyńska": "/tables/table-ola-k.png",
        "Aleksandra Korzyńska": "/tables/table-ola-k.png",
        "Korzyńska": "/tables/table-ola-k.png",
        "Korzynska": "/tables/table-ola-k.png",
        "Ola Korzynska": "/tables/table-ola-k.png",
        "Aleksandra Korzynska": "/tables/table-ola-k.png",
        //Doma
        "Doma": "/tables/table-doma.png",
        "Dominika": "/tables/table-doma.png",
        "Dominika Wojtkowska": "/tables/table-doma.png",
        "Wojtkowska": "/tables/table-doma.png",
        "Doma Wojtkowska-Włodarczyk": "/tables/table-doma.png",
        "Dominika Wojtkowska-Włodarczyk": "/tables/table-doma.png",
        "Wojtkowska-Włodarczyk": "/tables/table-doma.png",
        "Doma Wojtkowska": "/tables/table-doma.png",
        "Wojtkowska-Wlodarczyk": "/tables/table-doma.png",
        "Doma Wojtkowska-Wlodarczyk": "/tables/table-doma.png",
        "Dominika Wojtkowska-Wlodarczyk": "/tables/table-doma.png",
        //Lukaszek
        "Łukaszek": "/tables/table-lukaszek.png",
        "Łukasz": "/tables/table-lukaszek.png",
        "Łukasz Włodarczyk": "/tables/table-lukaszek.png",
        "Lukasz": "/tables/table-lukaszek.png",
        "Włodarczyk": "/tables/table-lukaszek.png",
        "Wlodarczyk": "/tables/table-lukaszek.png",
        "Lukasz Wlodarczyk": "/tables/table-lukaszek.png",
        "Lukaszek Włodarczyk": "/tables/table-lukaszek.png",
        "Lukaszek": "/tables/table-lukaszek.png",
        //Marysia
        "Marysia": "/tables/table-marysia.png",
        "Maria": "/tables/table-marysia.png",
        "Maria Górska": "/tables/table-marysia.png",
        "Górska": "/tables/table-marysia.png",
        "Marysia Górska": "/tables/table-marysia.png",
        "Marysia Górska-Bartnik": "/tables/table-marysia.png",
        "Maria Górska-Bartnik": "/tables/table-marysia.png",
        "Górska-Bartnik": "/tables/table-marysia.png",
        "Marysia Bartnik": "/tables/table-marysia.png",
        "Maria Bartnik": "/tables/table-marysia.png",
        "Maria Gorska-Bartnik": "/tables/table-marysia.png",
        "Marysia Gorska-Bartnik": "/tables/table-marysia.png",
        //Michal Bartnik
        "Michał Bartnik": "/tables/table-michal-bartnik.png",
        "Bartnik": "/tables/table-michal-bartnik.png",
        //Klaudia
        "Klaudia": "/tables/table-klaudia.png",
        "Klaudia Szotko": "/tables/table-klaudia.png",
        "Szotko": "/tables/table-klaudia.png",
        //Monika
        "Monika": "/tables/table-monika.png",
        "Monika Bydełek": "/tables/table-monika.png",
        "Bydełek": "/tables/table-monika.png",
        "Bydelek": "/tables/table-monika.png",
        "Monika Bydelek": "/tables/table-monika.png",
        //Marcin
        "Marcin": "/tables/table-marcin.png",
        "Marcin Bogdan": "/tables/table-marcin.png",
        "Bogdan": "/tables/table-marcin.png",
        //Arturek
        "Arturek": "/tables/table-arturek.png",
        "Artur": "/tables/table-arturek.png",
        "Artur Ejsmont": "/tables/table-arturek.png",
        "Ejsmont": "/tables/table-arturek.png",
        "Arturek Ejsmont": "/tables/table-arturek.png",
        //Krzys
        "Krzyś": "/tables/table-krzys.png",
        "Krzysiek": "/tables/table-krzys.png",
        "Krzysztof": "/tables/table-krzys.png",
        "Waczyński": "/tables/table-krzys.png",
        "Krzysztof Waczyński": "/tables/table-krzys.png",
        "Krzysztof Waczynski": "/tables/table-krzys.png",
        "Waczynski": "/tables/table-krzys.png",
        "Krzysiek Waczyński": "/tables/table-krzys.png",
        "Krzysiek Waczynski": "/tables/table-krzys.png",
        "Krzyś Waczyński": "/tables/table-krzys.png",
        "Krzyś Waczynski": "/tables/table-krzys.png",
        //Tomek
        "Tomek": "/tables/table-tomek.png",
        "Tomek Suchwałko": "/tables/table-tomek.png",
        "Suchwałko": "/tables/table-tomek.png",
        "Suchwalko": "/tables/table-tomek.png",
        "Tomek Suchwalko": "/tables/table-tomek.png",
        "Tomasz Suchwałko": "/tables/table-tomek.png",
        "Tomasz Suchwalko": "/tables/table-tomek.png",
        "Tomasz": "/tables/table-tomek.png",
        "Tomeczek": "/tables/table-tomek.png",
    };
    const image = () => {
        return contentDictionary[params.value] || "/next.svg";
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
        </div>
    )

}