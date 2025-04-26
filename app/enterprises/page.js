import Header from "../components/Header";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        project_id: process.env.GOOGLE_PROJECT_ID,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});


async function fetchSheetData(spreadsheetId, range) {
    const client = await auth.getClient();
    const sheets = google.sheets('v4');
    const response = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId,
        range,
    });

    const rows = response.data.values;

    // Define the headers
    const headers = [
        'CompanyID',
        'Businesses',
        'ParentCompany',
        'Type',
        'Owner',
        'Status',
        'Notes'
    ];

    // Map rows to objects
    const formattedData = rows.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
            let value = row[index] || ''; // Assign empty string if value is missing
            if (header === 'Businesses') {
                value = value.includes('\n') ? value.split('\n') : [value]; // Split into array if multiple businesses
            }
            obj[header] = value;
        });
        return obj;
    });

    return Object.values(
        formattedData.reduce((acc, company) => {
            const parent = company.ParentCompany;
            if (!acc[parent]) {
                acc[parent] = {...company, Businesses: [...company.Businesses]};
            } else {
                acc[parent].Businesses = [...acc[parent].Businesses, ...company.Businesses];
            }
            return acc;
        }, {})
    );
}


export const metadata = {
    title: 'Enterprises',
    description: 'Registered enterprises in the Alure Regions',
}

export default async function Services() {
    const response = await fetchSheetData('1VWt21lvbqBRmpZPeC87ZXJphibMEATFp48PPW457q38', 'A1:G32');

    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
            <div className="sm:px-40 px-10 py-3 space-y-3 bg-zinc-800">
                <div className="bg-gray-950 p-5 rounded-2xl">
                    <h1 className="text-2xl font-medium">Want to start a business?</h1>
                    <p>Register with the Alure Regions government in order to operate a company.</p>
                </div>
                {/*<form>
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search companies..." required/>
                    </div>
                </form>*/}

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        response.map((company) => {
                            return (
                                <div key={company.ParentCompany} className="bg-gray-950 p-5 rounded-2xl">
                                    <h1 className="text-3xl py-1.5">{company.ParentCompany}</h1>
                                    <p>Business ID: {company.CompanyID} • Owner: {company.Owner}</p>
                                    <p>Type: {company.Type}</p>
                                    <p>Status: Operational</p>
                                    <h2 className="text-2xl py-1.5">Businesses</h2>
                                    <ul>
                                        {
                                            company.Businesses.map((business) => {
                                                return (
                                                    <li key={business}>
                                                        {business}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        company.Notes && (
                                            <>
                                                <h2 className="text-2xl py-1.5">Notes:</h2>
                                                <p>{company.Notes}</p>
                                            </>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
