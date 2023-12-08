import Header from "@/app/components/Header";

export const metadata = {
    title: 'Immigration',
    description: 'Planning on immigrating to the Alure Regions? Follow the instructions in this page to get started.',
}

export default function Immigration() {
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description}/>
            <div className="sm:px-40 px-10 py-3 space-y-3 bg-zinc-800">
                <h1 className="text-2xl font-medium">Getting Started on Immigration</h1>
                <p>Thinking about making Alure Regions your new home? We are here to guide you through the immigration
                    process.</p>
                <p>To get started, simply fill in the form below.</p>
                <button
                    className="transition duration-200 ease-in-out px-4 py-2 font-medium rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
                    <a href="https://forms.gle/nUPsqPgTYZ3CcKmk7">
                        Go to Google Form
                    </a>
                </button>
                <h1 className="text-2xl font-medium">Sections of the Application</h1>
                <ul>
                    <li>Personal Information: Provide your Family Name, First Given Name, and Date of Birth.</li>
                    <li>Compliance Affirmation: Check the corresponding boxes for the activities you have undertaken.
                    </li>
                    <li>The Oath of Citizenship: Upload an audio clip of yourself reciting the entire oath.</li>
                    <li>Final Section: Upload your signature.</li>
                </ul>
                <h1 className="text-2xl font-medium">What happens upon acceptance?</h1>
                <p>Upon acceptance, you will receive a letter by mail confirming your acceptance along with a
                    verification code.</p>
                <p>Next, proceed to the Regional Hall in Alee Isle to submit a valid identification document (such as a
                    Passport or Driver&apos;s License) along with the verification code.</p>
                <p>Following this, you will be required to visit a passport office to obtain an official
                    government-issued passport.</p>
            </div>
        </main>
    )
}
