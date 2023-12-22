export default function NotFound() {
    return (
        <main className="flex flex-col text-center">
            <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-700 bg-blend-multiply">
                <div className="mx-auto max-w-screen-xl h-screen pt-40 space-y-5">
                    <h1 className="text-7xl font-medium">404</h1>
                    <h1 className="text-4xl font-light">The page you are looking for does not exist.</h1>
                </div>
            </div>
        </main>
    )
}
