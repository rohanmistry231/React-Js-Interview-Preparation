const AsyncData = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []); // Empty dependency array to run once on mount

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Handling Asynchronous Data</h2>
            {data ? (
                <div className="mt-2">
                    <h3 className="font-semibold">Post Title:</h3>
                    <p>{data.title}</p>
                </div>
            ) : (
                <p className="mt-2">Fetching data...</p>
            )}
        </div>
    );
};