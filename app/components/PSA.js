import psaMessage from './psa.json' with { type: 'json' };
import Link from "next/link";

const PSA = () => {
    let defaultStyle = "flex flex-row md:px-40 sm:px-30 sm:py-0.5 p-3 space-x-2";
    let styleImportant;
    let important;
    switch (psaMessage.important) {
        case 0:
            styleImportant = "hidden"
            defaultStyle += ' ' + styleImportant
            break;
        case 1:
            important = "Latest News:"
            styleImportant = "bg-zinc-700"
            defaultStyle += ' ' + styleImportant
            break;
        case 2:
            important = "WARNING!"
            styleImportant = "bg-yellow-700"
            defaultStyle += ' ' + styleImportant
            break;
        case 3:
            important = "EMERGENCY!"
            styleImportant = "bg-red-800"
            defaultStyle += ' ' + styleImportant
            break;

    }

    return (
        <div className={defaultStyle}>
            <p className="text-lg font-medium sm:p-0">{important}</p>
            <div className="flex sm:flex-row flex-col sm:space-x-3">
                <p>{psaMessage.announcement}</p>
                <p className="text-blue-200 hover:text-blue-500 active:text-blue-700">
                {psaMessage.link && (
                    <Link href={psaMessage.link}>
                        Learn more
                    </Link>
                )}</p>
            </div>
        </div>
    )
}

export default PSA;
