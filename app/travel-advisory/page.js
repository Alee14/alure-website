import countriesData from './countries.json' assert { type: 'json' };

export const metadata = {
    title: 'Travel Advisory',
    description: 'Information whether its safe to travel to other countries',
}

export async function getCountries(){
    const countries = countriesData.countries;

    return countries.map((country) => {
        let dangerLevel;
        switch (country.status) {
            case 0:
                dangerLevel = "Take normal security precautions"
                break;
            case 1:
                dangerLevel = "Exercise a high degree of caution"
                break;
            case 2:
                dangerLevel = "Avoid non-essential travel"
                break;
            case 3:
                dangerLevel = "Avoid all travel"
                break;
        }

        return (
            <div key="countries"
                 className="bg-center bg-no-repeat bg-[url('/regions/silicon-valley.webp')] bg-gray-600 bg-blend-multiply">
                <div className="sm:px-40 px-10 py-10 space-y-3">
                    <h1 className="font-medium text-5xl">{country.name}</h1>
                    <h2 className="text-lg">{dangerLevel}</h2>
                    <div className="flex flex-row space-x-3">
                        <button className="bg-blue-600 px-4 py-2">Information</button>
                        <button className="hidden bg-blue-600 px-4 py-2 settlements">View settlements</button>
                        <div className="hidden settlements-active:visible">
                            <h2 className="font-medium text-3xl">City 1</h2>
                            <h2 className="text-base">Take normal security precautions</h2>
                            <h2 className="font-medium text-3xl">City 2</h2>
                            <h2 className="text-base">Take normal security precautions</h2>
                            <h2 className="font-medium text-3xl">City 3</h2>
                            <h2 className="text-base">Take normal security precautions</h2>
                            <h2 className="font-medium text-3xl">City 4</h2>
                            <h2 className="text-base">Take normal security precautions</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

export default async function TravelAdvisory(){
    const countries = await getCountries();
    return (
        <main className="flex flex-col">
            <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-700 bg-blend-multiply">
                <div className="sm:px-40 px-10 max-w-screen-xl text-left py-24 lg:py-10 space-y-3">
                    <h1 className="font-medium text-4xl">{metadata.title}</h1>
                    <h2 className="font-light text-lg">{metadata.description}</h2>
                </div>
            </div>
            <div>
                <h1 className="p-5 sm:px-40 px-10 text-3xl" id="legend">Legend</h1>
                <ul>
                    <li className="p-6 sm:px-40 px-10 bg-green-950">
                        <p className="font-medium text-lg">Take normal security precautions</p>
                        <p>Take similar precautions to those you would take in Alure Regions.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-yellow-700">
                        <p className="font-medium text-lg">Exercise a high degree of caution</p>
                        <p>There are certain safety and security concerns or the situation could change quickly. Be very cautious at all times, monitor local media and follow the instructions of local authorities.</p>
                        <p><b className="font-semibold"> IMPORTANT:</b> The two levels below are official Government of Alure Regions Travel Advisories and are issued when the safety and security of Alurians travelling or living in the country or region may be at risk.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-orange-700">
                        <p className="font-medium text-lg">Avoid non-essential travel</p>
                        <p>Your safety and security could be at risk. You should think about your need to travel to this country, territory or region based on family or business requirements, knowledge of or familiarity with the region, and other factors. If you are already there, think about whether you really need to be there. If you do not need to be there, you should think about leaving.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-red-950">
                        <p className="font-medium text-lg">Avoid all travel</p>
                        <p>You should not travel to this country, territory or region. Your personal safety and security are at great risk. If you are already there, you should think about leaving if it is safe to do so.</p>
                    </li>
                </ul>
            </div>
            <div className="sm:px-40 px-10 py-3 bg-blue-800"><h2 className="font-medium text-lg">This page may be inaccurate at times, refer to the <a href="https://discord.com/channels/277922530973581312/1019705091336446052"  className="text-gray-400 hover:text-gray-300">Minecraft General Announcements</a> channel for the latest updates</h2></div>
            { /*<div className="bg-center bg-no-repeat bg-[url('/regions/silicon-valley.webp')] bg-gray-600 bg-blend-multiply">
                <div className="sm:px-40 px-10 py-10 space-y-3">
                    <h1 className="font-medium text-5xl">Country name</h1>
                    <h2 className="text-lg">Take normal security precautions</h2>
                    <div className="flex flex-row space-x-3">
                    <button className="bg-blue-600 px-4 py-2">Information</button>
                    </div>
                </div>
            </div> */ }
            {countries}
        </main>
    )
}