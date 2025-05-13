const LoadingStates = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        const result = await response.json();
        setData(result);
        setLoading(false);
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Loading States</h2>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                onClick={fetchData}
            >
                Fetch Data
            </button>
            <div className="mt-2">
                {loading && <p className="text-blue-500">Loading...</p>}
                {data && !loading && (
                    <div>
                        <h3 className="font-semibold">Post Title:</h3>
                        <p>{data.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};