const EffectCleanup = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    const TimerComponent = () => {
        React.useEffect(() => {
            const timer = setInterval(() => {
                console.log('Timer running...');
            }, 1000);

            // Cleanup function (runs on unmount or before re-running effect)
            return () => {
                clearInterval(timer);
                console.log('useEffect Cleanup: Timer cleared (Unmount)');
            };
        }, []); // Empty dependency array = runs once on mount

        return <p>Timer Component (Unmount me to see cleanup)</p>;
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Cleanup in useEffect</h2>
            {isVisible && <TimerComponent />}
            <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? 'Unmount Timer' : 'Mount Timer'}
            </button>
            <p className="mt-2">Check the console for cleanup logs.</p>
        </div>
    );
};