import Header from "@/components/Header";

export const metadata = {
    title: 'Services',
    description: 'Information whether its safe to travel to other countries',
}

export default function Services() {
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
        </main>
    )
}
