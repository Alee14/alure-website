import { Countries } from "./ListCountries";
import Header from "../components/Header";

export const metadata = {
    title: 'Visas',
    description: 'Information whether a country is required a visa or not.  ',
}

export default async function TravelAdvisory(){
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
            <Countries />
        </main>
    )
}
