"use client"
import countriesData from '@/app/countries.json' with { type: 'json' };
import HistoryModal from "@/app/visas/HistoryModal";
import { useState } from "react";

export function getDangerLevel(danger, override) {
    if (danger === 0 && override !== undefined) {
        danger = override;
    }

    let dangerLevel;
    switch (danger) {
        case false:
            dangerLevel = "Visa not required"
            break;
        case true:
            dangerLevel = "Visa required"
            break;
    }

    return dangerLevel;
}

export function Countries(){
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedDangerLevel, setSelectedDangerLevel] = useState(null);
    const [selectedCountryHistory, setSelectedCountryHistory] = useState(null);
    const countries = countriesData.countries;

    return countries.map((country) => {
        let dangerLevel = getDangerLevel(country.visa);

        return (
            <div key={country.name} id={country.url} className="bg-center bg-no-repeat bg-[image:var(--image-url)] bg-gray-500 bg-blend-multiply" style={{'--image-url': `url(${country.image})`}} >
                <div className="sm:px-40 px-10 py-10 space-y-3">
                    <h1 className="font-medium md:text-5xl text-3xl">{country.name}</h1>
                    <h2 className="text-lg">{dangerLevel}</h2>
                    <button className="transition duration-200 ease-in-out px-4 py-2 font-medium rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800" onClick={()=> {
                        setSelectedCountry(country.name);
                        setSelectedDangerLevel(dangerLevel)
                        setSelectedCountryHistory(country.visaInfo)
                        setShowModal(true)
                    }}>Information</button>
                </div>
                <HistoryModal isVisible={showModal} onClose={() => setShowModal(false)} countries={selectedCountry} dangerLevel={selectedDangerLevel} visaInfo={selectedCountryHistory} />
            </div>
        )
    })
}
