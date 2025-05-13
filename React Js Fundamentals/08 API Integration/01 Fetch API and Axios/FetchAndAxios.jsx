const FetchAndAxios = () => {
    const [fetchData, setFetchData] = React.useState(null);
    const [axiosData, setAxiosData] = React.useState(null);

    // Using Fetch API
    const fetchWithFetch = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setFetchData(data);
    };

    // Using Axios (loaded via CDN)
    const fetchWithAxios = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
        setAxiosData(response.data);
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Fetch API and Axios</h2>
            <div className="flex space-x-4 mt-2">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={fetchWithFetch}
                >
                    Fetch with Fetch API
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={fetchWithAxios}
                >
                    Fetch with Axios
                </button>
            </div>
            <div className="mt-4">
                {fetchData && (
                    <div>
                        <h3 className="font-semibold">Fetch API Data:</h3>
                        <p>Title: {fetchData.title}</p>
                    </div>
                )}
                {axiosData && (
                    <div>
                        <h3 className="font-semibold">Axios Data:</h3>
                        <p>Title: {axiosData.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};