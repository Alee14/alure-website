export const metadata = {
    title: 'Home - Government of Alure Regions',
    description: 'The official website of the Government of Alure Regions',
}
export default function Home() {
  return (
    <main className="flex flex-col">
        <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 space-y-3">
                <h1 className="font-medium md:text-5xl text-2xl">Welcome to the Alure Regions</h1>
                <h2 className="font-light md:text-3xl text-lg">The official website of the Government of Alure Regions</h2>
            </div>
        </div>
            <ul>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Alee Isle</h1>
                            <span>Est. 2017 - Premier: Alee</span>
                            <h2 className="text-lg">Capital of Alure Regions and the original home of MinePot</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/breadcroust.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">BreadCroust</h1>
                            <span>Est. 2018 - Premier: Croust</span>
                            <h2 className="text-lg">Home to MinePot Barton Centre and athletics</h2>
                        </div>
                </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/skycity.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">SkyCity</h1>
                            <span>Est. 2018 - Premier: Rahilu</span>
                         <h2 className="text-lg">A city that floats in the sky</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/silicon-valley.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Silicon Valley</h1>
                            <span>Est. 2018 - Premier: Inkydink</span>
                            <h2 className="text-lg">Where all things tech-related lie</h2>
                        </div>
                    </div>
                </li>
            </ul>
        <div className="sm:px-40 px-10 py-3">
            <h1 className="text-2xl font-medium" id="about">About Alure Regions</h1>
            <p>Founded in July 2023, the goal of Alure Regions is to have more freedom on our regions.</p>
            <h1 className="text-2xl font-medium">Latest Updates</h1>
        </div>
    </main>
  )
}