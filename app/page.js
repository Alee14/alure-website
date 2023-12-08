import getPostMetadata from "./updates/getPostMetadata";
import PostPreview from "./updates/PostPreview";
import Link from "next/link";

export const metadata = {
    title: 'Home - Government of Alure Regions',
    description: 'The official website of the Government of Alure Regions',
}
export default function Home() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.slice(0,3).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
  return (
    <main className="flex flex-col">
        <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 space-y-3">
                <h1 className="font-medium md:text-5xl text-4xl">Welcome to the Alure Regions</h1>
                <h2 className="font-light md:text-3xl text-xl">The official website of the Government of the Alure Regions</h2>
            </div>
        </div>
            <ul>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Alee Isle</h1>
                            <span>Est. 2017 - Premier: Alee</span>
                            <h2 className="text-lg">Capital of the Alure Regions and the original home of MinePot</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/breadcroust.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">BreadCroust</h1>
                            <span>Est. 2018 - Premier: Croust</span>
                            <h2 className="text-lg">Home to the Alurian athletes</h2>
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
        <div className="sm:px-40 px-10 py-3 space-y-3 bg-zinc-800">
            <h1 className="text-2xl font-medium" id="about">About Alure Regions</h1>
            <p>Alure Regions was founded in July 2023 with the goal of achieving greater autonomy in our regions.</p>
            <p>Originally known as Alee Isle Regions, we later became Southeastern Islands before branching out on our own.</p>
            <p>We are committed to continuous improvement and growth as small regions.</p>
            <h1 className="text-2xl font-medium">Latest Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
            <Link href="/updates"><p className="text-blue-500 hover:text-blue-300 pt-2">View more</p></Link>
        </div>
    </main>
  )
}
