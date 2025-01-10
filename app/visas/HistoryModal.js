const HistoryModal = ({ isVisible, onClose, countries, dangerLevel, visaInfo }) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    let historyList;
    if (visaInfo && visaInfo.length > 0) {
        historyList = visaInfo.map((event, index) => {
            return (
                <li key={index}>{event}</li>
            )
        })
    } else {
        historyList = <li>No additional information for {countries}.</li>;
    }

    return (
        <div id="wrapper" className="fixed inset-0 bg bg-opacity-25 backdrop-blur-sm flex justify-center items-center" onClick={handleClose}>
            <div className="w-[700px]">
                <div className="flex flex-col">
                    <div className="bg-zinc-800 p-5 rounded-lg border border-gray-700">
                        <div className="divide-y space-y-3">
                            <div>
                                <h1 className="font-medium text-3xl">{countries}</h1>
                                <h2 className="font-medium text-xl">{dangerLevel}</h2>
                            </div>
                            <div>
                                <h1 className="font-medium text-2xl pt-3">Additional Information</h1>
                                <ul>{historyList}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryModal;
