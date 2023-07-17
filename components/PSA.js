import psaMessage from './psa.json' assert { type: 'json' };
import Link from "next/link";

const PSA = () => {
    let defaultStyle = "flex flex-row md:px-40 px-30 py-0.5 space-x-4";
    let styleImportant;
    let important;
    switch (psaMessage.important) {
        case 0:
            styleImportant = "hidden"
            defaultStyle += ' ' + styleImportant
            break;
        case 1:
            important = "WARNING!"
            styleImportant = "bg-yellow-700"
            defaultStyle += ' ' + styleImportant
            break;
        case 2:
            important = "EMERGENCY!"
            styleImportant = "bg-red-800"
            defaultStyle += ' ' + styleImportant
            break;

    }

    return (
        <div className={defaultStyle}>
            <p className="text-lg font-medium">{important}</p>
            <p>{psaMessage.announcement} {psaMessage.link && (
                <Link href={psaMessage.link}>
                    Learn more ↗
                </Link>
            )}</p>
        </div>
    )
}

export default PSA;
