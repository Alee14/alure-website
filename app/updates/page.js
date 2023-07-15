import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export const metadata = {
    title: 'Updates',
    description: 'Follow the latest updates from the Government of Alure Regions',
}

export default function Updates() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <main className="flex flex-col">
            <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-700 bg-blend-multiply">
                <div className="md:px-40 px-10 max-w-screen-xl text-left py-24 lg:py-10 space-y-3">
                    <h1 className="font-medium text-4xl">{metadata.title}</h1>
                    <h2 className="font-light text-lg">{metadata.description}</h2>
                </div>
            </div>
            <div className="md:px-60 px-2 py-3">
                <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
            </div>
        </main>
    )
}
