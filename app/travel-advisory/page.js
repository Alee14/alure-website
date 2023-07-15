export default function TravelAdvisory(){
    return (
        <main className="flex flex-col">
            <div className="bg-center bg-no-repeat bg-[url('/jumbotron.png')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-10 space-y-3">
                    <h1 className="font-medium text-2xl">Travel Advisory</h1>
                    <h2 className="font-light text-lg">Information whether its safe to travel to other countries</h2>
                    <h2 className="font-light text-lg">This page may be inaccurate at times, please refer to the discord for latest updates</h2>
                </div>
            </div>
            <div>
                <h1 className="text-3xl p-5">Legend</h1>
                <ul>
                    <li className="p-4 bg-green-900">
                        <p className="text-center">Take normal security precautions</p>
                    </li>
                    <li className="p-4 bg-yellow-700">
                        <p className="text-center">Exercise a high degree of caution</p>
                    </li>
                    <li className="p-4 bg-orange-700">
                        <p className="text-center">Avoid non-essential travel</p>
                    </li>
                    <li className="p-4 bg-red-700">
                        <p className="text-center">Avoid all travel</p>
                    </li>
                </ul>
            </div>
            <div className="bg-center bg-no-repeat bg-[url('/regions/silicon-valley.png')] bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-3 max-w-screen-xl text-left py-10 space-y-3">
                    <h1 className="font-medium text-5xl">Country name</h1>
                    <h2 className="text-lg">Take normal security precautions</h2>
                    <button className="bg-blue-600 px-4 py-2">Information</button>
                </div>
            </div>
        </main>
    )
}
