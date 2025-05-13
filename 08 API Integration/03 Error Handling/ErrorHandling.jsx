const ErrorHandling = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
        try {
            // Simulate an error by using an invalid endpoint
            const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Error Handling</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                onClick={fetchData}
            >
                Fetch Data (Expect Error)
            </button>
            <div className="mt-2">
                {error && <p className="text-red-500">Error: {error}</p>}
                {data && (
                    <div>
                        <h3 className="font-semibold">Post Title:</h3>
                        <p>{data.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};